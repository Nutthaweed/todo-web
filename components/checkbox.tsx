import React from 'react'
import { CheckboxGroup, Checkbox, useColorModeValue, Fade, useDisclosure, Button } from '@chakra-ui/react'

const CheckboxAnimated: React.FC = () => {
  const  { isOpen, onToggle } = useDisclosure()
  return (
      <div className="justify-center items-center text-center flex gap-2 flex-col">
        <Button onClick={onToggle} colorScheme={useColorModeValue('cyan', 'purple')}>Open Todo</Button>
        <Fade in={isOpen} className='justify-center items-center text-center flex gap-2 flex-col py-10'>
          <CheckboxGroup colorScheme={useColorModeValue('cyan','purple')} size="lg">
             <Checkbox>Hello World</Checkbox>
             <Checkbox>Checkbox1</Checkbox>
             <Checkbox>Checkbox2</Checkbox>
            </CheckboxGroup>
            </Fade>
      </div>
  )
}  

export default CheckboxAnimated