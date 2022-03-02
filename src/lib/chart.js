import { decode } from "./common";

export const renderChart = (category, level, right, wrong) => {
    const xValues = ['Correct', 'Wrong'];
    const yValues = [right, wrong];
    const bgColors = ['rgb(54, 162, 235)','rgb(255, 99, 132)'];

    var myChart = new Chart("myChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
              backgroundColor: bgColors,
              data: yValues
            }]
          },
          options: {
            title: {
              display: true,
              text: `[Category] ${decode(category)} | [Level] ${decode(level).toUpperCase()}`
            }
          }
    })

}