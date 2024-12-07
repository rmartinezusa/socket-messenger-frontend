import { useGetMessagesQuery } from "../../services/messageSlice";

function Messages({ conversation }) {
    const { data: messages = [], isLoading } = useGetMessagesQuery(conversation.id);

    if (isLoading) {
        return <p>Loading messages...</p>;
    }

    return (
        <div>
            <h2>Messages</h2>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {messages.map((msg) => (
                    <li
                        key={msg.id}
                        style={{
                            padding: "0.5rem",
                            backgroundColor: msg.senderId === conversation.currentUserId ? "#e0f7fa" : "#fff",
                            marginBottom: "0.5rem",
                            borderRadius: "4px",
                        }}
                    >
                        <strong>{msg.senderId === conversation.currentUserId ? "You" : "Them"}:</strong> {msg.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Messages;
