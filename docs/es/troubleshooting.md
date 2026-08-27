---
title: Solución de problemas
description: Soluciones para problemas habituales de instalación e inicio de Breezell, incluido el aviso de aplicación dañada en macOS.
---

# Solución de problemas

Aquí encontrarás soluciones prácticas para problemas habituales de instalación e inicio de Breezell. Añadiremos nuevos casos a medida que se identifiquen.

## Instalar Breezell en macOS

1. Abre la página de descargas de Breezell y selecciona **macOS**.
2. En un Mac con chip Apple M1, M2, M3 o posterior, descarga **Apple Silicon**.
3. Abre la imagen descargada, arrastra **Breezell.app** a **Aplicaciones**, espera a que termine la copia e inícialo desde **Finder → Aplicaciones**.

## «Breezell.app está dañada» o «desarrollador no identificado»

macOS puede añadir un atributo de cuarentena a aplicaciones descargadas fuera de App Store. El aviso no significa necesariamente que el archivo esté dañado.

![Instalación de Breezell y solución del aviso de aplicación dañada](/troubleshooting/macos-installation-guide.png)

### 1. Abre Terminal

Pulsa **Comando (⌘) + Espacio**, busca **Terminal** y ábrelo. También puedes ir a **Aplicaciones → Utilidades → Terminal**.

### 2. Elimina la cuarentena de Breezell

Pega este comando y pulsa **Retorno**:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

Introduce la contraseña de administrador del Mac y vuelve a pulsar **Retorno**. La contraseña no se muestra al escribir. Si no aparece ningún resultado, normalmente el comando se ejecutó correctamente.

El comando solo elimina la cuarentena de **Breezell.app**; no desactiva Gatekeeper ni cambia la seguridad de otras aplicaciones.

### 3. Abre Breezell de nuevo

Vuelve a **Aplicaciones** e inicia Breezell otra vez.

::: warning Seguridad
Úsalo únicamente con Breezell descargado del sitio web oficial. No elimines la cuarentena de aplicaciones cuyo origen no sea de confianza.
:::

## «No such file or directory»

Mueve Breezell a **Aplicaciones** y confirma que se llama exactamente **Breezell.app**. Si está en otra ubicación, sustituye `/Applications/Breezell.app` por la ruta real.
