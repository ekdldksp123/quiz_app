import styled from '@emotion/styled';

export const Form = styled.div`
    position: sticky; //이거야 내가 원하던 거><
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



