import { io } from "socket.io-client";

const socket = io(import.meta.env.BACKEND_URL, {
    auth: {
        token: localStorage.getItem("token"),
    },
});

export default socket;
