---
title: Обзор параметров функций
description: Все переключатели на странице «Функции» в Breezell — отдельные модели, подсказки для продолжения, разрешения инструментов, поведение редактора, уведомления, режим плана, веб-поиск и доступ к файлам — с их значениями по умолчанию и назначением.
---

# Обзор параметров функций

**Функции** — это страница в Box, где вы решаете, на какой модели работает каждая вспомогательная функция и насколько самостоятельно может действовать агент. На ней пять групп: <BzWenben jian="featureOptions.group.models" />, <BzWenben jian="featureOptions.group.execution" />, <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" /> и <BzWenben jian="featureOptions.group.system" />.

::: tip Об экранах на этой странице
Экраны Breezell ниже воссозданы на HTML по исходному коду Breezell. Текст на них следует языку этой страницы. Все переключатели и меню изначально стоят в значениях Breezell по умолчанию; нажимайте на них, чтобы увидеть, как меняется строка.
:::

## Как открыть страницу «Функции»

1. Откройте Box (сторона **Box** переключателя в строке заголовка или команда **Breezell: Open Settings** в палитре команд).
2. В группе <BzWenben jian="box.title" /> слева нажмите <BzWenben jian="tab.featureOptions" />.

<BzHezi ye="tab.featureOptions" gaoliang="ye" biaoji="1"><BzGongneng qianru yetou zu="models" /></BzHezi>

Каждое изменение сохраняется сразу и действует во всех рабочих областях. Чтобы сразу перейти к нужному параметру, введите часть его названия в поле поиска в верхней части боковой панели Box: Breezell прокрутит страницу до этой строки и подсветит её.

Автодополнения на этой странице нет. Для его переключателя, модели и протокола есть отдельная страница: <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.fim" />.

## Модели

<BzWenben jian="featureOptions.dedicatedModels.desc" /> Все строки моделей в этой группе работают одинаково:

- Переключатель **выключен** (по умолчанию): в строке указано <BzWenben jian="models.analysisModel.followChat" />, и функция использует модель, выбранную под полем ввода чата.
- Переключатель **включён**: в строке указано <BzWenben jian="models.analysisModel.custom" />, а под ней появляется меню выбора модели. Функция всегда использует выбранную там модель, независимо от того, какая модель стоит в чате.

Если отдельную модель позже удалить или выключить на странице <BzWenben jian="tab.models" />, функция незаметно вернётся к модели чата.

### Отдельные модели

<BzGongneng zu="models" zhuanyong="scmModel" gaoliang="scmModel" biaoji="1" />

| Строка | Для чего используется |
| --- | --- |
| <BzWenben jian="models.analysisModel.title" /> | Субагенты, которых агент запускает, чтобы исследовать и анализировать за него код |
| <BzWenben jian="models.teamDesignModel.title" /> | Участники команды, которые занимаются UI, визуальной частью и доводкой страниц в режиме Teams |
| <BzWenben jian="models.teamBugfixModel.title" /> | Участники команды, которые находят, воспроизводят и исправляют ошибки в режиме Teams |
| <BzWenben jian="models.scmModel.title" /> | Сообщение коммита, которое генерируется в Source Control |

