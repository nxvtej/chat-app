import './App.css'
import './index.css'
import { Login } from './pages/login/Login.jsx';
import { SignUp } from './pages/signup/SignUp.jsx';


function App() {

  return <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      <SignUp/>

      
    </div>;
  
}

export default App
