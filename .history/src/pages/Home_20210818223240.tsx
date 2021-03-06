import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

import {Button} from  '../components/button'

import '../styles/auth.scss'

export function Home() {

  const history = useHistory();

  function navigateNewRom() {
    history.push('/roms/new');
  }
  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="logo" />
          <button className="create-room" onClick={navigateNewRom}>
            <img src={googleIconImg} alt="gogle" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
