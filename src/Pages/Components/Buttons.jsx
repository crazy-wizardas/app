import './Buttons.css'
import Profile from '../../IMG/Vector4.svg'
import Map from '../../IMG/Vector1.svg'
import Chat from '../../IMG/Vector2.svg'
import Settings from '../../IMG/Vector3.svg'
import { useNavigate, useLocation } from 'react-router-dom';
function Buttons() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <>
            <div className='buttonBox'>
                <div className='BoxButton'>
                    <button className='knopke' style={{ backgroundColor: location.pathname === "/profile" ? "#FEB05D" : "aliceblue"}} onClick={() => navigate('/profile')}>
                        <div className='knopkesImg'>
                            <img src={Profile} alt="" />
                        </div>
                        <p className='knopkesText'>Profile</p>
                    </button>
                    <button className='knopke' style={{ backgroundColor: location.pathname === "/" ? "#FEB05D" : "aliceblue"}} onClick={() => navigate('/')}>
                        <div className='knopkesImg'>
                            <img src={Map} alt="" />
                        </div>
                        <p className='knopkesText'>Maps</p>
                    </button>
                    <button className='knopke' style={{ backgroundColor: location.pathname === "/chats" ? "#FEB05D" : "aliceblue"}} onClick={() => navigate('/chats')}>
                        <div className='knopkesImg'>
                            <img src={Chat} alt="" />
                        </div>
                        <p className='knopkesText'>Chat</p>
                    </button>
                    <button className='knopke' style={{ backgroundColor: location.pathname === "/settings" ? "#FEB05D" : "aliceblue"}} onClick={() => navigate('/settings')}>
                        <div className='knopkesImg'>
                            <img src={Settings} alt="" />
                        </div>
                        <p className='knopkesText'>Settings</p>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Buttons;