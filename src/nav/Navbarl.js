import './Navbarl.css';
import {BrowserRouter ,Routes ,Route} from "react-router-dom"
import Body2 from './body2';
import Body from './Body'
import Task from './task';
import ProfilePage from './ProfilePage';
import UploadTask from './carte/UploadTask ';
import Agenda from './agenda/Agenda';


function Navbarl() {
  return (
    <div className="Navbarl">
      <div className="side-by-side">
       <div className='Navbarl-nav'> 
        <span />
        <span />
        <span />
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" href="/Jawdou">الصفحة الشخصية</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shu">المواعيد</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cour">الدروس</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/task">المهام</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/profil">حسابك</a>
            </li>
          </ul>
          </div>
         
          </div>
          
    </div>
  );
}

export default Navbarl;
