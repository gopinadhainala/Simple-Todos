import './index.css'

const TodoItem = props => {
  const {eachTodoItem, onDeleteUser} = props
  const {id, title} = eachTodoItem
  const deleteItem = () => {
    onDeleteUser(id)
  }

  return (
    <li className="list-item-styling">
      <div className="list-item-container">
        <p className="title">{title}</p>
        <button type="button" onClick={deleteItem} className="button-styling">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
