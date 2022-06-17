import React, { useState, useEffect} from 'react'
import { useColorModeValue, Fade, useDisclosure, Button} from '@chakra-ui/react'
import Todolist from './todolist'
import AddTodo from './addtodo'

const CheckboxAnimated: React.FC = () => {

  const  { isOpen, onToggle } = useDisclosure()
  const initialTodos = [
    {
      id: 1,
      body: 'Learn about React',
    }
  ]

  const [todos, setTodos] = useState(initialTodos)
  

function deleteTodo(id) {
  const newTodos = todos.filter(todo => {
    return todo.id !== id
  })
  setTodos(newTodos)
}

function addTodo(todo) {
  setTodos([...todos, todo])
}

  return (
      <div className="justify-center items-center text-center flex gap-2 flex-col">
        <Button onClick={onToggle} colorScheme={useColorModeValue('cyan', 'purple')}>Open Todo</Button>
        <Fade in={isOpen} className='justify-center items-center text-center flex gap-2 flex-col py-10'>
        <Todolist todos={todos} deleteTodo={deleteTodo}/>
        <AddTodo addTodo={addTodo}/>
            </Fade>
      </div>
  )
}  

export default CheckboxAnimated