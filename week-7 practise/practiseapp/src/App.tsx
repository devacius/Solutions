
import './App.css'
import Home from './assets/home'
import { Route,BrowserRouter,Routes,useNavigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
const Dashboard=lazy(()=>import ( './assets/dashboard' ));
const About=lazy(()=> import('./assets/about'));
const Profile=lazy(()=>import ('./assets/profile'));
const BackgroundChanger=lazy(()=> import('./assets/BackgroundChanger'));
import Loading from './assets/Loading';
// import Dashboard from './assets/Dashboard';
// import About from './assets/About';

function App() {


  return(
    <div>
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/" element={<Suspense fallback ={<Loading/>}><Home/> </Suspense>}/>
        <Route path="/dashboard" element={<Suspense fallback ={<Loading/>}><Dashboard/> </Suspense>}/>
        <Route path="/about" element={<Suspense fallback ={<Loading/>}><About/> </Suspense>}/>
        <Route path="/profile" element={<Suspense fallback={<Loading/>}><Profile/></Suspense>}/>
        <Route path="/backgroundchanger" element={<Suspense fallback={<Loading/>}><BackgroundChanger/></Suspense>}/>
      </Routes>
      </BrowserRouter>
      </div>

  )
  function Appbar(){
    const navigate=useNavigate();
    return(
      <div className='absolute top-0 right-0'>
        <button className='bg-slate-700 text-white 'onClick={()=>{
          navigate("/dashboard");
        }}>
        Dashboard
        </button>

        <button className='bg-slate-700 text-white'onClick={()=>{
          navigate("/about");
        }}>
        Recoil and state managment

        </button>
        <button className='bg-slate-700 text-white' onClick={()=>{
          navigate("/profile");
        }}>
          Profile
        </button>
        <button className='bg-slate-700 text-white' onClick={()=>{
          navigate("/backgroundchanger");
        }}>
          Backgroundchanger
        </button>
      </div>
    );
  }
}

export default App
