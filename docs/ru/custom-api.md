---
title: Пользовательский API (BYOK)
description: Подключите к Breezell собственный API-ключ и работайте с моделями Claude через официальный API Anthropic или любой совместимый ретранслятор.
---

# Пользовательский API (BYOK)

BYOK расшифровывается как **Bring Your Own Key** («используйте свой ключ»). Вместо того чтобы расходовать официальную квоту Breezell, Breezell отправляет запросы провайдеру моделей с вашим собственным API-ключом, а счёт вам выставляет напрямую этот провайдер.

В этом руководстве вся настройка разобрана на примере моделей Claude: `claude-opus-5-5`, `claude-sonnet-5-5`, `claude-haiku-5-5` и `claude-fable-5-1`.

::: tip Об экранах на этой странице
На этой странице нет скриншотов. Все экраны Breezell ниже воссозданы на HTML по исходному коду Breezell. Текст на них следует языку этой страницы, а цвета — переключателю светлой / тёмной темы сайта (Breezell Light / Breezell Dark).

Оранжевые кольца и пронумерованные метки показывают, куда нажимать. В самом Breezell их нет. Некоторые экраны интерактивны: можно переключить протокол, изменить Base URL, нажать **Claude 1M**, включить или выключить рассуждение и передвинуть ползунок Effort.
:::

## Перед началом

Вам понадобятся три вещи:

1. **Аккаунт Breezell на плане Custom API или выше.** Сторонние модели на собственном ключе — платная функция. Без этого плана вместо формы на странице провайдера появится <BzWenben jian="box.models.gate.planRequired" />, а если вы не вошли в аккаунт — <BzWenben jian="box.models.gate.signIn" />.
2. **Ключ.** Либо API-ключ Anthropic из Anthropic Console (он начинается с `sk-ant-`), либо Base URL и ключ ретранслятора, шлюза или собственного прокси.
3. **Протокол, который поддерживает ваш ретранслятор.** Уточните у провайдера, предлагает ли он Anthropic Messages API (`/v1/messages`), OpenAI Chat Completions API (`/v1/chat/completions`) или оба.

## Выберите вариант подключения

| Вариант | Когда подходит | Где в Breezell | Протокол |
| --- | --- | --- | --- |
| **A. API Anthropic** | У вас есть ключ из Anthropic Console | <BzWenben jian="box.models.group.api" /> › Anthropic | Anthropic Messages (встроенный) |
| **B. Совместимый слот + протокол Anthropic** | Ваш ретранслятор поддерживает `/v1/messages` | <BzWenben jian="box.models.group.compat" /> › слот | Anthropic |
| **C. Совместимый слот + протокол OpenAI** | Ваш ретранслятор поддерживает только `/v1/chat/completions` | <BzWenben jian="box.models.group.compat" /> › слот | OpenAI |

Для Claude лучше выбрать **A** или **B**. Это рекомендует и сам Breezell в форме слота: <BzWenben jian="settings.apiFormat.anthropicTip" />

## Шаг 1. Откройте Box (Настройки Breezell)

Настройки Breezell находятся на странице **Box**. Пока она открыта, Box занимает место панели действий, боковой панели, области редактора и нижней панели; чтобы вернуться к коду, нажмите **Agent**.

Открыть Box можно тремя способами:

- Нажмите **Box** в переключателе слева в строке заголовка.
- Нажмите значок шестерёнки в правом верхнем углу и выберите <BzWenben jian="box.title" />.
- Откройте палитру команд и выполните `Breezell: Open Settings`.

<BzBiaotilan gaoliang="box" />

<BzBiaotilan gaoliang="chilun" caidan />

## Шаг 2. Перейдите на страницу «Модели»

На боковой панели Box откройте группу <BzWenben jian="box.title" /> и нажмите <BzWenben jian="tab.models" />. Обычно Box сразу открывается на этой странице.

<BzHezi gaoliang="moxing" />

