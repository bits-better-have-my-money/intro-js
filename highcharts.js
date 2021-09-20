document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("container", {
    chart: {
      type: "bar"
    },
    title: {
      text: "Fruit Eatin'"
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Cherries", "Pineapples"]
    },
    yAxis: {
      title: {
        text: "Fruit consumed"
      }
    },
    series: [
      {
        name: "Susan",
        data: [1, 10, 4, 1]
      },
      {
        name: "John",
        data: [5, 7, 3, 2]
      },
      {
        name: "Cheddar",
        data: [0, 0, 5, 7]
      }
    ]
  });
});