---
title: Introducción
description: Conoce Breezell, un editor de código con IA basado en Code – OSS, y pasa de la instalación a tu primer cambio asistido por IA.
---

# Introducción

Breezell es un editor de código con IA basado en VS Code (Code – OSS). El editor, tus extensiones y tus atajos de teclado funcionan como ya los conoces, y junto a ellos hay una IA que puede leer tu proyecto, editar archivos, ejecutar comandos y usar herramientas por su cuenta.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell de esta guía no son capturas de pantalla: están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página y sus colores siguen el selector claro / oscuro de este sitio. Las insignias naranjas numeradas son solo etiquetas de esta guía.
:::

## La ventana de Breezell

<BzChuangti wen="Carga el archivo de configuración una sola vez al arrancar y guárdalo en caché." da="Listo. Ahora config.ts lee el archivo una sola vez y conserva el resultado ya analizado, e index.ts llama a loadConfig() antes de que arranque el servidor." />

| | Parte | Qué es |
| --- | --- | --- |
| 1 | **Box \| Agent** | Cambia toda la ventana entre la página **Agent** (tu código y la IA) y la página **Box** (ajustes y datos). |
| 2 | Editor | El editor de Code – OSS, con sus pestañas, el explorador de archivos, la búsqueda, Git y las extensiones. |
| 3 | Chat | Donde hablas con la IA. Un chat también puede abrirse como pestaña del editor junto a tu código. |
| 4 | Modo | Cuánto puede hacer la IA en esta conversación, desde el chat simple hasta los agentes autónomos. Consulta [Modos](#modes). |
| 5 | Modelo | Qué modelo responde, con sus opciones de contexto, razonamiento y velocidad. |

### Agent y Box

**Agent** es donde trabajas: el editor y el chat, uno al lado del otro.

**Box** es la página de administración. Su barra lateral reúne los <BzWenben jian="box.title" /> (modelos y proveedores, opciones de funciones, ajustes generales y de idioma, MCP y Skills, privacidad, funciones experimentales) y los datos relacionados con tu trabajo: <BzWenben jian="box.review.group" />, <BzWenben jian="box.memory.group" />, <BzWenben jian="box.storage.group" />, <BzWenben jian="box.perf.group" />, <BzWenben jian="box.database.group" /> y <BzWenben jian="box.vault.group" />. El chat sigue abierto mientras estás en Box.

<BzHezi />

## Modos {#modes}

El selector de modo, abajo a la izquierda del cuadro de entrada del chat, decide qué puede hacer la IA. Cada modo tiene su propio color en el cuadro de entrada:

| Modo | En palabras de Breezell |
| --- | --- |
| <BzMoshi moshi="normal" /> | <BzWenben jian="chatMode.normalDetail" /> — <BzWenben jian="chatMode.normalExplain" /> |
| <BzMoshi moshi="plan" /> | <BzWenben jian="chatMode.planDetail" /> — <BzWenben jian="chatMode.planExplain" /> |
| <BzMoshi moshi="analyze" /> | <BzWenben jian="chatMode.analyzeDetail" /> — <BzWenben jian="chatMode.analyzeExplain" /> |
| <BzMoshi moshi="entanglement" /> | <BzWenben jian="chatMode.entanglementDetail" /> — <BzWenben jian="chatMode.entanglementExplain" /> |
| <BzMoshi moshi="agent" /> | <BzWenben jian="chatMode.agentDetail" /> — <BzWenben jian="chatMode.agentExplain" /> |
| <BzMoshi moshi="agent_teams" /> | <BzWenben jian="chatMode.agentTeamsDetail" /> |
| <BzMoshi moshi="dark_selene" /> | <BzWenben jian="chatMode.darkSeleneDetail" /> |

Entanglement y Teams se desbloquean cuando cinco amigos te ayudan o con cualquier plan de pago. Teams y DarkSelene consumen muchos más tokens que los demás modos. [Selección de modo](/mode-selection) explica cuándo conviene usar cada uno.

## Modelos

Breezell agrupa los modelos en cuatro tipos de proveedores:

- **Breezell**: los modelos oficiales de Breezell, con cargo a tu cuota de Breezell.
- **Iniciar sesión**: cuentas que ya tienes, como ChatGPT (Codex), GitHub Copilot, Kimi, Grok, Gemini, DeepSeek, MiniMax u OpenRouter.
- **Proveedores API**: APIs oficiales de los fabricantes con tu propia clave, como Anthropic, OpenAI, Gemini o DeepSeek.
- **Compatible con OpenAI**: hasta 50 ranuras para relays, pasarelas y proxies autoalojados.

Todo, salvo los modelos de Breezell, funciona con tu propia clave o cuenta. [API personalizada (BYOK)](/custom-api) lo explica paso a paso con modelos Claude.

## Qué más incluye Breezell

- **Super Memory**: memoria a largo plazo entre conversaciones, con una biblioteca de memoria que puedes explorar y editar. Consulta [Super Memory](/super-memory).
- **Breezell Mind**: mantiene las conversaciones largas dentro del presupuesto condensando el historial más antiguo en notas de trabajo, mientras el registro original se conserva en el disco.
- **Revisión de código**: una página para revisar los cambios de la IA, con diferencias por archivo y reversión con un clic.
- **Breezell Browser**: un navegador integrado que la IA puede abrir, leer y manejar.
- **MCP y Skills**: conecta herramientas externas mediante el Model Context Protocol y reutiliza skills en distintos proyectos. Consulta [Configuración de instrucciones y habilidades](/prompt-settings).
- **Base de datos**: conéctate a SQLite, MySQL, PostgreSQL, SQL Server, Oracle, MariaDB, MongoDB y Redis desde el propio editor.
- **Bóveda**: guarda las direcciones de los relays y las claves en el llavero del sistema y las rellena donde las necesitas.
- **Image Studio**: genera imágenes y vídeos.
- **Actualizaciones en caliente**: las nuevas versiones se descargan dentro del editor y se aplican tras reiniciar, sin necesidad de reinstalar.

## Primeros pasos

1. Descarga Breezell para tu plataforma e instálalo.
2. Inicia sesión en tu cuenta de Breezell.
3. Elige el idioma de la interfaz. Consulta [Configuración de idioma](/settings-page-language-settings).
4. Elige tus modelos: usa los modelos de Breezell de inmediato o trae tu propia clave con [API personalizada (BYOK)](/custom-api).
5. Abre una carpeta de proyecto, elige un modo y un modelo debajo del cuadro de entrada del chat, describe lo que quieres y envíalo.

> Breezell está basado en Code – OSS (licencia MIT). VS Code y Visual Studio Code son marcas comerciales de Microsoft Corporation. Breezell no está afiliado a Microsoft ni cuenta con su respaldo.
