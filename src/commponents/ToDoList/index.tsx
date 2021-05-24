import ToDoListItem from './ToDoListItem';

import './toDoList.scss'

import { Todo } from '../../types'

type ToDoListProps = {
  todoList: Todo[];
}

const ToDoList: React.FC<ToDoListProps> = ({ todoList }) => (
  <ul className="Todo-list">
    {todoList.length === 0 && <li className="Todo-list__placeholder">Пока нет записей</li>}
    {todoList.map(todo => <ToDoListItem key={todo.id} todo={todo.value} />)}
  </ul>
)

export default ToDoList;