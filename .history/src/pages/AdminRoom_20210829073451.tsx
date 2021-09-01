import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import {deleteImg} from '../assets/images/delete.svg';

import '../styles/room.scss';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const { user } = useAuth();

  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
 const {title, questions} = useRoom(roomId);

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();

    if (newQuestion.trim() === ''){
      return;
    }

    if (!user){
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false 
    }

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion('');
  }
  
  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="LetmeAsk" />
          <div>
            <RoomCode code={roomId}/>
            <Button isOutlined>Encerrar Sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta{questions.length > 1 && 's'}</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
         
          <div className="form-footer">
            {
              !user ? (<span>Para enviar uma pergunta, <button>faça seu login</button></span>) :
              (<div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>)
            }
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </form>
        <div className="question-room">
          {questions.map(question => {
            return (
              <Question 
                key={question.id}
                content={question.content}
                author={question.author}
              >
              <button>
                <img src={deleteImg} alt="Excluir pergunta" />
              </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}