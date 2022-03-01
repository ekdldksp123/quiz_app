/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { leftPad, decode, uuidv4 } from "../../lib/common";
import { Quiz } from "../../types/quiz";
import { Page, Form, Body, Head, No, Question, Content, Radio, Label, } from './solve_quizzes.styles';

const QuizMain: React.FC<Quiz> = ({ quiz }) => {
    
    const [selected, setSelected] = useState<string>('');
    const [choose, setChoose] = useState<boolean>(false);

    useEffect(() => {
        if(choose) {
            const radios = document.querySelectorAll(`.radio-group-${quiz.index}`);
            radios.forEach(e => e.ariaReadOnly = "true");
        }
    }, [choose]);

    const renderNextBtn = () => {
        if(!choose) return <></>
        else return <button>NEXT</button>
    }

    const onRadioSelect = (value:string) => {
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
        <Page>
            <Form>
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








