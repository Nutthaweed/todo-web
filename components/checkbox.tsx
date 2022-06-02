import React from 'react'
import { useColorModeValue, Fade, useDisclosure, Button } from '@chakra-ui/react'
import Todolist from './todolist'
import AddTodo from './addtodo'

const CheckboxAnimated: React.FC = () => {
  const  { isOpen, onToggle } = useDisclosure()
  return (
      <div className="justify-center items-center text-center flex gap-2 flex-col">
        <Button onClick={onToggle} colorScheme={useColorModeValue('cyan', 'purple')}>Open Todo</Button>
        <Fade in={isOpen} className='justify-center items-center text-center flex gap-2 flex-col py-10'>
        <Todolist />
        <AddTodo />
            </Fade>
      </div>
  )
}  

export default CheckboxAnimated