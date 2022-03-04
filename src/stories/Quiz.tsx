
import { Container, Slide, Page } from './Quiz.styles';
import React, { useEffect, useState } from 'react';
import { QuizMain } from './QuizMain';
import { QuizMainTest } from './QuizMain.stories';
import { decode, shuffle } from '../lib/common';

export interface QuizContent {
  index: number,
  amount: number,
  correct?: string,
  incorrect?: string[],
  options: string[],
  question: string,
  type: string,
}

interface Quizzes {
    quizzes: string;
}

export const Quiz: React.VFC<Quizzes> = ({ quizzes }) => {
    const [quizList, setQuizList] = useState<QuizContent[]>([]);

    useEffect(() => {
        if(quizzes) {
            setQuizList(JSON.parse(quizzes));
            
        }
    },[]);

    return (
        <Container>
            <Slide>
                { quizList.length > 0 && 
                    quizList.map((v:QuizContent, i:number) => {
                        QuizMainTest.args = {
                            index: v.index,
                            amount: v.amount,
                            question: v.question,
                            type: v.type,
                            correct: v.correct,
                            incorrect: v.incorrect,
                            options: v.options,
                        }
                        return (
                            <QuizMain
                                key={i}
                                index={v.index}
                                amount={v.amount}
                                question={v.question}
                                type={v.type}
                                correct={v.correct}
                                incorrect={v.incorrect}
                                options={v.options}
                            />
                        );
                    })    
                }
            </Slide>
        </Container>
  );
};

