import ilustrationImg from '../assets/images/ilustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home() {
  return(
    <div>
      <aside>
        <img src={ilustrationImg} alt="ilustrator" />
        <strong>Crie dalas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="logo" />
          <button>
            <img src={googleIconImg} alt="gogle" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
          </form>
        </div>
      </main>
    </div>
  )
}
