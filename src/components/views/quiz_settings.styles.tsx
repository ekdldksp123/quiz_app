/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

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
    margin-top: 3px !important;
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

export const SelectBox = styled.div`
    border-radius: 8px;
    border: 2px solid rgba(255, 74, 86, 0.7);
    padding-right: 8px;
    width: 60% !important;
    height: 50px;
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
        font-size: 1.25rem;
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