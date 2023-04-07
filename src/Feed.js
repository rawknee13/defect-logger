import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import Post from "./Post";
import { db } from "./firebase";
import  firebase from 'firebase/compat/app';

function Feed() {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc =>(
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            name: 'Rohan Kalra',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("") 
    };
 
    return(
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo'color='#70B5F9'/>
                    <InputOption Icon={Subscriptions} title='Video'color='#E7A33E'/>
                    <InputOption Icon={EventNote} title='Event'color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDay} title='Write article'color='#7FC15E'/>
                </div>
            </div>
            {/* Posts */}
            {posts.map(({id, data: { name, description, message, photoUrl }}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
        </div>
    )
}

export default Feed;