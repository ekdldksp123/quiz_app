/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import type { NextPage } from 'next'
import { GetServerSideProps  } from 'next'
import { InferGetServerSidePropsType } from 'next'
import { useState, useEffect } from 'react';
import QuizMain from '../src/components/views/solve_quizzes';
import { QuizContent } from '../src/types/quiz';

const Quiz: NextPage = ({ quizzes } : InferGetServerSidePropsType<typeof getServerSideProps>) => {
    console.log(quizzes);
    
    const [pageIndex, setPageIndex] = useState<number>(quizzes && 0);
    const [quizList, setQuizList] = useState<QuizContent[]>([]);
    
    useEffect(() => {
        setQuizList(quizzes.results.map((v:any,i:number) => {
            if(v.type === 'boolean')  {
                const quiz: QuizContent = {
                    index: i,
                    category: v.category,
                    question: v.question,
                    type: v.type,
                    difficulty: v.difficulty,
                    correct: v['correct_answer'],
                    options: ['TRUE', 'FALSE']
                }
                return quiz;
            } else {
                const quiz: QuizContent = {
                    index: i,
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

    useEffect(() => {
        let slides = document.querySelectorAll('.next');
        let slidesCount = slides.length;
        let index = pageIndex;

        slides.forEach(slide => {
            slide.addEventListener('click', (e:Event) => {
                setPageIndex(index++ % slidesCount);
                slide.parentElement.parentElement.style.transform = `translateX(${-100 * pageIndex}%)`;
            });
        });
    },[pageIndex]);

    return (
        <Container>
            <Slide>
                { quizList.length > 0 && 
                    quizList.map((v:QuizContent, i:number) => {
                        return <QuizMain key={i} quiz={v} />
                    })    
                }
            </Slide>
        </Container>
        );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

