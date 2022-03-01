/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { useEffect, useState } from "react";
import { Wrapper, Container } from '../layout/background';
import { Board } from "../layout/modal";
import { ChartProps } from "../../types/quiz";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, ArcElement } from 'chart.js'
import { renderChart } from "./quiz_result.styles";
Chart.register(ArcElement);
Chart.register(ChartDataLabels);

const ChartAndTime:React.FC<ChartProps> = ({ category, level, total, right, wrong }) => {

    
    return (
        <Wrapper>
            <Container>
                <Board>
                    <ChartArea>
                        { renderChart(category, level, right, wrong) }
                    </ChartArea>
                </Board>
            </Container>
        </Wrapper>
    )    
}

export default ChartAndTime;

const ChartArea = styled.div`
    padding: 40px;
    flex-bias: 50% important;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

