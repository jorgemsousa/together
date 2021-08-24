
import logoImg from '../assets/images/logo.svg';
export function Room() {
  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetmeAsk" />
          <div>codigo</div>
        </div>
      </header>

      <main className="content">
        <div className="romm-title">
          <h1>Nome da Sala</h1>
          <span>3 perguntas</span>
        </div>

        <form>
          <textarea 
            placeholder="Faça a sua pergunta"
          />
        </form>
      </main>
    </div>
  );
}