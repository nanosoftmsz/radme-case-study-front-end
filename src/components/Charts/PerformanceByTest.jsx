import Chart from 'react-apexcharts';

const PerfonmanceByTest = () => {
  const options = {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#AC1CF4', '#FC7C1C'],
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: ['124', '45', '78', '123', '14', '15', '16', '17', '18', '19', '20', '21'],
      title: {
        text: 'Test IDs',
      },
    },
    yaxis: {
      title: {
        text: 'Test Score',
      },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val;
            },
          },
        },
      ],
    },
    grid: {
      borderColor: '#f1f1f1',
    },
  };

  const series = [
    {
      name: 'Your Score',
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Other's Average Score",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
  ];

  return <Chart options={options} series={series} type='line' />;
};

export default PerfonmanceByTest;
