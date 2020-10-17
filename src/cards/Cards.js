import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from '../api/firebase';
import './Cards.css';

const Cards = () => {
    const [cards, setCards] = useState([]);
 
    useEffect(() => {
        const unsubscribe = database.collection('cards').onSnapshot(snapshot => (
            setCards(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div>
           {cards.map((card, index) => (
               <div 
                   className="cards__cardContainer" 
                   key={index}>
                <TinderCard 
                    className="swipe"
                    preventSwipe={['up', 'down']}>
                    <div
                        style={{ backgroundImage: `url(${card.url})`}}
                        className="card">
                        <h2>{card.name}</h2>
                    </div>
                </TinderCard>
               </div>
           ))}
        </div>
    )
}

export default Cards
