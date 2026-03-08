import './Buttons.css'
import './Profile.css'
import Profileimg from '../IMG/Vector4.svg'
import Map from '../IMG/Vector1.svg'
import Chat from '../IMG/Vector2.svg'
import Settings from '../IMG/Vector3.svg'
import { useNavigate } from 'react-router-dom';
function Profile() {
    const navigate = useNavigate();
    return (
        <>
            <main>
                <div className='buttonBox'>
                    <div className='BoxButton'>
                        <button className='knopke' onClick={() => navigate('/profile')}>
                            <div className='knopkesImg'>
                                <img src={Profileimg} alt="" />
                            </div>
                            <p className='knopkesText'>Profile</p>
                        </button>
                        <button className='knopke' onClick={() => navigate('/')}>
                            <div className='knopkesImg'>
                                <img src={Map} alt="" />
                            </div>
                            <p className='knopkesText'>Maps</p>
                        </button>
                        <button className='knopke' onClick={() => navigate('/chats')}>
                            <div className='knopkesImg'>
                                <img src={Chat} alt="" />
                            </div>
                            <p className='knopkesText'>Chat</p>
                        </button>
                        <button className='knopke' onClick={() => navigate('/settings')}>
                            <div className='knopkesImg'>
                                <img src={Settings} alt="" />
                            </div>
                            <p className='knopkesText'>Settings</p>
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Profile