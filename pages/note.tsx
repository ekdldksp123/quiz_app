/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { NextPage } from 'next'
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { QuizContent } from '../src/types/quiz';
import { Container, Slide } from '../src/components/layout/slide';
import WrongNote from '../src/components/views/wrong_notes';
import { ArrowBtn } from '../src/components/molecules/button';

const Note: NextPage = () => {

    const [ notes, setNotes ] = useState<QuizContent[]>([]);
    const [ pageIndex , setPageIndex ] = useState<number>(0);

    useEffect(() => {
        if(window.localStorage.hasOwnProperty('notes')) {
            const wrongList:QuizContent[] = JSON.parse(window.localStorage.getItem('notes'));
            
            setNotes(wrongList.map((v:QuizContent, i:number) => {
                const quiz:QuizContent = { index: i, ... v }; //index 만 고쳐주기
                return quiz;
            }));
        } else {
            alert('틀린 문제가 없습니다. 홈으로 돌아갑니다.');
            Router.push({ pathname: '/' });
        }
    },[]);

    useEffect(() => {
        const next = document.querySelector('#next');
        const prev = document.querySelector('#prev');
        
        if(notes.length > 0) {
            next.addEventListener('click', (e:Event) => {
                if(pageIndex + 1 <= notes.length) {
                    const page = document.querySelectorAll('.page')[pageIndex];
                    page.parentElement.style.transform = `translateX(calc(-100 * ${(pageIndex + 1) % notes.length}%))`;
                    setPageIndex(pageIndex + 1);
                } else {
                    e.preventDefault();
                }
            });
            
            prev.addEventListener('click', (e:Event) => {
                if(pageIndex - 1 >= 0) {
                    const page = document.querySelectorAll('.page')[pageIndex];
                    page.parentElement.style.transform = `translateX(calc(${-100 * (pageIndex - 1)}%))`;
                    setPageIndex(pageIndex - 1);
                } else {
                    e.preventDefault();
                }
            })
        }
    },[notes, pageIndex]);

    return (
        <Container>
            <Slide>
                { notes.length > 0 && 
                    notes.map((v:QuizContent, i:number) => {
                        return (
                            <WrongNote
                                key={i}
                                quiz={v}
                                index={i}
                                amount={notes.length}
                            />
                        )
                    })
                }
            </Slide>
            <ArrowBtn id="prev">❮</ArrowBtn>
            <ArrowBtn id="next" css={next}>❯</ArrowBtn>
        </Container>
    );
}

export default Note;

const next = css`
    right: 0;
    border-radius: 5px 0 0 5px;
`