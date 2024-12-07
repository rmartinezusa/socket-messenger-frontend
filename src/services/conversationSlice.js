import api from "../store/api"

const conversationApi = api.injectEndpoints({
    endpoints: (build) => ({
        getConversations: build.query({
            query: () => "/conversations",
            providesTags: ["Conversations"],
        }),
        getConversationById: build.query({
            query: (id) => `/conversations/${id}`,
            providesTags: (result, error, id) => [{ type: "Conversations", id }],
        }),
        createConversation: build.mutation({
            query: (participantIds) => ({
                url: "/conversations",
                method: "POST",
                body: { participantIds },
            }),
            invalidatesTags: ["Conversations"],
        }),
    }),
});

export const { 
    useGetConversationsQuery, 
    useGetConversationByIdQuery, 
    useCreateConversationMutation 
} = conversationApi;