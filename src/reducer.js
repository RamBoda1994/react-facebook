import actionTypes from "./actions";

export const initialState = {
    user: null,
    posts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        case actionTypes.SET_POSTS:
            console.log(action)
            return {
                ...state,
                posts: action.payload.posts
            }
        case actionTypes.LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id) {
                        post.data.likeCount++;
                    }
                    return post;
                })
            }
        default:
            return state;
    }
}

export default reducer;