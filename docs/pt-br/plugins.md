---
title: Plugins
description: Instale plugins do mercado do Breezell ou crie um com a API do Breezell.
---

# Plugins

Um plugin do Breezell é uma extensão do VS Code que também traz `vscode.breezell`, então consegue trabalhar com o próprio Breezell: o chat, o Agent, o seletor de modelos e as telas do editor. Os plugins só rodam enquanto você está conectado ao Breezell; ao sair, eles são desativados.

## Instalar e gerenciar

Abra **Box ▸ Plugins**. O mercado lista todos os plugins publicados: pesquise, filtre por categoria, alterne entre código aberto e fechado e navegue página a página. Cada cartão tem Instalar, Abrir, um interruptor de ativação e Desinstalar.

- **Instalados** mostra uma linha por plugin, com status, versão, origem, licença, id e cartões para suas janelas, o que ele adiciona e suas permissões.
- **Desenvolver** cria um plugin a partir de um modelo e lista os passos do código até o mercado.
- **Instalar .vsix local** instala um pacote que você mesmo gerou; um pacote cuja soma de verificação não confere com a publicada não é instalado.

Um plugin que adiciona um painel ou uma janela também aparece em Plugins na barra lateral do Box.

## Tipos de plugins

| Tipo | O que é | Exemplo |
|---|---|---|
| Pack | Sem código: skills, regras para a IA, servidores MCP e temas declarados no `package.json` | Starter Pack |
| Panel | Um painel dentro do Breezell com a própria página, acompanhando a conversa | Focus Player |
| AI | Comandos que usam o seu modelo de chat | Doc Writer |
| Window | Uma janela própria, que também pode abrir sem o editor | Focus Timer |
| Conversation | Lê conversas, envia mensagens e aprova chamadas de ferramentas | Chat Mirror |
| Screens | Botões, páginas, partes substituídas, blocos de código e modos nas próprias telas do Breezell | Desk Pet |
| Companion | Um mascote sobre a caixa de entrada que acompanha o que a IA faz | Desk Pet |
| Long-running | Mantém uma conversa até algo terminar, com limites e página própria | Goal |

Os tipos se combinam: um plugin pode trazer skills, um painel, comandos de IA e uma janela. Para um plugin grande, com página de configurações, dados baixados de uma release do GitHub e uma parte instalada no sistema, veja o Breezell IME.

## Criar um plugin

No Breezell, abra **Box ▸ Plugins ▸ Desenvolver**, informe um id e um nome, escolha um modelo (Pack, Panel, AI command, Window ou Minimal) e se é de código aberto ou fechado, depois selecione uma pasta e abra-a em uma nova janela. Pressione **F5** para executar.

Pela linha de comando (Node.js 18 ou posterior):

```bash
curl -O https://raw.githubusercontent.com/BreezellCode/BreezellCode/main/plugins/devkit/breezell-plugin.mjs
node breezell-plugin.mjs init my-plugin --id my-name.my-plugin --display-name "My Plugin" --template webview
cd my-plugin
npm install
```

| Comando | O que faz |
|---|---|
| `npm run build` / `npm run watch` | Empacota `src/extension.ts` em `dist/extension.js` com esbuild |
| `npm run typecheck` | Verificação de tipos do TypeScript |
| `npm run validate` | Verifica o `package.json` |
| `npm run package:open` | Empacota como código aberto: o código-fonte e os source maps vão no pacote |
| `npm run package:closed` | Empacota como código fechado: apenas código minificado, sem código-fonte nem source maps |
| `npm run submit -- --market` | Adiciona o pacote ao mercado |

## O que um plugin pode fazer

Um plugin declara no `package.json` as permissões de que precisa; tudo o que não declarar é recusado. Permissões do dia a dia, como saber quando um turno começa ou termina, são concedidas por padrão. As mais delicadas, como usar o seu modelo de chat, ler conversas, enviar mensagens, aprovar chamadas de ferramentas, ler o seu código ou a caixa de entrada, alterar uma mensagem antes de enviá-la ou ler as suas chaves de API personalizadas, são pedidas na primeira vez que o plugin as usa, e a resposta é lembrada.

Os plugins não alcançam a sua conta, plano, cota, cobrança, configurações de API personalizadas, diálogos de permissão, aprovações de ferramentas nem as telas de gerenciamento de plugins. O que precisar de você aparece acima da janela do plugin, e um botão que ele adiciona ao Breezell é marcado como "Do plugin: nome".

## Publicar

Faça um fork do [repositório BreezellCode](https://github.com/BreezellCode/BreezellCode), empacote o plugin (`npm run package:open` ou `npm run package:closed`), execute `npm run submit -- --market` e abra um pull request. A verificação do mercado roda e um mantenedor revisa. Plugins de código fechado levam apenas código minificado.

## Guia completo para desenvolvedores

O guia completo — `package.json`, cada permissão, cada chamada da API, erros, limites, o chat, modelos e provedores, o Agent, as telas do Breezell, janelas, reinício, traduções, segurança, publicação e receitas — fica no repositório:

- [Visão geral dos plugins](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/README.md)
- [Primeiros passos](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/getting-started.md)
- [Referência da API](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/api.md)
- [Permissões](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/permissions.md)
- [Publicação](https://github.com/BreezellCode/BreezellCode/blob/main/plugins/docs/publishing.md)

Todo plugin criado a partir de um modelo também traz uma skill de IA em `.agents/skills/breezell-plugin/`, com essas páginas como referências, para que um assistente siga o mesmo guia.
