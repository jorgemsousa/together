import ilustrationImg from '../assets/images/ilustration.svg'
import logoImg from '../assets/images/logo.svg'
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
        </div>
      </main>
    </div>
  )
}
