import React, { useState, useEffect} from 'react'
import { CheckboxGroup, Checkbox, useColorModeValue } from '@chakra-ui/react'

const CheckboxAnimated: React.FC = () => {
  return (
      <div className="justify-center items-center text-center flex gap-2 flex-col">
          <CheckboxGroup colorScheme={useColorModeValue('cyan','purple')}>
             <Checkbox>Hello World</Checkbox>
             <Checkbox>Checkbox1</Checkbox>
             <Checkbox>Checkbox2</Checkbox>
            </CheckboxGroup>
      </div>
  )
}  

export default CheckboxAnimated