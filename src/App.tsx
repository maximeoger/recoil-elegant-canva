import { RecoilRoot } from 'recoil'
import Canva from './components/Canva'
import Hud from './components/Hud'

function App() {
  return (
    <RecoilRoot>
      <Hud/>
      <Canva/>
    </RecoilRoot>
  )
}

export default App
