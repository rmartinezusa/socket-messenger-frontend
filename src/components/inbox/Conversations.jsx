import { useGetConversationsQuery } from "../../services/conversationSlice";

function Conversations({ onSelectConversation }) {
    const { data: conversations = [], isLoading } = useGetConversationsQuery();

    if (isLoading) {
        return <p>Loading conversations...</p>;
    }

    return (
        <ul>
            {conversations.map((conversation) => (
                <li
                    key={conversation.id}
                    onClick={() => onSelectConversation(conversation)}
                    style={{
                        padding: "0.5rem",
                        borderBottom: "1px solid #ccc",
                        cursor: "pointer",
                    }}
                >
                    {conversation.participants.map((p) => p.username).join(", ")}
                </li>
            ))}
        </ul>
    );
}

export default Conversations;
