import { io } from "socket.io-client";
const socket = io.connect()

function Inbox() {

    function sendMessage(){

    }

    return(
        <section>
            <label>
                <input placeholder="Message..." />
            </label>
            <button>Send</button>
        </section>
    );
}
export default Inbox;