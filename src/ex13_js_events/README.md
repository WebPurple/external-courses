# Практическая работа 13 - JS advanced. Events

## Задание 1

Продолжение работы над Kanban-board. Необходимо реализовать добавление новой задачи в список<br>

Исходная [Канбан](https://www.atlassian.com/ru/agile/kanban) доска должна иметь 4 блока задач:
 - Backlog(задачи, которые требуют уточнения, перед тем, как их брать в работу),
 - Ready(задачи, которые могут быть взяты в работу),
 - In progress (задачи, которые уже в работе)
 - Finished (законченные задачи)

0*. Предварительно сверстать основной блок main, в котором располагаются списки задач.

0.1*. Перед началом работы можно создать заглушку - объект с необходимыми данными, вида
```js
const boardsMocks = [
   {
        title: 'backlog', // заголовок блока
        issues: [ // массив задач
            {
                id: 'task1'
                name: 'Sprint bugfix'
            }
        ],
   },
   // code
]
```
Итерируя данный массив необходимо динамически создавать блоки с задачами.

1. Первоначально задача размещается в бэклоге - для анализа. При клике на кнопку "+ Add card" должно появляться новое поле в конце списка, между
последней задачей и кнопкой, для которого реализована возможность ввода  <br>
Созданные задачи должны сохраняться в localStorage<br>

Алгоритм:  <br>
Нажали кнопку - появилось поле для редактирования - ввели название - ушли с поля (расфокусировались, кликнули и тд) - название сохранилось - задача появилась в бэклоге<br>

2. Задачи для списка Ready берутся из Backlog. При клике на "+ Add card" в этом списке, должна быть предоставлена возможность выбора задач из Backlog из дропдауна.
При клике на кнопку в конце списка, между последней задачей и кнопкой появляется дропдаун с возможными вариантами <br>
После клика на задачу из дропдауна, она должна появиться в списке последней<br>

3. Задачи для списка In progress берутся из Ready. Реализация, аналогичная п.2 <br>

4. Задачи для списка Finished берутся из In progress. Реализация, аналогичная п.2 <br>

5. Если задач в списках Backlog, In progress, Ready - нет, кнопку нужно задизейблить (убрать возможность клика).

6. Когда задача попадает в следующий список, из текущего ее нужно удалить.<br>
Например, когда в список Ready попадает задача из Backlog, из Backlog она должна быть удалена. По аналогии должно быть реализовано и для других списков.

### CSS

7. Соблюдать семантическую верстку. Кнопка должна быть button, элементы дропдауна списком, и тд.

8. Учитывать состояния кнопки "+ Add card" - active и disable. Почитать best practices по accessibility<br>

 - Если активна, при наведении должна подсвечиваться, курсор меняться на pointer

 - Если кнопка задизейблена, ее цвет должен отличаться от обычного состояния, при наведении курсор не меняется, hover не применяется

 - В обычном состоянии кнопка должна соответствовать макету

9. При выборе списка задач из дропдауна (наведении, клике) должны быть применены эффекты, например, выделять цветом, менять курсор на pointer.<br>

10. Использовать селекторы по тегу для задания стилей нельзя. Использовать классы. В случае, когда есть необходимость - селектор по id.

#### Критерии оценки задания 2: 
- 0 - задание не выполнено
- 1-3 - задание выполнено, но есть существенные недоработки или вёрстка не соответствует макету
- 4 - задание выполнено, реализованы основные пункты 1-6.
- 5 - задание выполнено, реализованы все пункты по заданию, исправлены комментарии тренера, если имеются