Типичная настройка: общаться в чате с `claude-opus-5`, а вспомогательные задачи отдать модели поменьше. В примере выше строка <BzWenben jian="models.scmModel.title" /> переключена на <BzWenben jian="models.scmModel.custom" /> и работает на `claude-haiku-5-5`, которая пишет сообщения коммитов быстрее и дешевле. Стиль этих сообщений задаётся на странице Commit в [Настройках промптов и навыков](/prompt-settings#commit-message).

### Подсказки для продолжения

<BzWenben jian="featureOptions.followUp.desc" /> По умолчанию эта функция выключена.

| Параметр | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.followUp.enable" /> | Выкл. | <BzWenben jian="featureOptions.followUp.enableDesc" /> |
| <BzWenben jian="featureOptions.followUp.count" /> | 4 | 2, 3 или 4 карточки с подсказками под каждым ответом. |
| <BzWenben jian="featureOptions.followUp.clickAction" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> | <BzWenben jian="featureOptions.followUp.clickSend" /> — подсказка отправляется сразу; <BzWenben jian="featureOptions.followUp.clickInsert" /> — её можно сначала отредактировать. <BzWenben jian="featureOptions.followUp.clickActionDesc" /> |
| <BzWenben jian="models.followUpModel.title" /> | <BzWenben jian="models.followUpModel.followChat" /> | Здесь достаточно небольшой быстрой модели, например `claude-haiku-5-5`. |

### Оптимизация промпта

<BzWenben jian="featureOptions.promptOptimize.desc" /> В этой карточке есть только строка модели: <BzWenben jian="models.promptOptimizeModel.title" />.

### Помощник выделения

Если выделить текст в ответе чата, появляется небольшая панель с кнопками «Цитата» и «Копировать». Помощник выделения добавляет к ним «Перевести» и «Найти».

| Параметр | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.selectionAssist.pill" /> | Вкл. | <BzWenben jian="featureOptions.selectionAssist.pillDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.pillPlacement" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> | <BzWenben jian="featureOptions.selectionAssist.pillBelow" /> или <BzWenben jian="featureOptions.selectionAssist.pillAbove" /> от выделения. <BzWenben jian="featureOptions.selectionAssist.pillPlacementDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.translate" /> | Вкл. | <BzWenben jian="featureOptions.selectionAssist.translateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.reasoningTranslate" /> | Вкл. | <BzWenben jian="featureOptions.selectionAssist.reasoningTranslateDesc" /> |
| <BzWenben jian="featureOptions.selectionAssist.search" /> | Вкл. | <BzWenben jian="featureOptions.selectionAssist.searchDesc" /> |
| <BzWenben jian="models.selectionAssistModel.title" /> | <BzWenben jian="models.selectionAssistModel.followChat" /> | Модель, которая выполняет перевод. |

## Выполнение

<BzWenben jian="featureOptions.toolPermissions.desc" /> Если переключатель выключен, агент останавливается перед действием такого типа и ждёт, пока вы одобрите или отклоните его в чате. Инструменты, которые только читают данные, — например чтение файлов, поиск по коду или веб-поиск, — никогда не ждут одобрения.

<BzGongneng zu="execution" />

| Переключатель | По умолчанию | Что охватывает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.toolPermissions.edits" /> | Вкл. | Редактирование, запись, переименование и удаление файлов и папок |
| <BzWenben jian="featureOptions.toolPermissions.terminal" /> | Выкл. | Команды терминала, а также скрипты, которые агент пишет и запускает |
| <BzWenben jian="featureOptions.toolPermissions.database" /> | Вкл. | Выполнение запросов и создание подключений или баз данных с помощью инструментов баз данных Breezell |
| <BzWenben jian="featureOptions.toolPermissions.media" /> | Выкл. | Генерация изображений |
| <BzWenben jian="featureOptions.toolPermissions.mcpTools" /> | Вкл. | Инструменты с добавленных вами MCP-серверов |
| <BzWenben jian="featureOptions.toolPermissions.teams" /> | Выкл. | <BzWenben jian="featureOptions.toolPermissions.teamsDesc" /> в режиме Teams |

::: warning Автоодобрение терминала
Если <BzWenben jian="featureOptions.toolPermissions.terminal" /> включено, агент без вопросов выполняет любую команду, которую сочтёт нужной, — например установку пакетов, сборку или удаление файлов. Включайте его только в проектах, где это безопасно, например когда есть чистое состояние Git, к которому можно вернуться.
:::

Даже если <BzWenben jian="featureOptions.toolPermissions.edits" /> включено, правки по-прежнему отображаются как изменения, которые можно проверить, — если только вы не включите ещё и <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> (см. ниже).

## Редактор

<BzGongneng zu="editor" />

### Поведение кода

| Переключатель | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.codeBehavior.autoFixLint" /> | Вкл. | После каждой правки ошибки линтера, которые она внесла, отправляются ИИ вместе с результатом, и он исправляет их в том же ходе. |
| <BzWenben jian="featureOptions.codeBehavior.autoAcceptChanges" /> | Выкл. | Правки ИИ принимаются сразу, без шага «принять / отклонить» в редакторе. |
| <BzWenben jian="featureOptions.codeBehavior.autoOpenFile" /> | Выкл. | Открывает каждый файл в редакторе, когда ИИ его редактирует. |
| <BzWenben jian="featureOptions.codeBehavior.browserHeadless" /> | Вкл. | <BzWenben jian="featureOptions.codeBehavior.browserHeadlessDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.expandEditOnComplete" /> | Выкл. | <BzWenben jian="featureOptions.codeBehavior.expandEditOnCompleteDesc" /> |
| <BzWenben jian="featureOptions.codeBehavior.showInlineSuggestions" /> | Вкл. | Когда вы выделяете код в редакторе, рядом с ним появляются небольшие кнопки, чтобы добавить этот код в чат или отредактировать его. |

### Уведомления

| Параметр | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.notifications.systemNotifications" /> | Вкл. | <BzWenben jian="featureOptions.notifications.systemNotificationsDesc" /> |
| <BzWenben jian="featureOptions.notifications.sound" /> | <BzWenben jian="featureOptions.notifications.sound.glass" /> | <BzWenben jian="featureOptions.notifications.soundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundBackground" /> | Выкл. | <BzWenben jian="featureOptions.notifications.soundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.soundForeground" /> | Выкл. | <BzWenben jian="featureOptions.notifications.soundForegroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSound" /> | <BzWenben jian="featureOptions.notifications.errorSound.disconnect" /> | <BzWenben jian="featureOptions.notifications.errorSoundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundBackground" /> | Выкл. | <BzWenben jian="featureOptions.notifications.errorSoundBackgroundDesc" /> |
| <BzWenben jian="featureOptions.notifications.errorSoundForeground" /> | Выкл. | <BzWenben jian="featureOptions.notifications.errorSoundForegroundDesc" /> |

При выборе звука он проигрывается один раз; то же происходит, когда вы включаете любой из звуковых переключателей. Звуки не воспроизводятся, пока не включён хотя бы один из переключателей для фона или текущего чата.

## Интеллект

<BzGongneng zu="intelligence" />

### Управление контекстом

| Параметр | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.contextManagement.autoPlanExecution" /> | Выкл. | <BzWenben jian="featureOptions.contextManagement.autoPlanExecutionDesc" /> |
| <BzWenben jian="featureOptions.contextManagement.planSwitchPref" /> | <BzWenben jian="planSwitch.alwaysAsk" /> | <BzWenben jian="featureOptions.contextManagement.planSwitchPrefDesc" /> |
| <BzWenben jian="featureOptions.nativeWebSearch.title" /> | <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Позволяет модели использовать встроенный веб-поиск своего провайдера. Подробнее см. ниже. |

<BzWenben jian="featureOptions.nativeWebSearch.title" /> определяет, когда к запросу добавляется собственный поиск провайдера. Обычно Breezell ищет с помощью своих веб-инструментов, а для них нужно войти в аккаунт.

| Вариант | Что происходит |
| --- | --- |
| <BzWenben jian="featureOptions.nativeWebSearch.auto" /> | Используются инструменты поиска Breezell. Только если они не могут работать (например, когда вы не вошли в аккаунт), модель ищет через своего провайдера. |
| <BzWenben jian="featureOptions.nativeWebSearch.always" /> | Поиск провайдера добавляется к каждому запросу вместе с инструментами Breezell. |
| <BzWenben jian="featureOptions.nativeWebSearch.off" /> | Поиск провайдера никогда не используется. |

Встроенный поиск есть только у некоторых провайдеров: Anthropic (Claude), OpenAI, Gemini с ключом API, xAI, Perplexity, OpenRouter, Qwen и Zhipu. Для остальных моделей этот параметр ни на что не влияет.

### Режимы и навыки

| Переключатель | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.superpowers.enable" /> | Вкл. | <BzWenben jian="featureOptions.superpowers.desc" /> Это встроенные навыки, перечисленные в [Настройках промптов и навыков](/prompt-settings#use-skills-in-a-chat). |
| <BzWenben jian="featureOptions.entanglement.enable" /> | Вкл. | <BzWenben jian="featureOptions.entanglement.enableDesc" /> См. [Режим Entanglement](/entanglement-mode-overview). |

## Система

<BzGongneng zu="system" />

### Доступ к внешним файлам

| Переключатель | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.externalFileAccess.allowRead" /> | Вкл. | Инструменты могут читать файлы за пределами открытой рабочей области, например исходный код библиотеки или файл конфигурации в вашей домашней папке. |
| <BzWenben jian="featureOptions.externalFileAccess.allowWrite" /> | Вкл. | Инструменты могут изменять файлы за пределами открытой рабочей области. Выключите этот параметр, если агент должен работать только с файлами проекта. |

### Скорость сети терминала

| Переключатель | По умолчанию | Что делает |
| --- | --- | --- |
| <BzWenben jian="featureOptions.netActivity.enable" /> | Вкл. | <BzWenben jian="featureOptions.netActivity.enableDesc" /> |
| <BzWenben jian="featureOptions.netActivity.precise" /> | Выкл. | Только для Windows. <BzWenben jian="featureOptions.netActivity.preciseDesc" /> |

## Итог

- Box ▸ <BzWenben jian="box.title" /> ▸ <BzWenben jian="tab.featureOptions" />; изменения сохраняются сразу.
- <BzWenben jian="featureOptions.group.models" />: вспомогательные функции следуют модели чата, пока вы не назначите им отдельную модель.
- <BzWenben jian="featureOptions.group.execution" />: что агент может делать без вопросов. Для команд терминала по умолчанию запрашивается подтверждение.
- <BzWenben jian="featureOptions.group.editor" />, <BzWenben jian="featureOptions.group.intelligence" />, <BzWenben jian="featureOptions.group.system" />: исправление ошибок линтера, уведомления, карточки плана, веб-поиск, навыки Superpowers и доступ к файлам за пределами рабочей области.
