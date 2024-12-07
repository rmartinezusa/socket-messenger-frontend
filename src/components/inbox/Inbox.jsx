import { useState, useEffect } from "react";
import socket from "../../utils/socket";
import Conversations from "./Conversations";
import Messages from "./Messages";

function Inbox() {
    const [selectedConversation, setSelectedConversation] = useState(null);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        // Listen for new messages
        socket.on("receiveMessage", (message) => {
            console.log("New message received: ", message);
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    const handleSelectConversation = (conversation) => {
        setSelectedConversation(conversation);
    };

    const handleSendMessage = () => {
        if (selectedConversation && newMessage.trim()) {
            socket.emit("sendMessage", {
                conversationId: selectedConversation.id,
                text: newMessage,
            });
            setNewMessage(""); // Clear input field
        }
    };

    return (
        <section style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {/* Left Panel: Conversations */}
            <div style={{ width: "30%", borderRight: "1px solid #ccc" }}>
                <h2>Conversations</h2>
                <Conversations onSelectConversation={handleSelectConversation} />
            </div>

            {/* Right Panel: Messages */}
            <div style={{ width: "70%" }}>
                {selectedConversation ? (
                    <>
                        <Messages conversation={selectedConversation} />
                        <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
                            <input
                                type="text"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Type a message..."
                                style={{ flex: 1, padding: "0.5rem" }}
                            />
                            <button onClick={handleSendMessage} style={{ padding: "0.5rem 1rem" }}>
                                Send
                            </button>
                        </div>
                    </>
                ) : (
                    <p>Please select a conversation to view messages.</p>
                )}
            </div>
        </section>
    );
}

export default Inbox;
