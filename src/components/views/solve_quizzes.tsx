/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import { leftPad, decode, uuidv4 } from "../../lib/common";
import { Quiz } from "../../types/quiz";
import { Page, Form, Body, Head, No, Question, Content, Radio, Label } from './solve_quizzes.styles';
import { NextBtn, BtnArea2 } from "../molecules/button";
import { ModalFooter } from "../layout/modal";
import Router from 'next/router'

const QuizMain: React.FC<Quiz> = ({ quiz, right, setRight, wrong, setWrong }) => {
    const [selected, setSelected] = useState<string>('');
    const [choose, setChoose] = useState<boolean>(false);

    useEffect(() => {
        if(choose) {
            const radios = document.querySelectorAll(`.radio-group-${quiz.index}`);
            radios.forEach(e => e.ariaReadOnly = "true");

            let slide = document.getElementById(`next-${quiz.index}`);
            slide.addEventListener('click', (e:Event) => {
                if(quiz.index === quiz.amount - 1) {
                    Router.push({pathname: '/result', query: { total: quiz.amount, right: right, wrong: wrong }})
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
        if(value === quiz.correct) setRight(right+1);
        else setWrong(wrong+1);

        setSelected(value);
        if(!choose) setChoose(!choose);
    }

    const renderRadios = () => {
        if(quiz.options.length !== 2) { // multiple
            return (
                <>
                {quiz.options.map((v:string, i:number) => {
                    if(choose) {
                        return (
                            <Radio key={uuidv4()} isCorrect={v === quiz.correct}>
                                <input 
                                    key={uuidv4()}
                                    type='radio' 
                                    className={`radio-group-${quiz.index}`} 
                                    value={decode(v)} 
                                    checked={v === selected}
                                    readOnly={choose}
                                />
                                <Label key={uuidv4()}>{decode(v)}</Label>
                            </Radio>
                        );
                    } else {
                        return (
                            <Radio key={uuidv4()} isCorrect={v === quiz.correct}>
                                <input 
                                    key={uuidv4()}
                                    type='radio' 
                                    className={`radio-group-${quiz.index}`} 
                                    value={decode(v)} 
                                    checked={v === selected}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => onRadioSelect(e.target.value)}
                                />
                                <Label key={uuidv4()} onClick={() => onRadioSelect(v)}>{decode(v)}</Label>
                            </Radio>
                        );
                    }
                })}
                </>
            );
        } else { // boolean
            return (
                <>
                
                </>
            );
        }
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
                        { renderRadios() }
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



