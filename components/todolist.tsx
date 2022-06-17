import React, {useState, useEffect} from 'react'
import { CheckboxGroup, Checkbox, useColorModeValue, IconButton, HStack, Text, VStack, StackDivider,  Badge} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'

const Todolist: React.FC = ({todos, deleteTodo}) => { 
    if (!todos.length) {
        return (
            <Badge  p="4" m="4" borderRadius="lg">
                No todos Congratuation! 🏆
            </Badge>
        )
    }
    return (
        <VStack divider={<StackDivider />} borderColor="purple" borderWidth="2px" borderRadius="lg" 
        p="4" w="100%" 
        >
        {todos.map((todo) => (
            <HStack key={todo.id}>
                <CheckboxGroup size="lg" >
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