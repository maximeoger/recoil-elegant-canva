import { useEffect, useRef } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { buttonState, uiListState } from '../store/atoms';
import Button from './Button'


interface Coords {
  startX: number;
  startY: number;
  lastX: number;
  lastY: number;
}

const Canva = () => {
  const [state, setState] = useRecoilState(buttonState)
  const [ui, setUi] = useRecoilValue(uiListState)
  const canvaRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const isClicked = useRef<boolean>(false)

  const coords = useRef<Coords>({
    startX: state.XPos,
    startY: state.YPos,
    lastX: 0,
    lastY: 0
  })
  
  useEffect(() => {
    if(!buttonRef.current || !canvaRef.current) return

    const button = buttonRef.current
    const canva = canvaRef.current

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true
      coords.current.startX = e.clientX
      coords.current.startY = e.clientY
    }

    const onMouseUp = () => {
      isClicked.current = false
      coords.current.lastX = button.offsetLeft
      coords.current.lastY = button.offsetTop

      setState({
        ...state,
        XPos: button.offsetLeft,
        YPos: button.offsetTop
      })
    }

    const onMouseMove = (e: MouseEvent) => {
      if(!isClicked.current) return
      const nextX = e.clientX - coords.current.startX + coords.current.lastX
      const nextY = e.clientY - coords.current.startY + coords.current.lastY
      button.style.top = `${nextY}px`
      button.style.left = `${nextX}px`
    }

    button.addEventListener('mousedown', onMouseDown)
    button.addEventListener('mouseup', onMouseUp)
    canva.addEventListener('mousemove', onMouseMove)
    canva.addEventListener('mouseleave', onMouseUp)

    const cleanupListeners = () => {
      button.removeEventListener('mousedown', onMouseDown)
      button.removeEventListener('mouseup', onMouseUp)
      canva.removeEventListener('mousemove', onMouseMove)
      canva.removeEventListener('mouseleave', onMouseUp)
    }

    return cleanupListeners
  }, [])

  return (
    <div 
      className='position-relative'
      ref={canvaRef} 
      style={{
        width: '100vw',
        height: '100vh'
      }}>
      <Button ref={buttonRef}/>
    </div>
  )
}

export default Canva