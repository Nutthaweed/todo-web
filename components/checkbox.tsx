import React, { useState, useEffect} from 'react'
import { useColorModeValue, Fade, useDisclosure, Button } from '@chakra-ui/react'
import Todolist from './todolist'
import AddTodo from './addtodo'

const CheckboxAnimated: React.FC = () => {
  const  { isOpen, onToggle } = useDisclosure()
  const todos = [
    {
        id: 1,
        body: 'get rekt'
    },
    {
        id: 2,
        body: 'write todo web'
    },
    {
        id: 3,
        body: 'asdasdasd'
    }
]

const [ Todo, setTodo] = useState(todos)

function deleteTodo(id) {
   const newTodos = Todo.filter(todo => {
       return todo.id !== id
   })
   setTodo(newTodos)
}

  return (
      <div className="justify-center items-center text-center flex gap-2 flex-col">
        <Button onClick={onToggle} colorScheme={useColorModeValue('cyan', 'purple')}>Open Todo</Button>
        <Fade in={isOpen} className='justify-center items-center text-center flex gap-2 flex-col py-10'>
        <Todolist />
        <AddTodo todos={todos} deleteTodo={deleteTodo}/>
            </Fade>
      </div>
  )
}  

export default CheckboxAnimated