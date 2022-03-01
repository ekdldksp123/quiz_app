/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import type { NextPage } from 'next'
import { GetServerSideProps  } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { useState, useEffect } from 'react';
import QuizMain from '../src/components/views/solve_quizzes';
import { QuizContent } from '../src/types/quiz';

const Quiz: NextPage = ({ quizzes } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    
    const [quizList, setQuizList] = useState<QuizContent[]>([]);
    const [right, setRight] = useState<number>(0);
    const [wrong, setWrong] = useState<number>(0);
    
    useEffect(() => {
        setQuizList(quizzes.results.map((v:any,i:number) => {
            if(v.type === 'boolean')  {
                const quiz: QuizContent = {
                    index: i,
                    amount: quizzes.results.length,
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
                    amount: quizzes.results.length,
                    category: v.category,
                    question: v.question,
                    type: v.type,
                    difficulty: v.difficulty,
                    correct: v['correct_answer'],
                    incorrect: [...v['incorrect_answers']],
                    options: [v['correct_answer'], ...v['incorrect_answers']].sort(() => Math.random() - 0.5), //배열의 요소를 무작위로 섞기
                }
                return quiz;
            }
        }));
    }, []);

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

const serverSideProps: GetServerSideProps = async (context) => {
    const url = context.query.url as string;
    
    const res = await fetch(url);
    const data = await res.json();

    if(!data) { //data 없을 때
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    //pageProps로 넘길 데이터 
    return { props :  { quizzes: data } };
}

export const getServerSideProps = process.env.SKIP_SSR ? undefined : serverSideProps;

export default Quiz;

const Container = styled.div`
    font-family: inherit;
    position: fixed;
    height: 100vh;
    width: 100vw;    
    overflow: hidden;
    background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
    color:white;
`

const Slide = styled.div`
    height: 100% !important;
    display: flex;
    flex-wrap: nowrap;
    transition: all .5s linear;
    transform: translateX(0);
`

