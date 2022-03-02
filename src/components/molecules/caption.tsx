/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

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
`

export const Label = styled.label`
    position: relative;
    top: 20%;
    font-weight: bold;
    font-size: 1.35rem;
    color: rgba(255,74,86, 1.0);
`

export const Paging = styled.label`
    z-index: 5;
    position: absolute;
    bottom: 0;
    padding: 40px !important;
    font-size: 1.35rem;
    color: #fff;
`

