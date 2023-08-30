import './App.css';
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/signUp' element={<SignUp/>} />
          <Route path='/*' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
