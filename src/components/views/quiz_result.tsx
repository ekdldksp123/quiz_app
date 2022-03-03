/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { Wrapper, Container } from '../layout/background';
import { Board, ModalFooter } from "../layout/modal";
import { Title } from "../molecules/caption";
import { ChartArea, Timer } from './quiz_result.styles';
import { ChartProps } from "../../types/quiz";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js'
import { NoteBtn, BackBtn, BtnArea3 } from "../molecules/button";
import { renderChart, setChartData } from "../../lib/chart";
import { useScript } from "../../lib/hook/useScript";
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

const ChartAndTime:React.FC<ChartProps> = ({ time, category, level, right, wrong }) => {
    
    const status = useScript('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js');

    const initChart = () => {
        const config = setChartData(category, level, right, wrong);
        renderChart(config);
    }

    useEffect(() => {
        if (status === "ready") initChart();
    }, [status]);

    return (
        <Wrapper>
            <Container>
                <Board css={responsive_board}>
                    <Title>Quiz Result</Title>
                    <Timer>{time}</Timer>
                    <ChartArea>
                        <canvas id="myChart" css={chart}/>
                    </ChartArea>
                    <ModalFooter>
                        <BtnArea3>
                            <BackBtn/>
                            <NoteBtn/>
                        </BtnArea3>
                    </ModalFooter>
                </Board>
            </Container>
        </Wrapper> 
    );
}

export default ChartAndTime;

const chart = css`
    width: 100%;
    height: auto;
`
const responsive_board = css`
    @media (max-width: 1200px) {
        width: 70vw;
        height: 65vh;
    }

    @media (max-width: 800px) {
        width: 80vw;
        height: 60vh;
    }
`
