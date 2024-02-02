import { useState } from 'react';
import './App.css';
import ReactCardFlip from 'react-card-flip';

const cardTopics = [
  {
    id: 'card',
    topic: 'HTML',
    backContent: 'HTML (HyperText Markup Language) is the standard language for creating web pages.',
  },
  {
    id: 'card2',
    topic: 'CSS',
    backContent: 'CSS (Cascading Style Sheets) defines the visual presentation of HTML documents.',
  },
  {
    id: 'card3',
    topic: 'JavaScript',
    backContent: 'JavaScript is a high-level, interpreted programming language commonly used for web development.',
  },
  {
    id: 'card4',
    topic: 'Python',
    backContent: 'Python is a general-purpose programming language known for its simplicity and readability.',
  },
  {
    id: 'card5',
    topic: 'Java',
    backContent: 'Java is a popular object-oriented programming language used for various applications.',
  },
  {
    id: 'card6',
    topic: 'C++',
    backContent: 'C++ is a powerful and versatile programming language used for system programming and game development.',
  },
  {
    id: 'card7',
    topic: 'React',
    backContent: 'React is a JavaScript library for building user interfaces.',
  },
  {
    id: 'card8',
    topic: 'Angular',
    backContent: 'Angular is a TypeScript framework for building web applications.',
  },
  {
    id: 'card9',
    topic: 'PHP',
    backContent: 'PHP is a general-purpose scripting language for creating dynamic web pages.',
  },
  {
    id: 'card10',
    topic: 'SQL',
    backContent: 'SQL (Structured Query Language) is used to access and manipulate data in relational databases.',
  },
];

function App() {
  const [flippedCards, setFlippedCards] = useState({});

  const initializeFlippedCards = () => {
    const initialStates = {};
    cardTopics.forEach((topic) => {
      initialStates[topic.id] = false;
    });
    setFlippedCards(initialStates);
  };

  const flipCard = (cardId) => {
    setFlippedCards((prevCards) => ({ ...prevCards, [cardId]: !prevCards[cardId] }));
  };

  useState(() => initializeFlippedCards(), []);

  return (
    <div className="card-container">
      {cardTopics.map((topic) => (
        <ReactCardFlip
          key={topic.id}
          flipDirection="horizontal"
          isFlipped={flippedCards[topic.id]}
        >
          <div className="card" id={topic.id} onClick={() => flipCard(topic.id)}>
            <h1>{topic.topic}</h1>
          </div>
          <div className="card card-back" onClick={() => flipCard(topic.id)}>
            <p>{topic.backContent}</p>
          </div>
        </ReactCardFlip>
      ))}
    </div>
  );
}

export default App;
