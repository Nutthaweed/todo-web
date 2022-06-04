import React, {useState, useEffect} from 'react'
import { CheckboxGroup, Checkbox, useColorModeValue, IconButton, HStack, Text, VStack, StackDivider, useColorMode} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

const Todolist: React.FC = (todos, deleteTodo) => { 
    return (
        <VStack divider={<StackDivider />} borderColor={useColorModeValue('cyan', 'purple')} borderWidth="2px" borderRadius="lg" 
        p="4" w="100%"
        >
        {todos.map((todo) => (
            <HStack key={todo.id}>
                <CheckboxGroup colorScheme={useColorModeValue('cyan','purple')} size="lg" >
                <Checkbox>
                    <Text>
                    {todo.body}
                    <IconButton aria-label='Delete todo' icon={<FaTrash/>} isRound="true" onClick={() => deleteTodo(todo.id)}  />
                    </Text>
                </Checkbox>
           </CheckboxGroup>
            </HStack>
        ))}
            </VStack>
    )
}

export default Todolist