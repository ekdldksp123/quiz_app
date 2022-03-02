/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { leftPad, decode, uuidv4 } from "../../lib/common";
import { Quiz, QuizContent } from "../../types/quiz";

class OptionProps implements Quiz {
    quiz: QuizContent;
    choose:boolean;
    selected:string;
    onRadioSelect: (v:string) => void;
}

export const Options:React.FC<OptionProps> = ({ quiz, choose, selected, onRadioSelect }) => {
    if(quiz.options.length !== 2) { // multiple
        return (
            <>
            {quiz.options.map((v:string) => {
                if(choose) {
                    return (
                        <Radio key={uuidv4()} isCorrect={v === quiz.correct}>
                            <input 
                                key={uuidv4()}
                                type='radio' 
                                className={`radio-group-${quiz.index}`} 
                                value={decode(v)} 
                                checked={decode(v) === selected}
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
                                checked={decode(v) === selected}
                                onChange={(e:React.ChangeEvent<HTMLInputElement>) => onRadioSelect(decode(e.target.value))}
                            />
                            <Label key={uuidv4()} onClick={() => onRadioSelect(decode(v))}>{decode(v)}</Label>
                        </Radio>
                    );
                }
            })}
            </>
        );
    } else { // boolean
        return (
            <RadioBox>
                {quiz.options.map((v:string) => {
                    if(choose) {
                        return (
                            <InlinRadio key={uuidv4()} isCorrect={v === quiz.correct}>
                                <input 
                                    type='radio'
                                    key={uuidv4()}
                                    className={`radio-group-${quiz.index}`} 
                                    value={decode(v)} 
                                    checked={decode(v) === selected}
                                    readOnly={choose}
                                />
                                <Label key={uuidv4()}>{decode(v)}</Label>
                            </InlinRadio>
                        )
                    } else {
                        return (
                            <InlinRadio key={uuidv4()} isCorrect={v === quiz.correct}>
                                <input 
                                    type='radio'
                                    key={uuidv4()}
                                    className={`radio-group-${quiz.index}`} 
                                    value={decode(v)} 
                                    checked={decode(v) === selected}
                                    onChange={(e:React.ChangeEvent<HTMLInputElement>) => onRadioSelect(decode(e.target.value))}
                                />
                                <Label key={uuidv4()} onClick={() => onRadioSelect(decode(v))}>{decode(v)}</Label>
                            </InlinRadio>
                        )
                    }
                    
                })}
            </RadioBox>
        );
    }
}

const RadioBox = styled.div`
    position: absolute;
    top: 30vh;
    width: 90%;
    display: flex;
    justify-content: space-around;
    font-family: Ubuntu;
    font-size: 1.5rem;
    color: #c9c9c9;
`

const InlinRadio = styled.div`
    font-family: inherit;
    font-size: inherit;
    color: inherit;

    & input[type="radio"]:checked,
    & input[type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    & input[type="radio"]:checked + label,
    & input[type="radio"]:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
    }
    & input[type="radio"]:checked + label:before,
    & input[type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
    }
    & input[type="radio"]:checked + label:after,
    & input[type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: ${({isCorrect} : {isCorrect:boolean}) => isCorrect ? '#0DFF92' : '#FF7A7A'};
        filter: blur(0.3px);
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
    }
    & input[type="radio"]:checked + label {
        color: ${({isCorrect} : {isCorrect:boolean}) => isCorrect ? '#0DFF92' : '#FF7A7A'} !important;
        text-shadow: 0 0 2px ${({isCorrect} : {isCorrect:boolean}) => isCorrect ? '#fff' : '#ffc2c2'};
    }
    & input[type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    & input[type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`

const Radio = styled.p`
    font-family: Ubuntu;
    font-size: 1.5rem;
    color: #c9c9c9;

    & input[type="radio"]:checked,
    & input[type="radio"]:not(:checked) {
        position: absolute;
        left: -9999px;
    }
    & input[type="radio"]:checked + label,
    & input[type="radio"]:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
    }
    & input[type="radio"]:checked + label:before,
    & input[type="radio"]:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 100%;
        background: #fff;
    }
    & input[type="radio"]:checked + label:after,
    & input[type="radio"]:not(:checked) + label:after {
        content: '';
        width: 12px;
        height: 12px;
        background: ${({isCorrect} : {isCorrect:boolean}) => isCorrect ? '#0DFF92' : '#FF7A7A'};
        filter: blur(0.3px);
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
    }
    & input[type="radio"]:checked + label {
        color: ${({isCorrect} : {isCorrect:boolean}) => isCorrect ? '#0DFF92' : '#FF7A7A'} !important;
        text-shadow: 0 0 2px ${({isCorrect} : {isCorrect:boolean}) => isCorrect ? '#fff' : '#ffc2c2'};
    }
    & input[type="radio"]:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }
    & input[type="radio"]:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`

const Label = styled.label`
    -webkit-transition: all 0.25s linear;
    
    &:hover {
        color: white;
        opacity: 1;
    }
`

export const NoteOptions:React.FC<Quiz> = ({ quiz }) => {
    if(quiz.options.length !== 2) { // multiple
        return (
            <>
            {quiz.options.map((v:string) => {
                return (
                    <Radio key={uuidv4()} isCorrect={v === quiz.correct}>
                        <input 
                            key={uuidv4()}
                            type='radio' 
                            className={`radio-group-${quiz.index}`} 
                            value={decode(v)} 
                            checked={decode(v) === quiz.selected || v === quiz.correct }
                            readOnly={true}
                        />
                        <Label key={uuidv4()}>{decode(v)}</Label>
                    </Radio>
                );
            })}
            </>
        );
    } else { // boolean
        return (
            <RadioBox>
                {quiz.options.map((v:string) => {
                    return (
                        <InlinRadio key={uuidv4()} isCorrect={v === quiz.correct}>
                            <input 
                                type='radio'
                                key={uuidv4()}
                                className={`radio-group-${quiz.index}`} 
                                value={decode(v)} 
                                checked={decode(v) === quiz.selected || v === quiz.correct }
                                readOnly={true}
                            />
                            <Label key={uuidv4()}>{decode(v)}</Label>
                        </InlinRadio>
                    )
                })}
            </RadioBox>
        );
    }
}