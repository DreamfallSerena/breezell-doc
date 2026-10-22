---
title: Solução de problemas
description: Escolha o download certo do Breezell para macOS, Windows ou Linux e resolva os avisos “Breezell.app está danificado” e “desenvolvedor não identificado” do macOS.
---

# Solução de problemas

Esta página reúne soluções para problemas comuns de instalação e inicialização. Novos casos serão adicionados à medida que surgirem.

::: tip Sobre as telas desta página
A página de download abaixo foi recriada em HTML a partir do código-fonte do breezell.com, que está em inglês. A caixa de diálogo do macOS e a janela do Terminal foram desenhadas para mostrar o que você verá em um Mac.
:::

## Escolher o download certo {#download}

Abra a página de download em [breezell.com/download](https://breezell.com/download). No topo, ela recomenda a versão para o seu computador; mais abaixo, escolha a sua plataforma para ver todas as versões. Clique nas abas aqui para compará-las:

<BzXiazai gaoliang="fenye" biaoji="1" />

| Plataforma | Versão | Indicada para |
| --- | --- | --- |
| macOS | Apple Silicon | Macs com chip M1, M2, M3, M4 ou mais recente |
| macOS | Intel | Macs mais antigos com processador Intel |
| macOS | Universal | Os dois tipos, como versão legada |
| Windows | x64 · System / ARM64 · System | Instala para todos os usuários do computador; exige direitos de administrador |
| Windows | x64 · User / ARM64 · User | Instala só para o seu usuário; não exige direitos de administrador |
| Linux | .deb | Ubuntu, Debian e derivados (x64, ARM64, ARM32) |
| Linux | .rpm | Fedora, RHEL, CentOS e derivados (x64, ARM64, ARM32) |

Para ver o chip do seu Mac, abra o menu Apple ▸ **Sobre Este Mac** (About This Mac). Os lançamentos anteriores ficam em **View past versions**, no fim da página de download.

## Instalar o Breezell no macOS {#install-macos}

1. Baixe a versão para o seu Mac na página de download.
2. Abra a imagem baixada e arraste **Breezell.app** para **Aplicativos** (Applications). Aguarde até a cópia terminar.
3. Inicie o Breezell em **Finder ▸ Aplicativos**.

## “Breezell.app está danificado” ou “desenvolvedor não identificado” {#damaged}

O macOS marca os aplicativos baixados fora da App Store com um atributo de quarentena. Em alguns Macs, isso faz com que o macOS se recuse a abrir o Breezell e mostre um aviso como este, mesmo que o aplicativo não esteja danificado:

<BzXiazai ye="jinggao" />

Clique em **Cancelar** (Cancel), não em **Mover para o Lixo** (Move to Trash), e siga os passos abaixo uma única vez. Os mesmos passos aparecem na página de download quando o macOS está selecionado:

<BzXiazai gaoliang="zhinan" biaoji="1" />

### 1. Abrir o Terminal {#open-terminal}

Pressione **Command (⌘) + barra de espaço** para abrir o Spotlight, digite **Terminal** e pressione **Return**. Você também pode encontrá-lo em **Aplicativos ▸ Utilitários ▸ Terminal** (Applications ▸ Utilities ▸ Terminal).

### 2. Remover o atributo de quarentena do Breezell {#remove-quarantine}

Cole este comando e pressione **Return**:

```bash
sudo xattr -rd com.apple.quarantine "/Applications/Breezell.app"
```

O Terminal pede a senha de administrador do Mac. Digite-a e pressione **Return**; os caracteres não aparecem enquanto você digita.

<BzXiazai ye="zhongduan" />

Se nada for exibido, normalmente o comando funcionou. Ele remove o atributo de quarentena apenas do **Breezell.app**; o Gatekeeper e as verificações de segurança dos outros aplicativos continuam como estão.

### 3. Abrir o Breezell novamente {#reopen}

Volte para **Aplicativos** e inicie o Breezell.

::: warning Segurança
Faça isso somente com o Breezell baixado do site oficial. Não remova o atributo de quarentena de aplicativos cuja origem não seja confiável para você.
:::

## “No such file or directory” {#no-such-file}

O comando não encontrou o aplicativo em `/Applications/Breezell.app`. Mova o Breezell para **Aplicativos** e confira se o nome é exatamente **Breezell.app**. Se você o mantém em outro lugar, substitua `/Applications/Breezell.app` no comando pelo caminho real dele.

## Ainda com problemas? {#contact}

Consulte [Problemas conhecidos](/known-issues) ou fale conosco pela [página de contato](https://breezell.com/contact), informando o seu sistema operacional, a versão do Breezell e a mensagem exata que aparece.
