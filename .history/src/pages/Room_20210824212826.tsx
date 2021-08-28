import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function Room() {

  const params = useParams<RoomParams>();
  
  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetmeAsk" />
          <RoomCode code={params.id}/>
        </div>
      </header>

      <main>
        <div className="room-title">
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