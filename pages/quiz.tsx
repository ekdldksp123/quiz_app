import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { Container, Slide } from '../src/components/layout/slide';
import QuizMain from '../src/components/views/solve_quizzes';
import { shuffle } from '../src/lib/common';
import useTimerActions from '../src/lib/hook/useTimerAction';
import { QuizContent } from '../src/types/quiz';

const Quiz: NextPage = () => {
    const timerActions = useTimerActions();
    const [quizList, setQuizList] = useState<QuizContent[]>([]);
    const [right, setRight] = useState<number>(0);
    const [wrong, setWrong] = useState<number>(0);
    
    useEffect(() => {
        if(window.localStorage && window.localStorage.getItem('quizzes')) {
            const quizzes:QuizContent[] = JSON.parse(window.localStorage.getItem('quizzes'));

            setQuizList(quizzes.map((v:any,i:number) => {
                if(v.type === 'boolean')  {
                    const quiz: QuizContent = {
                        index: i,
                        amount: quizzes.length,
                        category: v.category,
                        question: v.question,
                        type: v.type,
                        difficulty: v.difficulty,
                        correct: v['correct_answer'],
                        options: ['True', 'False'],
                    }
                    return quiz;
                } else {
                    const quiz: QuizContent = {
                        index: i,
                        amount: quizzes.length,
                        category: v.category,
                        question: v.question,
                        type: v.type,
                        difficulty: v.difficulty,
                        correct: v['correct_answer'],
                        incorrect: [...v['incorrect_answers']],
                        options: shuffle([v['correct_answer'], ...v['incorrect_answers']]),
                    }
                    return quiz;
                }
            }));
            /** 타이머 시작 */
            timerActions.onStart();
        }
    }, []);

    useEffect(() => {
        if(quizList.length > 0) console.log(JSON.stringify(quizList));
    }, [quizList])

    return (
        <Container>
            <Slide>
                { quizList.length > 0 && 
                    quizList.map((v:QuizContent, i:number) => {
                        return (
                            <QuizMain 
                                key={i} 
                                quiz={v} 
                                right={right} 
                                setRight={setRight} 
                                wrong={wrong} 
                                setWrong={setWrong}
                            />
                        );
                    })    
                }
            </Slide>
        </Container>
        );
}

export default Quiz;

