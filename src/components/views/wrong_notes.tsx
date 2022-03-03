/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NoteProps } from "../../types/quiz";
import { Page } from "../layout/slide";
import { Form, Body, Head, No, Question, Content } from './solve_quizzes.styles';
import { leftPad, decode } from "../../lib/common";
import { NoteOptions } from "../layout/options";
import { Paging } from "../molecules/caption";
import { Footer } from "../layout/background";

const WrongNote:React.FC<NoteProps> = ({ quiz, index, amount }) => {

    return (
        <Page className="page">
            <Form css={responsive_form}>
                <Body>
                    <Head>
                        <No css={responsive_No}>{leftPad(quiz.index + 1)}</No>
                        <Question css={responsive_question}>{decode(quiz.question)}</Question>
                    </Head>
                    <Content>
                        <NoteOptions quiz={quiz}/>
                    </Content>
                </Body>
            </Form>
            <Footer>
                <Paging>{`${index + 1} / ${amount}`}</Paging>
            </Footer>
        </Page>
    )
}

export default WrongNote;

const responsive_form = css`
    @media (max-width: 1200px) {
        width: 65vw;
    }
`

const responsive_question = css`
    @media (max-width: 1200px) {
        font-size: 1.5rem;
    }
`

const responsive_No = css`
    @media (max-width: 1200px) {
        font-size: 3.5rem;
    }
`
