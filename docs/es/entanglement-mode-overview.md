---
title: Resumen del modo Entanglement
description: Resumen técnico del modo Entanglement de Breezell, incluido el seguimiento del estado causal, las restricciones de validación, la visualización y la memoria convergente.
---

# Resumen del modo Entanglement

> Entanglement es un modo de mejora del razonamiento causal para problemas complejos.

## Resumen

El modo Entanglement de Breezell no es un algoritmo cuántico ni un modo de colaboración que inicie automáticamente varios modelos.
Su implementación combina las capacidades de Agent, una máquina de estados causales, restricciones de predicción/intervención/verificación, un panel de visualización y memoria convergente.
No hace que el modelo subyacente sea repentinamente más inteligente. En su lugar, conserva y vuelve a inyectar de forma continua las hipótesis, evidencias, experimentos y conclusiones de las tareas complejas.

## 1. Conclusiones principales

Entanglement no sustituye por completo a Agent. Es una mejora con estado para problemas complejos.

- **Capacidades de herramientas:** Entanglement hereda las capacidades de archivos, terminal, búsqueda, MCP e índice de código de Agent.
- **Organización del razonamiento:** Entanglement mantiene además etapas, causas raíz, hipótesis, evidencias, predicciones, verificaciones y confianza.
- **Eficiencia de ejecución:** Agent suele ser más rápido para tareas bien definidas; Entanglement añade sobrecarga de contexto y tokens.
- **Mejor ámbito de uso:** Entanglement es más adecuado para errores desconocidos, fallos entre módulos y problemas que requieren validación experimental.
- **Límite de capacidades:** No existe un modelo Entanglement independiente, un módulo de computación cuántica ni una ruta predeterminada de ejecución paralela entre varios modelos.

## 2. Cómo funciona

### 1. Selección del modo

La lista de modos del frontend incluye `normal`, `plan`, `analyze`, `entanglement`, `agent` y `agent_teams`.
Después de seleccionar Entanglement, los turnos posteriores de la conversación activan el seguimiento del estado causal.

### 2. Herencia de las capacidades de Agent

La resolución del modo en el backend asigna `entanglement` al tipo Agent, por lo que puede seguir llamando a herramientas de archivos, terminal, búsqueda, MCP e índice de código.
Esto también lo distingue de los modos de solo análisis: Entanglement todavía puede modificar el proyecto y ejecutar verificaciones.

### 3. Inyección del estado causal actual

Cada solicitud lleva el estado causal actual del hilo y utiliza el contexto de archivos activos, espacio de trabajo y herramientas del nivel Agent.

### 4. El mismo ciclo de modelo y herramientas

Entanglement y Agent utilizan las mismas capacidades de modelo y ejecución de herramientas.
Por tanto, no es lo mismo que Agent Teams ni crea varias IA independientes de forma predeterminada. Solo pueden aparecer subtareas o llamadas de herramientas adicionales cuando el modelo utiliza activamente las herramientas correspondientes.

### 5. Análisis de la respuesta del modelo

Después de que responde el modelo, el sistema analiza la etapa, la causa raíz, las hipótesis, las evidencias, las predicciones y los resultados de verificación, y los guarda en el hilo actual.
El turno siguiente continúa utilizando este estado; la interfaz muestra el bloque de estado estructurado como «Causal Trace Complete».

### 6. Visualización y análisis en tiempo real

El componente del panel de Entanglement `G1` muestra la etapa actual, la confianza, la causa raíz, las hipótesis, las evidencias, el grafo causal, la corrección, la verificación y las correcciones del sistema.
Durante la salida en streaming del modelo, el frontend vuelve a analizar el estado según el crecimiento del texto o intervalos de tiempo. Durante las fases de salida no LLM, elimina los resultados temporales del análisis.

### 7. Memoria después de la convergencia

