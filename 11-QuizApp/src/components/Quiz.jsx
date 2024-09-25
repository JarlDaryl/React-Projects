import React, { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question';

export default function Quiz() {
	const [answerState, setAnswerState] = useState('');
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionIndex =
		answerState === '' ? userAnswers.length : userAnswers.length - 1;
	const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		function handleSelectAnswer(selectedAnswer) {
			setAnswerState('answered');
			setUserAnswers((prevUserAnswers) => {
				return [...prevUserAnswers, selectedAnswer];
			});

			setTimeout(() => {
				if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
					setAnswerState('correct');
				} else {
					setAnswerState('incorrect');
				}
				setTimeout(() => {
					setAnswerState('');
				}, 2000);
			}, 1000);
		},
		[activeQuestionIndex]
	);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

	if (quizIsComplete) {
		return (
			<div id='summary'>
				<img src={quizCompleteImg} alt='Trophy Icon' />
				<h2>Quiz Complete!</h2>
			</div>
		);
	}

	return (
		<div id='quiz'>
			<Question
			key={activeQuestionIndex}
				questionText={QUESTIONS[activeQuestionIndex].text}
				answers={QUESTIONS[activeQuestionIndex].answers}
				answerState={answerState}
				selectedAnswer={userAnswers[userAnswers - 1]}
				onSelectAnswer={handleSelectAnswer}
				onSkipAnswer={handleSkipAnswer}
			/>
		</div>
	);
}
