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

export const Footer = styled.div`
    z-index: 5;
    width: 100%;
    display: flex;
    justify-content: center;
`