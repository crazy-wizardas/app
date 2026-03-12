import './Settings.css'
import Buttons from './Components/Buttons';
function Settings() {
    return (
        <>
            <main className='SettingsMain'>
                <p className='SettingsName'>Settings</p>
                <div className='SettingsBox'>
                    {/* <div className='darkMode'>
                        <p>Dark mode</p>
                        <button></button>
                    </div> */}
                    <button className='BoxButtons'>
                        <p>Support</p>
                    </button>
                    <button className='BoxButtons'>
                        <p>Help us improve</p>
                    </button>
                </div>
                <div className='SettingsBox'>
                    <p>For businesses</p>
                    <button className='BoxButtons'>
                        <p>Add new place</p>
                    </button>
                </div>
                <Buttons />
            </main>
        </>
    )
}
export default Settings;