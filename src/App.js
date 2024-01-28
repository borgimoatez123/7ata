import './App.css';
import Jawdou from './nav/Jawdou.jsx';
import Sidi from './sidi/Sidi.jsx';
import Login from './login/login.jsx';
import Body from './nav/Body.js';
import Body2 from './nav/body2.js';
import Task from './nav/task.js';
import ProfilePage from './nav/ProfilePage.js';
import UploadTask from './nav/carte/UploadTask .js';
import Shu from './nav/shuu/Shu.jsx';
import Tasks from './sidi/tasks.js';
import Agendas from './sidi/agenda/Agenda.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

function App() {

 
  return (
    <Router>
  <div>

    <Routes>
    <Route path='/' element={ <Login/>}/>
      <Route path='/Jawdou' element={ <Jawdou/>}/>
      <Route path='/Sidi' element={<Sidi/>}/>
      <Route path='/bb' element={<Body />} />
                 <Route path='/cour' element={<Body2 />} />
                 <Route path='/task' element={<Task />} />
                 <Route path='/profil' element={<ProfilePage />} />
                 <Route path='/task1' element={<UploadTask />} />
                 <Route path='/Shu' element={<Shu/>}/>
                 <Route path='/task' element={<Tasks />} />
  

  <Route path='/shu' element={<Agendas/>}/>
    </Routes>
   
  </div>
</Router>
  );
}

export default App;
