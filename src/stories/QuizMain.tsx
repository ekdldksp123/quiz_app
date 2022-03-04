/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Page } from './Quiz.styles';
import React, { useEffect, useState } from 'react';
import { QuizContent } from './Quiz';
import { Body, BtnArea, Content, Form, Head, ModalFooter, NextBtn, No, Question } from './QuizMain.styles';
import { Options } from "./options";
import { decode, leftPad } from "../lib/common";

export const QuizMain: React.FC<QuizContent> = ({ index, amount, question, type, options, correct, incorrect }) => {
    const [selected, setSelected] = useState<string>('');
    const [choose, setChoose] = useState<boolean>(false);
    const quiz: QuizContent = { index, amount, question, type, options, correct, incorrect };

    useEffect(() => {
        if(choose) {
            const radios = document.querySelectorAll(`.radio-group-${index}`);
            radios.forEach(e => e.ariaReadOnly = "true"); // 답 선택시 나머지 선택지 read only 처리

            let slide = document.getElementById(`next-${index}`);
            slide.addEventListener('click', (e:Event) => {
                if(index === amount - 1) {
                    alert('quiz end!');
                } else {
                    const page = document.querySelector('.page');
                    page.parentElement.style.transform = `translateX(${-100 * (index + 1)}%)`;
                }
            });
        }
    }, [choose]);

    const onRadioSelect = (value:string) => {
        setSelected(value);
        if(!choose) setChoose(!choose);
    }

    const renderNextBtn = () => {
        if(choose) {
            return (
                <ModalFooter>
                    <BtnArea>
                        <NextBtn id={`next-${quiz.index}`}/>
                    </BtnArea>
                </ModalFooter>
            );
        } else return <></>
    }

    return (
        <Page className="page">
            <Form css={responsive_form}>
                <Body>
                    <Head>
                        <No css={responsive_No}>{leftPad(quiz.index + 1)}</No>
                        <Question css={responsive_question}>{decode(quiz.question)}</Question>
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
    )
}


const responsive_form = css`
    @media (max-width: 1200px) {
        width: 65vw;
    }
`

const responsive_question = css`
    @media (max-width: 1200px) {
        font-size: 1.5rem;
    }
`

const responsive_No = css`
    @media (max-width: 1200px) {
        font-size: 3.5rem;
    }
`

