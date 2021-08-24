
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/button';

import '../styles/room.scss';

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

          <div className="form-footer">
            <span>Para enviar uma pergunta, <button>faça seu login</button></span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </form>
      </main>
    </div>
  );
}