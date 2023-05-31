import { selector } from 'recoil'
import { buttonState } from './atoms'

export const countParityState = selector({
  key: 'countParityState',
  get: ({get}) : boolean => {
    const num = get(buttonState)
    return num % 2 == 0
  }
})