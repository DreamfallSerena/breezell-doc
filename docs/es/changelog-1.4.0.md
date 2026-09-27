# Breezell 1.4.0 — Notas de versión

**Fecha de lanzamiento: 26/09/2026 (hora del Pacífico de EE. UU.)**

## Nuevas funciones

### Modelos y capacidades

- Añadidos modelos: GLM-5.5 Flash, GLM-5.4, Kimi K4, DeepSeek V4.1 Pro y Muse Spark 1.4.
- Image Studio añade soporte para Hy Image 3.5 y Qwen Image 2.1.

## Interacción y diseño

- La vista previa de diseños usa el tema actual del editor y los Design Token del proyecto.
- Las variables CSS no declaradas muestran información de ayuda en lugar de provocar un fallo.
- `DESIGN.md` del Workspace se incluye en las instrucciones del workflow.
- Los diseños confirmados se guardan como archivos HTML independientes en `.breezell/design/`.

## Notificaciones

- Nuevo panel con lista a la izquierda y detalles a la derecha.
- Las notificaciones importantes quedan fijadas arriba.

## Correcciones y mejoras

- Las nuevas ramas copian primero el contenido original de la conversación.
- Las conversaciones largas se cargan progresivamente.
- El resaltado de código en streaming ahora se actualiza de forma incremental.
- La eliminación de conversaciones compacta la base de datos inmediatamente.
- La caché SCM mejora el rendimiento con muchos archivos modificados.
