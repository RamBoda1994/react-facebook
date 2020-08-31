import React, { useState, useContext } from 'react'
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideoCamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { StateContext } from '../../context';
import db from '../../firebase';
import firebase from 'firebase';

function MessageSender() {

    const [{ user }, dispatch] = useContext(StateContext);
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            likeCount: 0
        })
        setInput('');
        setImageUrl('');
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        placeholder={`What's on your mind, ${user.displayName}?`}
                        className="messageSender__input"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <input
                        placeholder="Image URL (Optional)"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden button</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
