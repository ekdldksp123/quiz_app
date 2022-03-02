/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import { leftPad, decode, formatDateToString } from "../../lib/common";
import { Page, Form, Body, Head, No, Question, Content } from './solve_quizzes.styles';
import { NextBtn, BtnArea2 } from "../molecules/button";
import { ModalFooter } from "../layout/modal";
import { QuizContent, QuizResult } from "../../types/quiz";
import Router from 'next/router'
import { Options } from "../layout/options";

const QuizMain: React.FC<QuizResult> = ({ quiz, right, setRight, wrong, setWrong }) => {
    const [selected, setSelected] = useState<string>('');
    const [choose, setChoose] = useState<boolean>(false);

    useEffect(() => {
        if(choose) {
            const radios = document.querySelectorAll(`.radio-group-${quiz.index}`);
            radios.forEach(e => e.ariaReadOnly = "true"); // 답 선택시 나머지 선택지 read only 처리

            let slide = document.getElementById(`next-${quiz.index}`);
            slide.addEventListener('click', (e:Event) => {
                if(quiz.index === quiz.amount - 1) {
                    Router.push({pathname: '/result', query: { category: quiz.category, level: quiz.difficulty, right: right, wrong: wrong }})
                } else {
                    const page = document.querySelector('.page');
                    page.parentElement.style.transform = `translateX(${-100 * (quiz.index + 1)}%)`;
                }
            });
        }
    }, [choose]);

    const renderNextBtn = () => {
        if(choose) {
            return (
                <ModalFooter>
                    <BtnArea2>
                        <NextBtn id={`next-${quiz.index}`}/>
                    </BtnArea2>
                </ModalFooter>
            );
        } else return <></>
    }

    const onRadioSelect = (value:string) => {
        setSelected(value);
        if(!choose) setChoose(!choose);

        if(value === decode(quiz.correct)) setRight(right + 1); 
        else {
            setWrong(wrong + 1); 
            quiz.selected = value; //오답 기록해놓기
            
            if(window.localStorage.hasOwnProperty('notes')) {

                const notes:QuizContent[] = JSON.parse(window.localStorage.getItem('notes'));
                const newNotes:QuizContent[] = [quiz].concat(notes);
                window.localStorage.setItem('notes', JSON.stringify(newNotes));
                
            } else window.localStorage.setItem('notes', JSON.stringify(quiz));
        };
    }

    return (
        <Page className="page">
            <Form css={responsive_form}>
                <Body>
                    <Head>
                        <No>{leftPad(quiz.index + 1)}</No>
                        <Question>{decode(quiz.question)}</Question>
                    </Head>
                    <Content>
                        <Options 
                            quiz={ quiz } 
                            choose={ choose } 
                            selected={ selected } 
                            onRadioSelect={ onRadioSelect }
                        />
                        { renderNextBtn() }
                    </Content>
                </Body>
            </Form>
        </Page>
    );
}

export default QuizMain;

const responsive_form = css`
    @media (max-width: 1200px) {
        width: 65vw;
    }
`



