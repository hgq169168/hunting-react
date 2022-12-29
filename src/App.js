import logo from './logo.svg';
import './App.css';



import { useState } from 'react'
import {Profile} from './Profile'
import { Cart } from './Cart'
// import {TodoList} from './TodoListt'
function App() {
  const [count, setHasLearned] = useState(1)
  const handleChange = () => setHasLearned(count + 1)
  let JSXMarkup = null
  if (count <= 10) {
    JSXMarkup = <h1>当前值在1~10内：{count}</h1>
  } else {
    JSXMarkup = <h1>当前值大于10：{count}</h1>
  }
  return (
    <>
      <button onClick={handleChange}>
      {`当前值${count > 10 ? '大于 10' : '在 1 - 10 以内'}: ${count}`}
      </button>
      <Cart name="张三">
        <h1>good</h1>
      </Cart>
    </>
  )



}

export default App;
