import { createContext } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

import './styles/global.scss'

export const TestContext = createContext('');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TestContext.Provider value={'teste'}>
        <Route path='/' exact component={Home}  />
        <Route path='/rooms/new' component={NewRoom} />
      </TestContext.Provider>        
      </BrowserRouter>
    </div>
  );
}

export default App;
