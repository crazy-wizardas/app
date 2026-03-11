
import './Chat.css'
import Buttons from './Components/Buttons';
function Chats() {
    return (
        <>
            <main>
                <div className='ChatTop'>
                    <p className='ChatName'>CHAT</p>
                </div>
                <div className='ChatBottom'>
                    <input type="text" placeholder='Type...' className='ChatInput'/>
                    <button className='ChatSend'>
                        <img src="" alt="" />
                    </button>
                </div>

               <Buttons/>
            </main>
        </>
    )
}
export default Chats;