/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

export const floating = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%} 
    100%{background-position:0% 50%} 
`;

export const Wrapper  = styled.div`
    background-size: 800% 800%;
    -webkit-animation: ${floating} 16s ease infinite;
    -moz-animation: ${floating} 16s ease infinite;
    -o-animation: ${floating} 16s ease infinite;
    animation: ${floating} 16s ease infinite;
`;

export const Container = styled.div`
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    color: #fff;
    background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    background-size: 400% 400%;
    opacity: 0.7;
    animation: ${floating} 12s ease infinite !important;
`;


export const Title = styled.div`
    width: 100%;
    display: inline-block;
    text-align: center;
    font-family: Helvetica Neue;
    -webkit-text-stroke: 2px rgba(255, 74, 86, 1.0);
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const Counter = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 8px;
`

export const Input = styled.input`
    width: 60%;
    margin-top: 8px;
    text-align: center;
    font-size: 1.625rem;
    border-radius:8px;
    border: 0 none;
    outline: 0 none;
`;

export const Sign = styled.span`
    cursor:pointer; 
    background:#fff;
    border-radius: 6px;
    top: 12.5px;
    text-align: center;
    color: rgba(255, 74, 86, 0.7);
    font-weight: bold;
    font-size: 1.5em;

    & .minus {
        align-self: flex-start !important;
    }
    & .plus {
        align-self: flex-end !important;
    }
`

export const SelectGroup = styled.div`
    width: 100%;    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    font-family: Segoe UI;
`

export const Label = styled.label`
    position: relative;
    top: 20%;
    font-weight: bold;
    font-size: 1.35rem;
    color: rgba(255,74,86, 1.0);
`

export const SelectBox = styled.div`
    border-radius: 8px;
    border: 2px solid rgba(255, 74, 86, 0.7);
    padding-right: 8px;
    width: 60% !important;
    height: 50px;
    font-size: 1.3rem;
`

export const Select = styled.select`
    width: 100%;
    height: inherit;
    background: transparent;
    border: 0 none;
    outline: 0 none;
    padding-left: 10px;
    z-index: 3; 
    font-size: 1.3rem;

    & option {
        padding: 5px 5px 5px 5px;
        font-size: 1.3em;
        background: rgba(255, 74, 86, 0.7);
        color: #fff;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }
     
    &::-webkit-scrollbar-track {
        background-color: rgba(255, 74, 86, 0.7);
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 10px;
        border-radius: 10px;
        background: #fff; 
    }
`