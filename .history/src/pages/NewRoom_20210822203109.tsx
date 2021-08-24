import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

import {Button} from  '../components/button'
import { database } from '../services/firebase';
 import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'

export function NewRoom() {
 const { user } = useAuth();

const [newRoom, setNewRoom] = useState('')

async function handleCreateRoom(event: FormEvent) {
  event.preventDefault();

  if(newRoom.trim() === '') {
    return;
  }

  const roomRef = database.ref('rooms');

  const firebaseRoom = await roomRef.push({
    title: newRoom,
    authorId: user?.id,
  })

  console.log(firebaseRoom);
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
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input 
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p> 
        </div>
      </main>
    </div>
  )
}