Cuando el estado alcanza una etapa `CONVERGE` con alta confianza y existe una causa raíz clara, el sistema organiza el problema en un nodo de Memory Bank con la etiqueta `causal-case`.
La memoria incluye síntomas, causa raíz, mecanismo, evidencias decisivas, corrección, grafo causal, hipótesis rechazadas y resultados de verificación.

### Flujo de datos

```text
Seleccionar Entanglement en el menú de modos
        ↓
Establecer chatMode global = "entanglement"
        ↓
Leer causalState del hilo actual
        ↓
Inyectar contexto causal manteniendo el ciclo estándar de LLM/herramientas
        ↓
Analizar la etapa, hipótesis, evidencias y resultados de verificación devueltos por el modelo
        ↓
Escribir el estado en el hilo y actualizar el panel
        ↓
Escribir una memoria causal después de la convergencia con alta confianza
```

## 3. Máquina de estados causales

### 1. Etapas

| Etapa | Significado |
| --- | --- |
| `OBSERVE` | Recopilar fenómenos y evidencias mientras la causa raíz aún no está clara. |
| `INTERVENE` | Proponer una acción que necesita una herramienta o un experimento para validarse. |
| `CONVERGE` | Cerrar gradualmente el ciclo entre la causa raíz, la corrección y la verificación. |
| `BACKTRACK` | La hipótesis actual ha sido rechazada y el razonamiento debe volver a un punto anterior. |

### 2. Campos de estado

El estado principal del hilo incluye `phase`, `rootCause`, `mechanism`, `confidence`, `hypotheses`, `evidenceLog`, `evidenceSummary`, `causalGraph`, `causalGraphEdges`, `counterfactual`, `fix`, `verify`, `pendingPrediction`, `turnCount`, `stuckTurns` y `corrections`.

### 3. Gestión de hipótesis

Las hipótesis utilizan identificadores como `H1` y `H2` y registran un estado `testing`, `confirmed` o `rejected`.
También se guardan el Kill Criterion, la Lesson, el turno de creación y el último turno en que se tocaron, para evitar volver a adoptar razonamientos ya rechazados.

### 4. Evidencias y grafos causales

Las evidencias admiten cinco niveles: `++`, `+`, `~`, `-` y `--`. También se puede registrar la herramienta de origen de la evidencia.
El analizador conserva las 20 evidencias detalladas más recientes y comprime el contenido anterior en un resumen. Las aristas causales admiten `A -> B`, `A -x B` y pesos opcionales, y se deduplican.
Estos niveles de evidencia y aristas causales son registros estructurados del contenido propuesto por el modelo, no conclusiones calculadas automáticamente por un motor estadístico independiente.

### 5. Umbrales de confianza

El sistema aplica un umbral heurístico a la confianza `HIGH`:

- Debe existir una causa raíz clara; no puede permanecer como `UNKNOWN`.
- Se necesitan al menos dos evidencias positivas con nivel `+` o `++`.
- Si la etapa `CONVERGE` no alcanza el umbral de alta confianza, se degrada a `INTERVENE`.

Los cambios de confianza se conservan en el historial. Si la confianza no aumenta durante varios turnos, `stuckTurns` aumenta y el panel muestra un estado estancado.

## 4. El ciclo de predicción, intervención y verificación

Cuando el modelo propone una `Intervention` y una predicción, el sistema guarda `pendingPrediction`.
Después de ejecutar la herramienta, el modelo debe proporcionar un resultado de verificación. La predicción pendiente se cierra solo después de analizar un `Verdict`.

El sistema también comprueba si el compromiso declarado coincide con la llamada real a la herramienta:

- Si el modelo dice que realizará una intervención pero no llama a ninguna herramienta, registra `no_tool_recovery` y solicita otra ejecución.
- Si el modelo dice que llamará a la herramienta A pero en realidad llama a la herramienta B, registra `wrong_tool_recovery` y solicita realineación.
- La recuperación causal tiene un presupuesto limitado de reintentos; la implementación actual utiliza un presupuesto de 3.

