import { useState } from 'react';
import { Box, Center } from '@chakra-ui/react'

function QuizQuestions() {

    const questions = [
        {
            question: 'What is the capital of India?',
            answers: [
                { text: 'New Delhi', correct: true },
                { text: 'Mumbai', correct: false },
                { text: 'Chennai', correct: false },
                { text: 'Kolkata', correct: false }
            ]
        },
        {
            question: 'What is the capital of USA?',
            answers: [
                { text: 'New York', correct: false },
                { text: 'Paris', correct: false },
                { text: 'Los Angeles', correct: false },
                { text: 'Washington DC', correct: true }
            ]
        },
        {
            question: 'Who is CEO of Apple?',
            answers: [
                { text: 'Steve Jobs', correct: false },
                { text: 'Tim Cook', correct: true },
                { text: 'Bill Gates', correct: false },
                { text: 'Satya Nadella', correct: false }
            ]
        },
        {
            question: 'Where is Eiffel Tower located?',
            answers: [
                { text: 'New York', correct: false },
                { text: 'London', correct: false },
                { text: 'Berlin', correct: false },
                { text: 'Paris', correct: true }
            ]
        }
    ]

    const [questionNumber, setQuestionNumber] = useState(0);

  return (
    <div className='quiz-container'>
        <Center>
        <Box bg='#276749' w='50%' p={4} borderRadius='md'>
        QuizQuestions
        </Box>
        </Center>
    </div>
  )
}

export default QuizQuestions