import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/Createtodo'
import { Todos } from './components/todos'

function App() {
  const [todos, setTodos] = useState([]);
  //we need to hit backend,get todos and call setTodos with new set of todos\

  //using below approach setTodos again call app and then again fetch request goes make it an infinite loop
  //to counter this porblem we will use useEffect hook

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.todos);
  })

  // console.log(todos);

  return (
    <div>
      <CreateTodo/> 
      <Todos todos = {todos}/>
    </div>
  )
}

export default App
