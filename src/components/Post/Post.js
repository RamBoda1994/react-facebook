import React, { useContext } from 'react'
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumpsUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import db from '../../firebase';
import { StateContext } from '../../context';
import actionTypes from '../../actions';

function Post({ profilePic, image, username, timestamp, message, postId, likeCount }) {

    const [state, dispatch] = useContext(StateContext);

    const handleLikePost = () => {
        dispatch({
            type: actionTypes.LIKE_POST,
            payload: {
                id: postId
            }
        })
        db.collection('posts').doc(postId).set({
            likeCount: likeCount + 1
        }, { merge: true })
    }

    return (
        <div className="post">
            <div className="post__top">
                <Avatar
                    src={profilePic}
                    className="post__avatar"
                />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">{message}</div>
            <div className="post__image" style={{ display: image ? 'block' : 'none' }}>
                <img
                    src={image}
                    alt="image"
                />
            </div>
            <div className="post__counter">
                <ThumpsUpIcon />
                <p>{likeCount}</p>
            </div>
            <div className="post__options">
                <div className="post__option" onClick={handleLikePost}>
                    <ThumpsUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
