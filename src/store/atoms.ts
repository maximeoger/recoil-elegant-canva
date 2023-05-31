import { atom } from 'recoil'

interface ButtonState {
  content: string;
  XPos: number;
  YPos: number;
}

export const buttonState = atom({
  key: 'button-state',
  default: {
    content: 'Edit me !',
    XPos: window.innerWidth / 2,
    YPos: window.innerHeight / 2
  } as ButtonState
})
 
export const uiListState = atom({
  key: 'ui-list-state',
  default: []
})