Esto significa que Entanglement no solo pide al modelo que escriba un análisis: le exige convertirlo en acciones de herramientas verificables.

## 5. En qué es más fuerte que Agent

### 1. Mejor para causas raíz desconocidas

Agent puede adivinar una causa y empezar a editar de inmediato. Entanglement conserva la causa como hipótesis y exige explicar cómo podría refutarse.

### 2. Mejor para investigaciones de varios turnos

La etapa actual, las evidencias, las hipótesis rechazadas y las predicciones pendientes pasan al contexto del turno siguiente, reduciendo la posibilidad de perder el progreso de la investigación cuando la conversación crece.

### 3. Mejor para detectar direcciones equivocadas

`BACKTRACK`, `rejected`, Kill Criterion y Lesson proporcionan conjuntamente una ruta de recuperación.

### 4. Más fácil de supervisar manualmente

El panel resume el estado de trabajo del modelo en etapas, confianza, causa raíz, evidencias y registros de corrección, de modo que los usuarios pueden detectar si el modelo está dando vueltas.

### 5. Puede conservar casos exitosos

Después de una convergencia con alta confianza, el sistema escribe una memoria `causal-case` que, en teoría, puede recuperarse como experiencia para problemas similares.

## 6. En qué no es necesariamente más fuerte que Agent

### 1. Más lento para tareas bien definidas

El análisis de estados, los resúmenes causales y el protocolo de verificación añaden una sobrecarga de proceso que los cambios simples no necesitan.

### 2. Mayor consumo de tokens

Cada turno incluye contexto adicional del modo, estado causal, historial de evidencias y resúmenes estandarizados.

### 3. Sigue dependiendo de información declarada por el modelo

El modelo propone principalmente la causa raíz, los niveles de evidencia y el grafo causal. El sistema los analiza, almacena, muestra y corrige de forma limitada.

### 4. Pueden producirse errores de clasificación del protocolo

Si el modelo no genera campos causales reconocibles, el sistema puede reutilizar el estado anterior, reducir la confianza, aumentar los turnos estancados o activar una recuperación.

### 5. No es una prueba formal

`HIGH` es solo un juicio heurístico basado en una causa raíz clara y al menos dos evidencias positivas. No equivale a una prueba matemática ni a una validación causal real.

## 7. Elegir entre modos

| Tipo de tarea | Modo recomendado | Motivo |
| --- | --- | --- |
| Cambios pequeños y claros, actualizaciones de estilo o campos de interfaz sencillos | Agent | Sus herramientas son suficientes y el flujo es más corto. |
| Errores desconocidos, regresiones o fallos entre módulos | Entanglement | Requieren un ciclo cerrado de hipótesis, evidencias, intervención y verificación. |
| Analizar una solución sin ejecutar cambios todavía | Plan o Analyze | Reduce la modificación y la ejecución directas. |
| Procesar varios módulos independientes en paralelo | Agent Teams | Es el modo específico de colaboración entre varias IA. |

## 8. Evaluación final

Si «potente» significa permisos de herramientas, Entanglement es, en general, tan capaz como Agent. Si significa organización del razonamiento, continuidad del estado y verificación para problemas complejos, Entanglement es más fuerte.
Si significa velocidad, eficiencia de tokens y ejecución directa para tareas sencillas, el Agent estándar es más adecuado.
Por tanto, la descripción más precisa es:

> **Entanglement = Agent + seguimiento del estado causal + restricciones de predicción/intervención/verificación + visualización + memoria convergente.**

No es un sustituto completo de Agent, sino un modo mejorado diseñado para depuración compleja y problemas inciertos.

## 9. Nota importante

«Causal Trace Complete» en la interfaz indica que se ha analizado el bloque de estado estructurado. No significa que la causa raíz haya sido demostrada de forma independiente.
