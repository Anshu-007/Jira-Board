import './App.css';
import Board from './Components/Board/Board';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Board/>

      {/* rest of the work */}
    </div>
  );
}

export default App;
