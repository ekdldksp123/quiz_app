/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

export const Modal = styled.div`
    position: relative;
    margin: 0 auto;
    width: 30vw;
    height: 55vh;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    transition: .8s;
    &:hover {
        transform: scale(1.01);
    }
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Board = styled.div`
    position: relative;
    margin: 0 auto;
    padding-top: 20px;
    width: 50vw;
    height: 80vh;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    transition: .8s;
    &:hover {
        transform: scale(1.01);
    }
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ModalBody = styled.div`
    position: absolute;
    padding: 2em 2em 2em 2em;
    top: 0;
    left: 0;
    right: 0;
    height: 80%;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const ModalFooter = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`