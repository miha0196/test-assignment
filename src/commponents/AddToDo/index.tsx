import { useCallback, useState } from "react"

import './addToDo.scss'

type AddToDoProps = {
  onAddToDo: (todo: string) => void
}

const AddToDo: React.FC<AddToDoProps> = ({ onAddToDo }) => {
  const [inputValue, setInputValue] = useState('')
  const sendToDoHandler = useCallback((event: React.FormEvent) => {
    event.preventDefault();

    if (!inputValue) return
    
    onAddToDo(inputValue.trim())
    setInputValue('')
  }, [inputValue, onAddToDo])

  return (
    <div className="Add-todo">
      <form className="Add-todo__form" onSubmit={(event) => sendToDoHandler(event)}>
        <textarea className="Add-todo__input" onChange={(event) => setInputValue(event.target.value)} value={inputValue} rows={2} />
        <button type="submit" className="Add-todo__btn">Send</button>
      </form>
    </div>
  )
}

export default AddToDo;