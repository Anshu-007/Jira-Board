import './App.css';
import Home from './Components/Home/Home';
import store from './Components/Redux/Store/Store';
import { Provider } from 'react-redux';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/signUp' element={<SignUp Sign = {true}/>} />
            <Route path='/signIn' element={<SignUp Sign = {false}/>} />
            <Route path='/*' element={<Home/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
