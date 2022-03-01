/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

export const Page = styled.div`
    flex: 0 0 auto;
    height: 100% !important;
    width: 100%;
    transition: 1s;
    left: 0%;
    opacity: 1;
    position: relative;
`

export const Form = styled.div`
    position: sticky; //이거야 내가 원하던 거><
    border: 10px solid white;
    width: 40vw;
    height: 70vh;
    margin: 0 auto;
    opacity: 0.75;
    top: 15vh !important; 
`

export const Body = styled.div`
    position: absolute;
    padding: 2em 2em 2em 2em;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100% !important;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Head = styled.div`
    display: flex;
    flex-direction: row;
`

export const No = styled.div`
    width: 20%;
    text-align: center;
    font-family: Helvetica Neue;
    color: #fff;
    font-size: 3.8rem;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const Question = styled.div`
    text-align: center;
    font-family: Roboto;
    color: #fff;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 30px;
`

export const Content = styled.div`
    flex-bias: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Radio = styled.p`
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

export const Label = styled.label`
    -webkit-transition: all 0.25s linear;
    
    &:hover {
        color: white;
        opacity: 1;
    }
`