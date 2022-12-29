import logo from './logo.svg';
import './App.css';



import { useEffect, useState } from 'react'
import {Profile} from './Profile'
import { Cart } from './Cart'
import { List } from './TodoList'
// import {TodoList} from './TodoListt'
function App() {

  const [todoList, setTodoList] = useState(['addd','kkkk'])

  const [input, setInput] = useState('')

  const handleAdd = () => {
    setTodoList((prevList) => [input, ...prevList])
    setInput('')
  }

  useEffect(() => {
    console.log('todoList: ', todoList)
  }, [todoList])

  return (
    <div className='wrapper'>
      <div className='item'>
        <input value={input}
          onChange={(e) => setInput(e.target.value)}/>
          <button onClick={handleAdd}>add</button>
      </div>
      {/* <ul className='item'>
        
        {todoList.map((value, index) => {
           return (
          <li key={index} className='li'>
            {value}
            <span
              className='delete'
              // onClick={handleDelete(i)}
              onClick={() =>
                setTodoList((todoList) => todoList.filter((_, index2) => index2 !== index))
              }
            >
              x
            </span>
          
          </li>
           )
        })}
        
      </ul> */}
      <List
        list={todoList}
        setList={setTodoList}
      />
    </div>
  )



}

export default App;
