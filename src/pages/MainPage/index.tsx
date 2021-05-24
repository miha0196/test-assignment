import { useCallback, useState } from 'react'

import AddToDo from '../../commponents/AddToDo'
import ToDoList from '../../commponents/ToDoList'

import './mainPage.scss'

import { Todo } from '../../types'

const MainPage: React.FC = () => {
  const [todoList, setToDoList] = useState<Todo[]>(() => JSON.parse(localStorage.getItem('todos') || '[]'))

  const addToDoHandler = useCallback((todo: string) => {
    const id = Math.random().toString().substr(2, 10)
    setToDoList(prev => {
      localStorage.setItem('todos', JSON.stringify([...prev, {value: todo, id}]))
      return [...prev, {value: todo, id}]
    })
  }, [])

  const clearHandler = useCallback(() => {
    setToDoList(() => {
      localStorage.setItem('todos', JSON.stringify([]))
      return []
    })
  }, [])

  return (
    <div className="Main-page">
      <AddToDo onAddToDo={addToDoHandler} />
      <ToDoList todoList={todoList} />
      <button type="reset" className="btn btn-primary" onClick={() => clearHandler()} disabled={todoList.length === 0}>Clear all</button>
    </div>
  )
}

export default MainPage