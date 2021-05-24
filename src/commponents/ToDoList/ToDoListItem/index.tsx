import { useEffect, useState } from 'react'
import './toDoListItem.scss'

type ToDoListItemProps = {
  todo: string;
}

const ToDoListItem: React.FC<ToDoListItemProps> = ({ todo }) => {
  const [classes, setClasses] = useState<string[]>(['Todo-list-item'])

  useEffect(() => {
    setClasses(prev => [...prev, 'Todo-list-item_done'])
  }, [])

  return (
      <li className={classes.join(' ')}>
        <pre>
          {todo}
        </pre>
      </li>
  )
}

export default ToDoListItem;