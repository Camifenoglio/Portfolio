import './App.css';
import AppBar from './components/AppBar';

function App() {
  return (
    <>
    
<AppBar/>
    <div className="App"> 
      <div className='fotoContainer'>
        <img src={'https://i.imgur.com/97lHwMC.jpg'} className="foto" alt="foto" />

      </div>

    </div>
    </>
  );
}

export default App;
