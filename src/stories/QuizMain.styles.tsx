/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';

export const Form = styled.div`
    position: sticky;
    border: 10px solid white;
    width: 30vw;
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
    flex-bias: 70% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-y: auto !important;
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

const Next = styled.div`
    margin-bottom: 25px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const slide = keyframes`
    0% { opacity:0; transform: translateX(-15px); }	
    20% { opacity:1; transform: translateX(-9px); }	
    80% { opacity:1; transform: translateX(9px); }	
    100% { opacity:0; transform: translateX(15px); }	
}`

const Sliding = styled.div`
    position: absolute;
    animation: ${slide} 2.0s linear infinite;
`

const Arrow = styled.div`
    width: 25px;
    height: 25px;
    border: 3px solid;
    border-color: #D3FF00 transparent transparent #D3FF00;
    transform: rotate(135deg);
`
export interface NextBtnProps {
    id: string,
}
export const NextBtn:React.FC<NextBtnProps> = ({ id }) => {
    return (
        <Next id={id}>
            <Sliding>
                <Arrow/>
            </Sliding>
            <Sliding css={css`-webkit-animation-delay:0.6666s; animation-delay: 0.6666s;`}>
                <Arrow/>
            </Sliding>
            <Sliding css={css`-webkit-animation-delay:1.3333s; animation-delay: 1.3333s;`}>
                <Arrow/>
            </Sliding>
        </Next>
    );
}

export const BtnArea = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    bottom: 0;
    margin-bottom: 25px;
`