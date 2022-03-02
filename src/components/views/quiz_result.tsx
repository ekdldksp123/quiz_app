/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import { Wrapper, Container } from '../layout/background';
import { Board } from "../layout/modal";
import { Title, Label } from "../molecules/caption";
import { ChartArea, Timer } from './quiz_result.styles';
import { ChartProps } from "../../types/quiz";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js'
import { renderChart } from '../../lib/chart';
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

const ChartAndTime:React.FC<ChartProps> = ({ time, render, category, level, right, wrong }) => {

    useEffect(() => {
        if(render) renderChart(category, level, right, wrong);
    },[render]);

    return (
        <Wrapper>
            <Container>
                <Board>
                    <Title>Quiz Result</Title>
                    <Timer>{time}</Timer>
                    <ChartArea>
                        <canvas id="myChart" css={chart}/>
                    </ChartArea>
                </Board>
            </Container>
        </Wrapper>
    )    
}

export default ChartAndTime;

const chart = css`
    width: 620px;
    height: auto;

    @media (max-width: 1200px) {
        width: 400px;
        height: auto;
    }
`

