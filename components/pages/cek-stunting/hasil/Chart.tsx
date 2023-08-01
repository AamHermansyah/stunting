'use client';

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
      name: 'Balita Obesitas',
      data: [500, 670, 600, 300, 700, 190, 200, 100, 450, 700]
    }
  ]
};

const Chart = () => {
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    stroke: {
      width: 2,
      curve: 'smooth',
    },
    colors: ['#F05252'],
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
    <div>
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold sm:mb-10">
        Jumlah Balita Obesitas Yang Tercatat Di Website Ini
      </h1>
      <ReactApexChart
        type="line"
        height={300}
        options={options}
        series={data.series}
      />
    </div>
  );
};

export default Chart;
