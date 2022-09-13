import { apiSlice } from '../api/apiSlice';

export const messagesApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMessages: builder.query({
			query: (id) =>
				`/messages?conversationId=${id}&_sort=timestamp&_order=desc&_page=1&_limit=${process.env.REACT_APP_MESSAGES_PER_PAGE}`,
		}),
		addMessage: builder.mutation({
			query: (data) => {
				console.log(data);
				return {
					url: '/messages',
					method: 'POST',
					body: data,
					headers: {
						'Content-Type': 'application/json',
					},
				};
			},
		}),
	}),
});

export const { useGetMessagesQuery, useAddMessageMutation } = messagesApi;
