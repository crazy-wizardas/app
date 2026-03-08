import './Search.css';
import searchGlass from '../IMG/magnifying-glass-solid-full.svg';
import mic from '../IMG/microphone-solid-full.svg'
import './Buttons.css'
import Profile from '../IMG/Vector4.svg'
import Map from '../IMG/Vector1.svg'
import Chat from '../IMG/Vector2.svg'
import Settings from '../IMG/Vector3.svg'
import { useNavigate } from 'react-router-dom';
function Maps() {
    const navigate=useNavigate();
    return (
        <>
            <main>
                <div className="searchBox">
                    <div className='BoxBox'>
                        <img src={searchGlass} alt="" className="searchIcon" />
                        <div className="searchInputBox">
                            <input type="text" className="searchInput" />
                        </div>
                        <div className='voiceIconBox'>
                            <button className='voiceButton'>
                                <img src={mic} alt="" className="voiceIcon" />
                            </button>
                        </div>
                    </div>

                </div>

                <div className='buttonBox'>
                    <div className='BoxButton'>
                        <button className='knopke' onClick={()=> navigate('/profile')}>
                            <div className='knopkesImg'>
                                <img src={Profile} alt="" />
                            </div>
                            <p className='knopkesText'>Profile</p>
                        </button>
                        <button className='knopke'>
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

export default Maps;