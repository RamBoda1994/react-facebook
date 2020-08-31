import React, { useState, useEffect, useContext } from 'react'
import './Feed.css';
import StoryReel from '../StoryReel/StoryReel';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import db from '../../firebase';
import { StateContext } from '../../context';
import actionTypes from '../../actions';

function Feed() {

    const [state, dispatch] = useContext(StateContext);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapShot => {
            const postData = snapShot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))
            dispatch({
                type: actionTypes.SET_POSTS,
                payload: {
                    posts: postData
                }
            })
        })
    }, [])

    return (
        <div className="feed">
            {state.posts && console.log(state.posts)}
            <StoryReel />
            <MessageSender />
            {
                state.posts?.map(({ id, data }) => (
                    <Post
                        key={id}
                        postId={id}
                        profilePic={data.profilePic}
                        image={data.image}
                        timestamp={data.timestamp}
                        username={data.username}
                        message={data.message}
                        likeCount={data.likeCount}
                    />
                ))
            }
        </div>
    )
}

export default Feed;
