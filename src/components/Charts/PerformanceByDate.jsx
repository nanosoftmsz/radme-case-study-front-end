import Chart from 'react-apexcharts';

const PerfonmanceByDate = () => {
  const options = {
    chart: {
      id: 'basic-bar',
    },
    stroke: {
      curve: 'smooth',
    },
    colors: ['#04A405'],
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  };

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  return <Chart options={options} series={series} type='line' />;
};

export default PerfonmanceByDate;
