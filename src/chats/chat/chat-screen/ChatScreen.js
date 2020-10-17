import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            image: '...',
            message: 'Hello, how are you doing?'
        },
        {
            name: 'Sasha',
            image: 'https://pkimgcdn.peekyou.com/320cabdb67d580d3e8200e8022e66ce6.jpeg',
            message: 'Great! You?'
        },
        {
            image: '...',
            message: 'Awesome!'
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__matchedWithText">You matched with Max on 8/24/2020</p>
            {messages.map((message, index) => (
                message.name ? (
                <div className="chatScreen__message"
                     key={index}>
                    <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image} /> 
                    <p className="chatScreen__text">
                        {message.message}
                    </p>
                </div>
               ) : (
                <div 
                    className="chatScreen__message"
                    key={index}>
                    <p className="chatScreen__textUser">
                        {message.message}
                    </p>
                </div>
               )
            ))}

            <form className="chatScreen__input">
                <input 
                    type="text" 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Type message"
                    className="chatScreen__inputField" />
                <button 
                    type="submit"
                    onClick={handleSend}  
                    className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    );
}

export default ChatScreen;
