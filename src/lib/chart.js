import { decode } from "./common";

var chart;

export const setChartData = (category, level, right, wrong) => {

  const xValues = ['Correct', 'Wrong'];
  const yValues = [right, wrong];
  const bgColors = ['rgb(54, 162, 235)','rgb(255, 99, 132)'];

  const config = {
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
        text: `[ Category ] ${decode(category)} | [ Level ] ${decode(level).toUpperCase()}`
      }
    }
  };

  return config;
};

export const renderChart = (config) => {
    if(chart) chart.destroy();

    var ctx = document.getElementById("myChart").getContext("2d");
    chart = new Chart(ctx, config);

    return chart;
};