В верхней части страницы есть четыре представления: <BzWenben jian="box.usage.tab.models" />, <BzWenben jian="box.usage.tab.cache" />, <BzWenben jian="box.usage.tab.tokens" /> и <BzWenben jian="box.usage.tab.breezell" />. Оставайтесь на первом.

Ниже категории провайдеров делят всех провайдеров на четыре группы:

| Категория | Что в ней |
| --- | --- |
| <BzWenben jian="box.models.group.breezell" /> | Официальные модели Breezell на вашей квоте Breezell. Ключ не нужен. |
| <BzWenben jian="box.models.group.signin" /> | Провайдеры, в которые вы входите через аккаунт, например Codex или Copilot. |
| <BzWenben jian="box.models.group.api" /> | Официальные API вендоров на вашем собственном ключе, включая Anthropic. |
| <BzWenben jian="box.models.group.compat" /> | До 50 пользовательских слотов для ретрансляторов, шлюзов и собственных прокси. |

## Вариант A. API Anthropic

### A1. Выберите Anthropic

1. Нажмите <BzWenben jian="box.models.group.api" />.
2. Введите `Anthropic` в поле <BzWenben jian="box.models.searchProvidersPlaceholder" />.
3. Нажмите плитку **Anthropic**. Выбранный провайдер появится ниже со статусом <BzWenben jian="box.models.notConfigured" />.
4. Нажмите <BzWenben jian="box.models.editConfig" />, чтобы открыть его настройки.

<BzMoxingye fenlei="api" gaoliang="peizhi" biaoji="4" :peizhi="false" />

### A2. Вставьте ключ Anthropic

В настройках всего одно поле — API-ключ.

1. Нажмите карточку **Get your API Key**. В браузере откроется Anthropic Console (`console.anthropic.com/settings/keys`).
2. Создайте ключ и скопируйте его. Он выглядит так: `sk-ant-api03-...`.
3. Вставьте его в поле. Значок глаза показывает или скрывает ключ.

<BzMoxingye fenlei="api" gaoliang="miyao" biaoji="1" :xuanzeqi="false" :yetou="false" />

Перед использованием Breezell очищает ключ: убирает пробелы, обрамляющие кавычки, префикс `Bearer ` в начале и невидимые символы, которые часто попадают в буфер обмена при копировании. У провайдера Anthropic нет поля Base URL: Breezell всегда использует `https://api.anthropic.com`.

### A3. Включите нужные модели Claude

Как только ключ сохранён, статус меняется на <BzWenben jian="box.models.configured" />, а в списке появляются встроенные в Breezell модели Claude — сначала самые новые.

Изначально включены только первые пять: `claude-fable-5-1`, `claude-fable-5`, `claude-opus-5`, `claude-opus-5-5` и `claude-opus-4-8`. Чтобы добавить модель в меню выбора модели в чате, включите переключатель в конце её строки — например, для `claude-sonnet-5-5` и `claude-haiku-5-5`.

<BzMoxingye fenlei="api" yipeizhi gaoliang="kaiguan" :xuanzeqi="false" :peizhi="false" :yetou="false" :dakai="['claude-sonnet-5-5', 'claude-haiku-5-5']" />

Как читать таблицу:

| Столбец | Значение |
| --- | --- |
| <BzWenben jian="box.usage.colModel" /> | ID модели, который отправляется в API. Зелёная точка означает, что модель включена. |
| <BzWenben jian="box.models.context" /> | Полное контекстное окно модели. У всех моделей Claude 5 оно равно 1M. |
| <BzWenben jian="box.models.capabilities" /> | Четыре значка: <BzWenben jian="box.models.filter.vision" />, <BzWenben jian="box.models.filter.tools" />, <BzWenben jian="box.models.filter.reasoning" />, <BzWenben jian="box.models.filter.web" />. Подсвеченный значок означает, что у модели есть эта возможность. |
| <BzWenben jian="models.pricing" /> | Цена входа / выхода в USD <BzWenben jian="box.models.price" /> из встроенного каталога Breezell. Окончательные суммы — в счёте Anthropic. |
| <BzWenben jian="box.mcp.colEnabled" /> | Показывает или скрывает модель в меню выбора модели в чате. |

