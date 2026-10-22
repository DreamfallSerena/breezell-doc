---
title: Configuración de idioma
description: Cambia el idioma de la interfaz de Breezell en Box y el idioma de visualización del propio editor.
---

# Configuración de idioma

La interfaz de Breezell está disponible en ocho idiomas: <BzWenben jian="general.language.en" />, <BzWenben jian="general.language.ja" />, <BzWenben jian="general.language.ko" />, <BzWenben jian="general.language.es" />, <BzWenben jian="general.language.ptBR" />, <BzWenben jian="general.language.ru" />, <BzWenben jian="general.language.zh" /> y <BzWenben jian="general.language.zhTW" />. Puedes elegir uno al instalar Breezell y cambiarlo en cualquier momento.

::: tip Sobre las pantallas de esta página
Las pantallas de Breezell que aparecen a continuación están recreadas en HTML a partir del código fuente de Breezell. Su texto sigue el idioma de esta página; el menú de idioma de esta página es interactivo y cambia la pantalla a la que pertenece, igual que en Breezell.
:::

## Dos tipos de idioma

Una ventana de Breezell tiene dos capas, y cada una tiene su propia configuración de idioma:

| Capa | Qué abarca | Dónde cambiarlo |
| --- | --- | --- |
| **Interfaz de Breezell** | Box, el chat, los selectores de modelo y de modo, y los demás paneles de Breezell | Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" /> |
| **Idioma de visualización del editor** | Las partes que provienen de Code – OSS: la barra de menús, la paleta de comandos y los editores integrados de configuración y de atajos de teclado | `Configure Display Language` más un paquete de idioma |

Casi todo lo que usas a diario es la interfaz de Breezell, así que normalmente te basta con la primera configuración.

## Cambiar el idioma de la interfaz de Breezell

### 1. Abrir Box

Haz clic en **Box** en el conmutador situado a la izquierda de la barra de título. También puedes elegir <BzWenben jian="box.title" /> en el menú del engranaje, arriba a la derecha, o ejecutar `Breezell: Open Settings` desde la paleta de comandos.

<BzBiaotilan gaoliang="box" />

### 2. Abrir General e idioma

En la barra lateral de Box, abre el grupo <BzWenben jian="box.title" /> y haz clic en <BzWenben jian="tab.general" />.

<BzHezi ye="tab.general" gaoliang="ye" biaoji="2" />

### 3. Elegir tu idioma

La primera tarjeta de la página es <BzWenben jian="general.language.title" />. Abre el menú situado a la derecha de su fila y elige un idioma. Pruébalo aquí:

<BzChangguiye gaoliang="yuyan" biaoji="3" />

La descripción de la tarjeta indica lo que ocurre después: <BzWenben jian="general.language.desc" />

Cada idioma aparece con su propio nombre, así que siempre podrás encontrar el tuyo aunque la interfaz esté en un idioma que no sepas leer.

## Cambiar el idioma de visualización del editor

La barra de menús, la paleta de comandos y las demás partes que provienen de Code – OSS siguen el idioma de visualización del editor. Para cambiarlo:

1. Pulsa `Ctrl+Shift+P` (`Cmd+Shift+P` en macOS) para abrir la paleta de comandos.
2. Ejecuta `Configure Display Language`.
3. Elige tu idioma. Si aún no está instalado, elige instalarlo; Breezell descarga el paquete de idioma desde el marketplace de extensiones.
4. Reinicia Breezell cuando te lo pida.

Las dos configuraciones son independientes. Por ejemplo, puedes mantener el editor en inglés y usar Breezell en <BzWenben jian="general.language.zhTW" />.

## Más sobre la página General e idioma

La misma página contiene otras dos tarjetas:

- <BzWenben jian="general.dataManagement.title" />: importa, exporta o restablece tu configuración de Breezell (<BzWenben jian="general.tabs.settings" />) y tu historial de chats (<BzWenben jian="general.tabs.chats" />). La configuración se exporta como un archivo `.json`; los chats se exportan como un `.zip` que también incluye los archivos adjuntos y los puntos de control de cada conversación. Al importar chats, Breezell te pregunta si quieres combinarlos con tus chats actuales o reemplazarlos. Para restablecer, Breezell te pide que hagas clic una segunda vez antes de borrar nada.
- <BzWenben jian="general.tabs.ide" />: accesos directos a la configuración, los atajos de teclado y el tema de color del propio editor.

## Resumen

1. Haz clic en **Box** en la barra de título.
2. Abre <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.general" />.
3. Elige un idioma en la tarjeta <BzWenben jian="general.language.title" />. Se aplica de inmediato.
4. Si también quieres los menús y la paleta de comandos en ese idioma, ejecuta `Configure Display Language` y reinicia.
