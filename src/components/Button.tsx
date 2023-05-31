import { forwardRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { buttonState } from '../store/atoms'


const Button = forwardRef<HTMLButtonElement>(function Button(props, ref) {
  const [state, setState] = useRecoilState(buttonState)
  const [isEditing, setIsEditing] = useState(false)


  return(
    <button 
      ref={ref}
      className={`btn position-absolute btn-primary`} 
    >
      {isEditing ? <input type='text'/> : state.content}
    </button>
  )
})

export default Button;