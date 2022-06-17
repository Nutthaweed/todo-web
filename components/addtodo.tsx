import { HStack, Input, Button, useColorModeValue, useToast, Box } from '@chakra-ui/react'
import  React, { useState} from 'react'
import {nanoid} from 'nanoid'

const AddTodo: React.FC = ({addTodo}) => {
    const toast = useToast()
    const handleSubmit = (e) =>{
     e.preventDefault()
     if (!content) {
        toast({
            render: () => (
                <Box  p={3} bg="red">
                    You must enter a todo
                </Box>
            ),
            isClosable: true,
            status: 'error',
            duration: 1000
        })
        return
     }
     const todo = {
        id: nanoid(),
        body: content
     }
    addTodo(todo)
    setContent('')
    }

    const [content, setContent] = useState('')

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="8">
                <Input variant="filled" placeholder="What you want to do?" value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button colorScheme={useColorModeValue('cyan', 'purple')} px="8" type="submit">Add todo</Button>
            </HStack>
        </form>
    )
}

export default AddTodo