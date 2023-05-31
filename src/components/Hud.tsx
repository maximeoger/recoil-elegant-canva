import { useRecoilState } from 'recoil'
import { uiListState } from '../store/atoms'

const Hud = () => {
  const [ui, setUi] = useRecoilState(uiListState)
  
  return (
    <div className='position-absolute'>
      <button>Ajouter un bouton</button>
    </div>
  )
}

export default Hud