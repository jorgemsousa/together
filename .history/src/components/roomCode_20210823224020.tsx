import copyImg from '../assets/images/copy.svg';

export function RoomCode() {
  return(
    <button>
      <div>
        <img src={copyImg} alt="copy room code" />
      </div>
      <span>Sala ew524352</span>
    </button>
  )
}