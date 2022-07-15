import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <main className="app">
        <Header/>
      </main>
    </BrowserRouter>
  );
}

export default App;
  