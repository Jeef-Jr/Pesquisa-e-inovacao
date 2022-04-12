const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [30, 29, 28, 25, 22, 23],
    },
    {
      label: "Temperatura",
      backgroundColor: "#8ecae6",
      borderColor: "#8ecae6",
      data: [80, 82, 80, 85, 80, 83],
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};

const myChart = new Chart(document.getElementById("myChart"), config);

const labels2 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];

const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Temperatura",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [22, 24, 27, 23, 20, 18],
    },
    {
      label: "Temperatura",
      backgroundColor: "#8ecae6",
      borderColor: "#8ecae6",
      data: [90, 89, 93, 87, 88, 82],
    },
  ],
};

const config2 = {
  type: "bar",
  data: data2,
  options: {},
};

const myChart2 = new Chart(document.getElementById("myChart2"), config2);
