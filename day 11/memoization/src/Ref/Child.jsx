/* eslint-disable react/display-name */
import React, {useRef} from 'react'

const Child = React.forwardRef((props, ref) => {
  const inputRef = useRef()
  
  React.useImperativeHandle(ref, () => ({
    putFocus:()=>{
      inputRef.current.focus()
    },
    getValue: () => {
      return inputRef.current.value
    },
  }));

  return <input type='text' placeholder='Enter something' ref={inputRef} />
})



export default Child