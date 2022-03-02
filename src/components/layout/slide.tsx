/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.div`
    font-family: inherit;
    position: fixed;
    height: 100vh;
    width: 100vw;    
    overflow: hidden;
    background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
    color:white;
`

export const Slide = styled.div`
    height: 100% !important;
    display: flex;
    flex-wrap: nowrap;
    transition: all .5s linear;
    transform: translateX(0);
`

export const Page = styled.div`
    flex: 0 0 auto;
    height: 100% !important;
    width: 100%;
    transition: 1s;
    left: 0%;
    opacity: 1;
    position: relative;
`