import React from 'react';
import Header from './header/Header';
import Cards from './cards/Cards';
import Chats from './chats/Chats';
import ChatScreen from './chats/chat/chat-screen/ChatScreen';
import SwipeButtons from './swipe-buttons/SwipeButtons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

/* https://www.youtube.com/watch?v=DQfeB_FKKkc */

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header backButton="/" />

            <h1>I am the profile page</h1>
          </Route>
          <Route path="/">
            <Header />

            <Cards /> 
            <SwipeButtons />

            {/*rafce*/}
            {/* Chat screen */}
            {/* Individual chat screen */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



/* DEVELOPER DATING APP - CODING CHALLENGE TO JOIN, LINKS TO GITHUB/SO/MEDIUM/ETC, OPTIONAL EXTRA IS TO SOLVE A CODING CHALLENGE TO ACCESS CHAT */