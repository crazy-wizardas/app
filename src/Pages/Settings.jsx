import './Settings.css'
import Buttons from './Components/Buttons';
import Plus from '../IMG/addimg.svg'
import SupportImg from '../IMG/comment-dots-regular-full.svg'
import SugestionImg from '../IMG/circle-question-regular-full.svg'
import DarkModeImg from '../IMG/moon-regular-full.svg'
import { useState } from 'react';
function Settings() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };
    return (
        <>
            <main className='SettingsMain'>
                <p className='SettingsName'>Settings</p>
                <div className='SettingsBox'>
                    <button className='BoxButtons'>
                        <img src={DarkModeImg} alt="" className='SettingImgElement' />
                        <p>Dark mode</p>
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                    </button>
                    <button className='BoxButtons'>
                        <img src={SupportImg} alt="" className='SettingImgElement' />
                        <p>Support</p>
                    </button>
                    <button className='BoxButtons'>
                        <img src={SugestionImg} alt="" className='SettingImgElement' />
                        <p>Help us improve</p>
                    </button>
                </div>
                <div className='SettingsBox'>
                    <p className='BuisnesSettings'>For businesses</p>
                    <button className='BoxButtons'>
                        <img src={Plus} alt="" className='SettingImgElement' />
                        <p>Add new place</p>
                    </button>
                </div>
                <Buttons />
            </main>
        </>
    )
}
export default Settings;