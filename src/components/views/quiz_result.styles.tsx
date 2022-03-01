/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from '@emotion/styled';
import { Doughnut } from "react-chartjs-2";
import { before } from "../../lib/chart";

export const renderChart = (category:string, level:string, right:number, wrong:number) => {
    const data = {
        labels: ['Correct', 'Wrong'],
        datasets: [{
            label: `Category - ${category} | Level - ${level}`,
            data: [right, wrong],
            backgroundColor: ['rgb(54, 162, 235)','rgb(255, 99, 132)'],
            hoverOffset: 4
        }]
    }

    const options:any = {
        plugins: {
            title: {
                display: true,
                text: `Category - ${category} | Level - ${level}`
            },
            datalabels: {
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                borderColor: 'white',
                borderRadius: 25,
                borderWidth: 2,
                color: 'white',
                display: (context) => {
                    const dataset = context.dataset;
                    const count = dataset.data.length;
                    const value = dataset.data[context.dataIndex];
                    return value > count * 1.5;
                },
                font: {
                    weight: 'bold',
                    size: '18',
                },
                offset: 2,
                padding: 10,
                formatter: Math.round
            },
            // counter: {
            //     fontColor: '',
            //     fontSize: '32px',
            //     text: '$' + sum.toString(),
            //     font: '',
            // },
        },
        responsive: true, // Instruct chart js to respond nicely.
        maintainAspectRatio: true, // Add to prevent default behaviour of full-width/height 
    }

    return <Doughnut data={data} options={options} width={400} height={400}/>
}
