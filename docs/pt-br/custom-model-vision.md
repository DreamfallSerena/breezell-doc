---
title: Visão para modelos personalizados
description: Use outro modelo configurado para adicionar reconhecimento de imagens a um modelo personalizado no Breezell.
---

# Visão para modelos personalizados

> Adicione reconhecimento de imagens a um modelo de texto personalizado por meio de um modelo de visão independente.

## Antes de começar

Se o seu modelo personalizado não oferece suporte a entrada multimodal, o Breezell 1.2.8 permite que ele obtenha reconhecimento de imagens por meio de outro modelo. Primeiro configure o modelo compatível com visão e depois atribua-o ao modelo personalizado que precisa interpretar imagens.

## Abra as configurações de modelos

1. Na barra de ferramentas do canto superior direito do editor, clique no ícone de engrenagem das configurações.
2. No menu, selecione **Breezell Settings**.
3. Na barra lateral de configurações, selecione **Models**.

Se você ainda não configurou o modelo personalizado, conclua primeiro a [configuração da API personalizada](/pt-br/custom-api).

## Abra as configurações do Vision Proxy

1. Na lista de modelos, encontre o modelo personalizado que precisa de reconhecimento de imagens.
2. Clique no pequeno ícone de olho desse modelo para abrir o **Vision Proxy**.

![Lista de modelos com o botão Vision Proxy destacado](/custom-model-vision/open-vision-proxy-settings.png)

## Escolha um modelo de reconhecimento de imagens

1. Na caixa de diálogo **Vision Proxy**, abra o seletor **Image recognition model**.
2. Selecione um modelo configurado que ofereça suporte a reconhecimento de imagens.
3. Clique em **Save** para salvar a seleção.

![Caixa de diálogo Vision Proxy com a seleção do modelo de reconhecimento de imagens e Save destacados](/custom-model-vision/select-vision-recognition-model.png)

## Inicie uma conversa

Selecione o modelo personalizado em uma conversa, anexe uma imagem e envie a mensagem. O Breezell usa o modelo de reconhecimento de imagens selecionado para ajudar o modelo personalizado a processar a imagem.

![Conversa em que o modelo personalizado reconhece uma imagem anexada por meio do modelo de reconhecimento de imagens selecionado](/custom-model-vision/custom-model-vision-conversation.png)