Если таблица становится узкой, Breezell сначала скрывает столбец <BzWenben jian="box.models.context" />, а затем <BzWenben jian="box.models.capabilities" />; их значения переходят во всплывающую подсказку к имени модели.

Если Anthropic выпустит модель, которой ещё нет в списке, нажмите <BzWenben jian="box.models.fetch" />. Breezell запросит `https://api.anthropic.com/v1/models` с вашим ключом и предложит добавить новые ID. Можно также ввести ID в поле <BzWenben jian="box.models.addModelPlaceholder" /> и нажать <BzWenben jian="box.models.add" />.

Вариант A настроен. Переходите к разделу [Работа с Claude в чате](#use-claude-in-chat).

## Вариант B. Совместимый слот с протоколом Anthropic

Этот вариант подходит для ретранслятора, API-шлюза или собственного прокси, который отдаёт Claude через Anthropic Messages API.

### B1. Откройте совместимый слот

1. Нажмите <BzWenben jian="box.models.group.compat" />.
2. Нажмите плитку слота. Slot 1 есть всегда; у нового слота под названием написано <BzWenben jian="settings.noEndpoint" />.
3. Чтобы разделить несколько ретрансляторов, нажмите <BzWenben jian="box.models.addCompat" /> для каждого из них. В Breezell 50 слотов, и каждый слот — независимый канал со своим адресом, ключом, протоколом и моделями.
4. Нажмите <BzWenben jian="box.models.editConfig" />.

<BzMoxingye fenlei="compat" tigongshang="compat" nicheng="" moxing="kong" gaoliang="xinzeng" biaoji="3" :peizhi="false" />

### B2. Заполните слот

Форма одинакова для всех слотов. Попробуйте ниже: измените Base URL или протокол и посмотрите, как обновляется строка <BzWenben jian="settings.requestUrl" /> — точно так же, как в Breezell.

<BzJianrongpeizhi duli />

**<BzWenben jian="settings.sectionConnection" />**

- <BzWenben jian="settings.nickname" />: имя длиной до 30 символов, например `Claude Relay`. Оно станет заголовком плитки на странице «Модели» и названием группы в меню выбора модели в чате.
- <BzWenben jian="settings.baseUrl" />: адрес, который выдал вам провайдер. Он должен начинаться с `http://` или `https://`, например `https://relay.example.com` или `http://127.0.0.1:8080`.

**<BzWenben jian="settings.sectionAuthentication" />**

- <BzWenben jian="settings.apiKey" />: ключ ретранслятора. Он скрыт маской; значок глаза показывает его.

**<BzWenben jian="settings.sectionProtocol" />**

Выберите **Anthropic**. Три кнопки определяют формат запроса:

| Кнопка | Формат запроса | Подходит для Claude? |
| --- | --- | --- |
| OpenAI | OpenAI Chat Completions | Только если у ретранслятора нет `/v1/messages` (вариант C). |
| Responses | OpenAI Responses | Нет. Предназначен для моделей GPT. |
| **Anthropic** | Anthropic Messages | **Да.** Breezell рекомендует его для Claude. |

Затем проверьте <BzWenben jian="settings.endpointPreset" />. Для протокола Anthropic есть два шаблона:

| Шаблон | Путь | Когда использовать |
| --- | --- | --- |
| <BzWenben jian="settings.endpointPreset.anthropicMessages" /> | `/v1/messages` | Почти для любого ретранслятора. Оставьте этот. |
| <BzWenben jian="settings.endpointPreset.volcengineAgentPlan" /> | `/api/plan/v1/messages` | Только для Volcengine Agent Plan. |

### B3. Проверьте URL запроса

Строка <BzWenben jian="settings.requestUrl" /> под шаблоном показывает точный адрес, по которому будет обращаться Breezell. Breezell соединяет Base URL с путём шаблона и убирает повторяющуюся часть, поэтому работают оба распространённых варианта записи Base URL:

| Введённый Base URL | Шаблон | URL запроса |
| --- | --- | --- |
| `https://relay.example.com` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/v1/messages` | `/v1/messages` | `https://relay.example.com/v1/messages` |
| `https://relay.example.com/claude` | `/v1/messages` | `https://relay.example.com/claude/v1/messages` |

Сверьте результат с документацией провайдера. Если API провайдера находится по нестандартному пути, укажите такой Base URL, чтобы URL запроса заканчивался ровно так, как указано у провайдера.

### B4. Пользовательские заголовки и Claude 1M (необязательно)

Поле <BzWenben jian="settings.customHeaders" /> добавляет HTTP-заголовки к каждому запросу этого слота. Оставьте `{}`, если провайдер ничего не требует.

Значение должно быть корректным JSON: двойные кавычки для ключей и значений, без комментариев и без завершающих запятых.

```json
{
  "anthropic-beta": "context-1m-2025-08-07"
}
```

Кнопка **Claude 1M** вставляет именно этот заголовок. Используйте её, если ретранслятору нужен бета-заголовок, чтобы принимать промпты длиннее 200K. Чат Breezell всё равно запускает каждую модель Claude с 200K; на 1M вы переключаетесь отдельно для каждой модели в меню выбора модели (см. [Context, Reasoning и Fast](#context-reasoning-and-fast)).

Под заголовками находится карточка <BzWenben jian="settings.accountPool" />. Пул аккаунтов чередует несколько ключей или маршрутов в одном слоте. Для первой настройки он не нужен.

### B5. Добавьте модели Claude

В новом слоте моделей нет. Добавить их можно двумя способами.

**Получите список.** Нажмите <BzWenben jian="box.models.fetch" />. Breezell спросит у ретранслятора, какие модели у него есть, и покажет их списком с флажками. Отметьте модели Claude и нажмите <BzWenben jian="box.models.addSelected" />.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="kong" quede gaoliang="quedeliebiao" biaoji="2" :xuanzeqi="false" :peizhi="false" :yetou="false" />

**Введите ID.** Введите ID модели в поле <BzWenben jian="box.models.addModelPlaceholder" /> и нажмите <BzWenben jian="box.models.add" />. Указывайте ID точно так, как его называет ретранслятор, например `claude-opus-5-5`. Этот способ подходит, если у ретранслятора нет списка моделей.

### B6. Проверьте слот

Нажмите <BzWenben jian="box.models.health.checkSlot" />, чтобы отправить в этот слот короткий запрос. Модель с ошибкой получает метку <BzWenben jian="box.models.health.ribbonFail" />, медленная — <BzWenben jian="box.models.health.ribbonTimeout" />; слот, до которого вообще не удалось достучаться, помечается на плитке как <BzWenben jian="box.models.health.ribbonDown" />.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" gaoliang="jiance" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

Для более подробной проверки нажмите <BzWenben jian="box.models.checkConnectivity" /> над плитками слотов. Так можно проверить сразу несколько слотов и моделей, а <BzWenben jian="box.models.health.checkStreaming" /> покажет, передаёт ли ретранслятор ответы по частям (<BzWenben jian="box.models.health.stream.streaming" />), задерживает рассуждение (<BzWenben jian="box.models.health.stream.heldThinking" />) или отдаёт всё целиком в конце (<BzWenben jian="box.models.health.stream.buffered" />).

## Вариант C. Совместимый слот с протоколом OpenAI

Некоторые ретрансляторы отдают Claude только в формате OpenAI Chat Completions. Настройте слот так же, как в варианте B, но со следующими отличиями:

1. В разделе <BzWenben jian="settings.sectionProtocol" /> выберите **OpenAI**.
2. Оставьте шаблон <BzWenben jian="settings.endpointPreset.openaiSiliconFlowChat" /> (`/v1/chat/completions`).
3. Добавьте модели под теми ID, которые использует ретранслятор. Многие ретрансляторы используют `claude-opus-5-5`; некоторые добавляют префикс вендора, например `anthropic/claude-opus-5-5`.

<BzJianrongpeizhi duli xieyi="openai" jichudizhi="https://relay.example.com/v1" :zhanshizhanghaochi="false" />

Breezell распознаёт модели Claude по имени, поэтому для `anthropic/claude-opus-5-5` или `claude-opus-5.5` действуют те же лимиты, что и для `claude-opus-5-5`. Обратите внимание на подсказку в самой форме: <BzWenben jian="settings.apiFormat.openaiTip3" /> Кроме того, на протоколе OpenAI Breezell не может предложить **Fast** для Claude Opus. Если ваш ретранслятор поддерживает и `/v1/messages`, переключите слот на **Anthropic**.

## Управление моделями Claude

### Меню строки

В каждой строке модели есть кнопка **⋯**. Для модели Claude в совместимом слоте в ней доступны пункты <BzWenben jian="box.models.pin" />, <BzWenben jian="box.models.advanced" /> и <BzWenben jian="box.models.remove" />. Наведите указатель на строку, и рядом с именем модели появится значок копирования.

<BzMoxingye fenlei="compat" tigongshang="compat" yipeizhi moxing="jianrong" caidan gaoliang="gengduo" biaoji="1" :xuanzeqi="false" :peizhi="false" :yetou="false" />

### Укажите цену

Breezell знает прейскурантные цены собственного API Anthropic, но не цены вашего ретранслятора. В совместимом слоте в столбце цены отображается надпись <BzWenben jian="box.models.editPrice" />. Нажмите на неё и введите цены ретранслятора в USD за 1M токенов: вход, выход, попадание в кэш, а также запись в кэш на 5 минут и на 1 час, которую использует Claude. После этого представление <BzWenben jian="box.usage.tab.tokens" /> будет показывать не только токены, но и стоимость. Без цены Breezell всё равно считает токены, но не деньги.

### Расширенные настройки

Breezell распознаёт все ID моделей Claude из этого руководства и сам подставляет их лимиты, поэтому большинству пользователей открывать это окно не придётся. Открывайте его, если ретранслятор переименовал модель (например, в `my-claude`), если Breezell показывает модель как нераспознанную или если ретранслятор устанавливает более жёсткие лимиты.

Сначала включите переключатель <BzWenben jian="models.enableCustomSettings" />; до этого все карточки остаются серыми и доступны только для чтения.

<BzGaoji />

Значения, которые Breezell использует для моделей Claude 5:

| Параметр | `claude-fable-5-1` | `claude-opus-5-5` | `claude-sonnet-5-5` | `claude-haiku-5-5` |
| --- | --- | --- | --- | --- |
| Контекстное окно (короткое / длинное) | 200K / 1M | 200K / 1M | 200K / 1M | 200K / 1M |
| <BzWenben jian="models.outputTokenSpace" /> | 16384 | 16384 | 16384 | 16384 |
| <BzWenben jian="models.reasoningOutputReserve" /> | 64000 | 64000 | 64000 | 64000 |
| <BzWenben jian="models.canTurnOff" /> | Выкл | Выкл | Выкл | **Вкл** |
| <BzWenben jian="models.reasoningEffortDefault" /> | High | Medium | High | Medium |
| <BzWenben jian="models.supportsFast" /> | Выкл | **Вкл** | Выкл | Выкл |
| <BzWenben jian="models.systemMessage" /> | system-role | system-role | system-role | system-role |
| <BzWenben jian="models.toolFormat" /> | Anthropic Style | Anthropic Style | Anthropic Style | Anthropic Style |

В таблице приведены значения для совместимого слота с протоколом Anthropic. У провайдера Anthropic (вариант A) системное сообщение вместо этого передаётся как `separated`; с Claude работают оба способа. **Fast** доступен только у провайдера Anthropic и в слотах с протоколом Anthropic.

Поля, в которые вводится число токенов, принимают суффикс `k` или `m`: `128k` превращается в `128000`, `1m` — в `1000000`. Не задавайте размер контекста или вывода больше, чем допускает ваш ретранслятор, иначе запросы будут завершаться ошибкой.

В слоте с протоколом **OpenAI** в поле <BzWenben jian="models.systemMessage" /> доступны `system-role` и `developer-role`, а в поле <BzWenben jian="models.toolFormat" /> — `OpenAI Style` и `None (XML)`. Для Claude оставьте `OpenAI Style`, чтобы вызовы инструментов работали.

## Работа с Claude в чате {#use-claude-in-chat}

### Выберите модель

Чат остаётся открытым рядом с Box; если вам нужен и редактор, нажмите **Agent** в строке заголовка. Под полем ввода чата нажмите на имя модели, чтобы открыть меню выбора модели.

- На вкладке <BzWenben jian="box.models.group.api" /> перечислены модели Claude, которые вы включили у провайдера Anthropic (вариант A), с их прейскурантными ценами.
- Чтобы увидеть совместимые слоты (варианты B и C), переключитесь на **OpenAI-Compatible** внизу меню. Каждый слот — отдельная группа, названная по его псевдониму.

<BzLiaotian xuanzeqi="api" gaoliang="hang" moxing="claude-opus-5-5" />

<BzLiaotian xuanzeqi="compat" gaoliang="fenye" biaoji="1" moxing="claude-opus-5-5" />

### Context, Reasoning и Fast {#context-reasoning-and-fast}

Наведите указатель на модель в меню, чтобы открыть её параметры. Эта панель интерактивна — попробуйте.

<BzLiaotian xuanzeqi="compat" xuanxiang moxing="claude-opus-5-5" />

- **Context**: `200K` (с пометкой <BzWenben jian="inputToolbar.contextDefault" />) или `1M`. Breezell запускает каждую модель Claude с 200K и отправляет больший бюджет только после того, как вы выберете `1M`.
- **Reasoning**: Claude Fable, Opus и Sonnet 5.x рассуждают всегда, поэтому переключатель зафиксирован во включённом положении. В `claude-haiku-5-5` рассуждение можно выключить, чтобы получать быстрые ответы.
- **Effort**: `Low`, `Medium`, `High`, `Extra High` и `Max`, от **Faster** к **Smarter**. На `Max` ползунок становится фиолетовым.
- **Fast**: только для `claude-opus-5-5` (а также Opus 5 / Opus 4.8). Стоит в 2 раза дороже и отвечает примерно в 2,5 раза быстрее.

Выбранные параметры отображаются рядом с именем модели под полем ввода, например `claude-opus-5-5 200K Medium` или `claude-opus-5-5 1M High Fast`. Они запоминаются для каждой модели отдельно.

### Отправьте сообщение

Введите сообщение и отправьте его. Если всё настроено правильно, ответ придёт через ваш собственный ключ.

<BzLiaotian moxing="claude-opus-5-5" wen="Привет! Какая ты модель?" da="Привет! Я Claude Opus 5.5, работаю в Breezell через ваш собственный API-ключ. Над чем сегодня поработаем?" />

Настройка BYOK завершена.

## Какую модель Claude выбрать

| ID модели | Контекст | Цена вход / выход (за 1M токенов) | Интенсивность по умолчанию | Отключение рассуждения | Fast | Для чего подходит |
| --- | --- | --- | --- | --- | --- | --- |
| `claude-fable-5-1` | 1M | $10 / $50 | High | Нет | Нет | Самые сложные задачи и большие рефакторинги |
| `claude-opus-5-5` | 1M | $4 / $20 | Medium | Нет | Да (2×) | Повседневная работа агента: выбор по умолчанию |
| `claude-sonnet-5-5` | 1M | $2 / $10 | High | Нет | Нет | Баланс скорости и стоимости |
| `claude-haiku-5-5` | 1M | $0.10 / $0.50 | Medium | Да | Нет | Быстрые вопросы и небольшие правки |

Указаны прейскурантные цены API Anthropic из встроенного каталога Breezell. Ретранслятор устанавливает собственные цены. Промпты `claude-haiku-5-5` длиннее 100K токенов тарифицируются по ставке в 5 раз выше.

## Устранение неполадок

| Что вы видите | Что это значит | Что делать |
| --- | --- | --- |
| <BzWenben jian="box.models.gate.planRequired" /> | Ваш план не включает пользовательских провайдеров. | Перейдите на план Custom API или выше. |
| <BzWenben jian="box.models.fetchNeedsEndpoint" /> | У слота ещё нет Base URL. | Заполните поле <BzWenben jian="settings.baseUrl" />. |
| <BzWenben jian="box.models.fetchNeedsKey" /> | Поле ключа пустое. | Вставьте ключ. |
| <BzWenben jian="box.models.fetchAuthFailed" /> | Провайдер вернул 401 / 403. | Скопируйте ключ заново, убедитесь, что он относится к этому провайдеру, и проверьте его план и белый список IP. |
| <BzWenben jian="box.models.fetchFailed" /> … | У ретранслятора нет списка моделей, или адрес указан неверно. | Проверьте <BzWenben jian="settings.requestUrl" /> или добавьте ID моделей вручную. |
| <BzWenben jian="box.models.fetchAlreadyHaveAll" /> | Все модели, которые вернул ретранслятор, уже есть в слоте. | Ничего делать не нужно. |
| <BzWenben jian="box.models.health.errTimeout" /> | Истекло время ожидания запроса. | Проверьте адрес, прокси и сетевой маршрут. |
| <BzWenben jian="box.models.health.errConnect" /> | Не удалось подключиться к хосту. | Проверьте адрес, DNS и прокси. |
| <BzWenben jian="box.models.health.errHttp" /> | Ретранслятор ответил ошибкой HTTP. | Чаще всего это неверный путь или неверный протокол: сверьте <BzWenben jian="settings.requestUrl" /> и протокол с документацией провайдера. |
| URL запроса содержит `/v1/v1` или в нём нет `/v1` | Base URL и шаблон не сочетаются друг с другом. | Исправляйте Base URL, пока <BzWenben jian="settings.requestUrl" /> не станет правильным. |
| Ответ появляется целиком после долгого ожидания | Ретранслятор буферизует поток. | Запустите <BzWenben jian="box.models.health.checkStreaming" />. При результате <BzWenben jian="box.models.health.stream.heldThinking" /> ожидание сократит более низкая интенсивность рассуждения. |
| Запросы больше 200K завершаются ошибкой | Ретранслятору нужен бета-заголовок 1M, или у него нет контекста 1M. | Нажмите **Claude 1M** в поле <BzWenben jian="settings.customHeaders" /> или оставьте у модели `200K`. |
| Список моделей пуст и после получения | Список не загрузился. | Перезапустите Breezell и получите список снова или добавьте ID вручную. |

## Частые вопросы

**Можно ли одновременно использовать официальный ключ Anthropic и ретранслятор?**
Да. Вариант A и все совместимые слоты независимы друг от друга. В меню выбора модели они отображаются рядом, и модель можно переключать в каждом разговоре.

**Можно ли хранить несколько ретрансляторов и ключей?**
Да. Используйте по одному слоту на каждый ретранслятор (до 50). Чтобы чередовать несколько ключей одного ретранслятора, используйте <BzWenben jian="settings.accountPool" /> этого слота. Раздел <BzWenben jian="box.vault.group" /> на боковой панели Box хранит адреса и ключи ретрансляторов в системной связке ключей и может заполнить слот за вас.

**Кто выставляет мне счёт?**
Провайдер, чей ключ вы используете. За эти запросы Breezell не списывает вашу квоту Breezell. Представление <BzWenben jian="box.usage.tab.tokens" /> показывает, сколько токенов вы израсходовали; укажите цены в совместимых слотах, чтобы видеть и стоимость.
