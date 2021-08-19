import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/newroom' component={NewRoom} />
      </BrowserRouter>
    </div>
  );
}

export default App;
