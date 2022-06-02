import { HStack, Input, Button, useColorModeValue } from '@chakra-ui/react'
import  React from 'react'

const AddTodo: React.FC = () => {
    const handleSubmit = (e) =>{

    }
    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="8">
                <Input variant="filled" placeholder="What you want to do?"/>
                <Button colorScheme={useColorModeValue('cyan', 'purple')} px="8" type="submit">Add todo</Button>
            </HStack>
        </form>
    )
}

export default AddTodo