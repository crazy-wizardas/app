import './Search.css';
import searchGlass from '../IMG/magnifying-glass-solid-full.svg';
import mic from '../IMG/microphone-solid-full.svg'
import Buttons from './Components/Buttons.jsx';
function Maps() {
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
                <Buttons/>
            </main>
        </>
    )
}

export default Maps;