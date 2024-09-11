import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const ProductChart = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      height: 350,
      type: 'line',
    },
    stroke: {
      width: [0, 5],
    },
    title: {
      text: 'Sản lượng theo giờ',
    },
    plotOptions: {
      bar: {
        columnWidth: '60%',  // Điều chỉnh độ rộng của cột (giá trị nhỏ hơn làm cột hẹp lại)
        borderRadius: 5,     // Thêm bo tròn góc cho cột
        // colors: {
        //   ranges: [{
        //     from: 0,
        //     to: 500,
        //     color: '#999', // Màu cho các cột có giá trị từ 0 đến 500
        //   }, {
        //     from: 501,
        //     to: 1000,
        //     color: '#ff4560', // Màu cho các cột có giá trị từ 501 đến 1000
        //   }],
        // },
      },
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0,1], // Kích hoạt nhãn trên series thứ hai (đường)
      style: {
        colors: ['#fff'],    // Màu chữ của label
      },
      background: {
        enabled: true,       // Kích hoạt background cho nhãn
        foreColor: '#000',   // Màu chữ bên trong background
        padding: 4,          // Đệm cho background của nhãn
        borderRadius: 4,     // Bo tròn cho background của nhãn
        borderWidth: 1,      // Độ dày của viền background
        borderColor: '#000', // Màu viền của background
        opacity: 0.8,        // Độ trong suốt của background
      },
    },
    labels: ["8H - 9H", "9H - 10H","10H - 11H", "11H - 12H","12H - 13H", "13H - 14H"],
  });
  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Sản lượng',
      type: 'column',
      data: [30, 40, 35, 50, 49, 60],
    },{
      name: 'Social Media',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22]
    }
  ]);
  return (
    <div className='w-full'>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="320px"
      />
    </div>
  );
};

export default ProductChart;
