---
title: Complementos
description: Instala complementos del mercado de Breezell o crea uno con la API de Breezell.
---

# Complementos

Un complemento de Breezell es una extensión de VS Code que además trae `vscode.breezell`, de modo que puede trabajar con el propio Breezell: el chat, el Agent, el selector de modelos y las pantallas del editor. Los complementos solo se ejecutan mientras has iniciado sesión en Breezell; al cerrar sesión se desactivan.

## Instalar y gestionar

Abre **Box ▸ Complementos**. El mercado lista todos los complementos publicados: búscalos, fíltralos por categoría, alterna entre código abierto y cerrado y pasa las páginas. Cada tarjeta tiene Instalar, Abrir, un interruptor de activación y Desinstalar.

- **Instalados** muestra una fila por complemento, con su estado, versión, origen, licencia, id y tarjetas para sus ventanas, lo que añade y sus permisos.
- **Desarrollar** crea un complemento a partir de una plantilla y enumera los pasos del código al mercado.
- **Instalar .vsix local** instala un paquete que hayas creado tú; un paquete cuya suma de comprobación no coincida con la publicada no se instala.

Un complemento que añade un panel o una ventana también aparece bajo Complementos en la barra lateral de Box.

## Tipos de complementos

| Tipo | Qué es | Ejemplo |
|---|---|---|
| Pack | Sin código: skills, reglas para la IA, servidores MCP y temas declarados en `package.json` | Starter Pack |
| Panel | Un panel dentro de Breezell con su propia página, siguiendo la conversación | Focus Player |
| AI | Comandos que usan tu modelo de chat | Doc Writer |
| Window | Una ventana propia, que también puede abrirse sin el editor | Focus Timer |
| Conversation | Lee conversaciones, envía mensajes y aprueba llamadas a herramientas | Chat Mirror |
| Screens | Botones, páginas, partes reemplazadas, bloques de código y modos en las propias pantallas de Breezell | Desk Pet |
| Companion | Una mascota sobre el cuadro de entrada que sigue lo que hace la IA | Desk Pet |
| Long-running | Mantiene una conversación hasta terminar algo, con límites y su propia página | Goal |

Los tipos se combinan: un complemento puede traer skills, un panel, comandos de IA y una ventana. Para un complemento grande con su propia página de ajustes, datos descargados de una release de GitHub y una parte instalada en el sistema, mira Breezell IME.

## Crear un complemento

En Breezell, abre **Box ▸ Complementos ▸ Desarrollar**, escribe un id y un nombre, elige una plantilla (Pack, Panel, AI command, Window o Minimal) y si es de código abierto o cerrado, luego escoge una carpeta y ábrela en una ventana nueva. Pulsa **F5** para ejecutarlo.

Desde la línea de comandos (Node.js 18 o posterior):

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| Comando | Qué hace |
|---|---|
| `npm run build` / `npm run watch` | Empaqueta `src/extension.ts` en `dist/extension.js` con esbuild |
| `npm run typecheck` | Comprobación de tipos de TypeScript |
| `npm run validate` | Comprueba `package.json` |
| `npm run package:open` | Empaqueta como código abierto: el código fuente y los source maps van en el paquete |
| `npm run package:closed` | Empaqueta como código cerrado: solo código minificado, sin código fuente ni source maps |
| `npm run submit -- --market` | Añade el paquete al mercado |

## Qué puede hacer un complemento

Un complemento declara en `package.json` los permisos que necesita; lo que no declara se rechaza. Los permisos habituales, como saber cuándo empieza o termina un turno, se conceden de forma predeterminada. Los más delicados, como usar tu modelo de chat, leer conversaciones, enviar mensajes, aprobar llamadas a herramientas, leer tu código o el cuadro de entrada, cambiar un mensaje antes de enviarlo o leer tus claves de API personalizadas, se preguntan la primera vez que el complemento los usa y la respuesta se recuerda.

Los complementos no pueden llegar a tu cuenta, plan, cuota, facturación, ajustes de API personalizadas, diálogos de permisos, aprobaciones de herramientas ni a las pantallas de gestión de complementos. Lo que necesite tu intervención se muestra por encima de la ventana del complemento, y un botón que añada a Breezell se marca como "De complemento: nombre".

## Publicar

Haz un fork del [repositorio BreezellCode](https://github.com/BreezellCode/BreezellCode), empaqueta el complemento (`npm run package:open` o `npm run package:closed`), ejecuta `npm run submit -- --market` y abre una pull request. La comprobación del mercado se ejecuta y un mantenedor lo revisa. Los complementos de código cerrado solo incluyen código minificado.

## Guía completa para desarrolladores

La guía completa —`package.json`, cada permiso, cada llamada de la API, errores, límites, el chat, modelos y proveedores, el Agent, las pantallas de Breezell, ventanas, reinicio, traducciones, seguridad, publicación y recetas— está en el repositorio:

- [Resumen de complementos](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [Primeros pasos](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [Referencia de la API](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [Permisos](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [Publicación](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

Todo complemento creado desde una plantilla incluye además una skill de IA en `.agents/skills/breezell-plugin/`, con esas páginas como referencias, para que un asistente pueda seguir la misma guía.
