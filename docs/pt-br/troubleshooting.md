---
title: Solução de problemas
description: Soluções para problemas comuns de instalação e inicialização do Breezell, incluindo o aviso de aplicativo danificado no macOS.
---

# Solução de problemas

Aqui estão soluções práticas para problemas comuns de instalação e inicialização do Breezell. Novos casos serão adicionados quando forem identificados.

## Instalar o Breezell no macOS

1. Abra a página de download do Breezell e selecione **macOS**.
2. Em um Mac com chip Apple M1, M2, M3 ou posterior, baixe **Apple Silicon**.
3. Abra a imagem baixada, arraste **Breezell.app** para **Aplicativos**, aguarde a cópia e inicie-o em **Finder → Aplicativos**.

## “Breezell.app está danificado” ou “desenvolvedor não identificado”

O macOS pode adicionar um atributo de quarentena a aplicativos baixados fora da App Store. O aviso não significa necessariamente que o arquivo esteja danificado.

![Instalação do Breezell e solução do aviso de aplicativo danificado](/troubleshooting/macos-installation-guide.png)

### 1. Abra o Terminal

Pressione **Command (⌘) + Espaço**, procure **Terminal** e abra-o. Também é possível usar **Aplicativos → Utilitários → Terminal**.

### 2. Remova a quarentena do Breezell

Cole o comando e pressione **Return**:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

Digite a senha de administrador do Mac e pressione **Return** novamente. A senha não aparece durante a digitação. Se não houver saída, normalmente o comando foi concluído com sucesso.

O comando remove a quarentena apenas de **Breezell.app**. Ele não desativa o Gatekeeper nem altera a segurança de outros aplicativos.

### 3. Abra o Breezell novamente

Volte para **Aplicativos** e inicie o Breezell outra vez.

::: warning Segurança
Use somente com o Breezell baixado do site oficial. Não remova a quarentena de aplicativos de origem não confiável.
:::

## “No such file or directory”

Mova o Breezell para **Aplicativos** e confirme que o nome é exatamente **Breezell.app**. Se estiver em outro local, substitua `/Applications/Breezell.app` pelo caminho real.
