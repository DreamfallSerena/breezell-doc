---
title: Solución de problemas
description: Elige la descarga correcta de Breezell para macOS, Windows o Linux, y soluciona los avisos de macOS «Breezell.app está dañado» y «desarrollador no identificado».
---

# Solución de problemas

Esta página reúne soluciones para problemas habituales de instalación e inicio. Iremos añadiendo más casos a medida que surjan.

::: tip Sobre las pantallas de esta página
La página de descargas que verás a continuación está recreada en HTML a partir del código fuente de breezell.com, que está en inglés. El cuadro de diálogo de macOS y la ventana de Terminal están dibujados para mostrar lo que verás en un Mac.
:::

## Elegir la descarga correcta {#download}

Abre la página de descargas en [breezell.com/download](https://breezell.com/download). En la parte superior te recomienda la compilación para tu equipo; más abajo, elige tu plataforma para ver todas las compilaciones. Haz clic en las pestañas para compararlas:

<BzXiazai gaoliang="fenye" biaoji="1" />

| Plataforma | Compilación | Para |
| --- | --- | --- |
| macOS | Apple Silicon | Mac con chip M1, M2, M3, M4 o posterior |
| macOS | Intel | Mac más antiguos con procesador Intel |
| macOS | Universal | Ambos tipos de Mac, como compilación heredada |
| Windows | x64 · System / ARM64 · System | Se instala para todos los usuarios del equipo; requiere permisos de administrador |
| Windows | x64 · User / ARM64 · User | Se instala solo para tu usuario; no requiere permisos de administrador |
| Linux | .deb | Ubuntu, Debian y sus derivadas (x64, ARM64, ARM32) |
| Linux | .rpm | Fedora, RHEL, CentOS y sus derivadas (x64, ARM64, ARM32) |

Para comprobar el chip de tu Mac, abre el menú Apple ▸ **Acerca de este Mac** (About This Mac). Las versiones anteriores aparecen en **View past versions**, al final de la página de descargas.

## Instalar Breezell en macOS {#install-macos}

1. Descarga la compilación para tu Mac desde la página de descargas.
2. Abre la imagen descargada y arrastra **Breezell.app** a **Aplicaciones** (Applications). Espera a que termine la copia.
3. Inicia Breezell desde **Finder ▸ Aplicaciones**.

## «Breezell.app está dañado» o «desarrollador no identificado» {#damaged}

macOS marca con un atributo de cuarentena las aplicaciones descargadas fuera de App Store. En algunos Mac, esto hace que macOS se niegue a abrir Breezell con un aviso como este, aunque la aplicación no esté dañada:

<BzXiazai ye="jinggao" />

Haz clic en **Cancelar** (Cancel), no en **Trasladar a la Papelera** (Move to Trash), y sigue una vez los pasos de abajo. Los mismos pasos aparecen en la página de descargas cuando se selecciona macOS:

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. Abre Terminal {#open-terminal}

Pulsa **Comando (⌘) + barra espaciadora** (Command + Space) para abrir Spotlight, escribe **Terminal** y pulsa **Retorno** (Return). También puedes encontrarlo en **Aplicaciones ▸ Utilidades ▸ Terminal** (Applications ▸ Utilities ▸ Terminal).

### 2. Elimina el atributo de cuarentena de Breezell {#remove-quarantine}

Pega este comando y pulsa **Retorno**:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

Terminal te pide la contraseña de administrador del Mac. Escríbela y pulsa **Retorno**; los caracteres no se muestran mientras escribes.

<BzXiazai ye="zhongduan" />

Si no aparece ninguna salida, normalmente el comando ha funcionado. Solo elimina el atributo de cuarentena de **Breezell.app**; Gatekeeper y las comprobaciones de seguridad de las demás aplicaciones siguen como están.

### 3. Abre Breezell de nuevo {#reopen}

Vuelve a **Aplicaciones** e inicia Breezell.

::: warning Seguridad
Haz esto solo con Breezell descargado del sitio web oficial. No elimines el atributo de cuarentena de aplicaciones cuyo origen no sea de confianza.
:::

## «No such file or directory» {#no-such-file}

El comando no encontró la aplicación en `/Applications/Breezell.app`. Mueve Breezell a **Aplicaciones** y comprueba que se llame exactamente **Breezell.app**. Si la guardas en otro lugar, sustituye `/Applications/Breezell.app` en el comando por su ruta real.

## ¿Sigues sin poder resolverlo? {#contact}

Consulta [Problemas conocidos](/known-issues) o contáctanos a través de la [página de contacto](https://breezell.com/contact) indicando tu sistema operativo, la versión de Breezell y el mensaje exacto que ves.
