'use client';
import { useState } from 'react';
import Modal from 'react-modal';
import styles from './page.module.css';
import Image from 'next/image';

export default function QuizPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const questions = [
    {
      question: 'Where should we go next for our vacation?',
      options: ['Japan', 'Turkey', 'Greece', 'Vietnam','Stay in Germany'],
      answers: ['Japan', 'Turkey', 'Greece', 'Vietnam'], // Consider these correct (or multiple correct)
      cuteMessages: ['Yay letss goo Bbi! Mwoaaw Mwoaaw Mwoaaw', 'Yay, your favorite!','My bunny babii ❤️❤️❤️'],
    },
    {
      question: 'Bbi I always wanna be your fluffy puffy bear?',
      options: ['Yes', 'No'],
      answers: ['Yes'],
      cuteMessages: ['Loveee youuu sweethearr Mwoaaaw Mwoaaaw Mwoaaaw ❤️❤️❤️ ','Lovely bbi girl ❤️❤️❤️','My bunny babii ❤️❤️❤️'],
    },
    {
      question: 'Bbi what should we do next time',
      options: ['Picnic', 'Movies', 'Beach', 'Stargazing','Painting together','karaoke'],
      answers: ['Picnic', 'Movies', 'Beach', 'Stargazing','Painting together','karaoke'],
      cuteMessages: ['Lovely bbi tell me about you answer ❤️❤️❤️ ','Amazing choice sweet bbi','My purple queen ❤️❤️❤️'],
    }
  ];

  const handleAnswerClick = (questionIndex: number , optionIndex:number) => {
    const correctAnswer = questions[questionIndex].answers.includes(questions[questionIndex].options[optionIndex]);
    const message = correctAnswer
      ? questions[questionIndex].cuteMessages[getRandomInt(questions[questionIndex].cuteMessages.length-1)]
      : 'Oops! Select something else sweetheart ):';
    setMessage(message);
    setIsOpen(true);
  };

  function getRandomInt(max:number) {
   
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-pink-600">Helloo My Milky Way ❤️🌌</h1>

        {questions.map((q, qIndex) => (
          <div key={qIndex} className="my-4">
            <p className="text-lg font-semibold text-purple-600">{q.question}</p>
            <div className="grid grid-cols-2 gap-4 mt-2">
              {q.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className="p-2 bg-pink-200 text-pink-800 rounded-lg hover:bg-pink-300 transition-all"
                  onClick={() => handleAnswerClick(qIndex, optionIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
          <div className="mt-8">
          <Image
            src="/rainbow.jpeg" // Replace with your photo path
            alt="A cute photo"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>



      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="bg-white p-4 rounded-lg shadow-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
      >
        <h2 className="text-xl text-center text-purple-600">{message}</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 p-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500"
        >
          Close
        </button>
      </Modal>
    </div>
  );
}
