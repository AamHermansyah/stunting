'use client'

import React from 'react';
import { ApexOptions } from 'apexcharts';
import ReactApexChart from '@/components/core/ReactApexCharts';

const data = {
  labels: [
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022'
  ],
  series: [
    {
      name: 'Orang Terkena Stunting',
      data: [500, 670, 600, 300, 700, 190, 200, 100, 450, 700]
    },
    {
      name: 'Orang Tidak Terkena Stunting',
      data: [1000, 800, 700, 900, 1200, 800, 800, 700, 850, 900]
    },
  ]
};

const StuntingChart = () => {
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      stacked: true,
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: 30,
        borderRadiusWhenStacked: 'last',
        borderRadius: 15,
        borderRadiusApplication: 'end'
      }
    },
    stroke: {
      width: 2
    },
    colors: ['#52b4b7', '#eeeeee'], // Warna abu dan hijau
    legend: { show: true },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: data.labels,
      tickPlacement: 'on',
      labels: {
        show: true
      },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 250
          },
          xaxis: {
            labels: { show: false }
          }
        }
      },
      {
        breakpoint: 550,
        options: {
          plotOptions: {
            bar: {
              columnWidth: 15,
              borderRadius: 5
            }
          },
        }
      }
    ]
  };

  return (
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold sm:mb-10">
        Grafik Perkembangan Stunting Di Tasikmalaya
      </h1>
      <ReactApexChart
        type="bar"
        height={400}
        width="100%"
        options={options}
        series={data.series}
      />
    </div>
  );
};

export default StuntingChart;
