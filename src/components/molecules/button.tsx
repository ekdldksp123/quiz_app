/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

export const BtnArea = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    bottom: 0;
    margin-bottom: 40px;
`

export const BtnPrimary = styled.button `
    position: absolute;
    width: 50%;
    border: none;
    padding: 1em;
    outline: none;
    color: white;
    text-transform: uppercase;
    font-weight: 900;
    font-style: 1.2em;
    letter-spacing: 0.2em;
    position: relative;
    z-index: 1;
    cursor: pointer;
    background: none;
    text-shadow: 3px 3px 10px rgba(0,0,0,.45);
    
    &:before, &:after {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 10em;
        transform: translateX(-50%) translateY(-50%);
        width: 105%;
        height: 105%;
        content: '';
        z-index: -2;
        background-size: 400% 400%;
        background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
    }
    &:before {
        filter: blur(7px);
        transition: all .25s ease;
        animation: pulse 10s infinite ease;
    }
    &:after {
        filter: blur(0.3px);
    }
    &:hover {
        &:before {
        width: 115%;
        height: 115%;
        }
    }
`