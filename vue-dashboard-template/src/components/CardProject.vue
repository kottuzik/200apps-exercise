<template>
    <div class="project-wrapper">
        <div class="chart-header">
            <h2 class="project-title">Project Deliveries</h2>
            <div class="custom-legend">
                <p>
                    <span class="legend-dot" style="background:#FF7A7A"></span> 
                    Achieved
                </p>
                <p>
                    <span class="legend-dot" style="background:#6C63FF"></span> 
                    Target
                </p>
            </div>
        </div>
      <Chart type="line" :data="chartData" :options="chartOptions" class="project-line-chart"/>
    </div>
  </template>]

<script setup>
import Chart from 'primevue/chart';

const chartData = {
  labels: ['Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022'],
  datasets: [
    {
      label: 'Achieved',
      data: [6, 7, 6, 7, 6, 7],
      borderColor: '#FF7A7A',
      backgroundColor: 'rgba(255,122,122,0.08)',
      tension: 0.4,
      pointBackgroundColor: '#FF7A7A',
      pointBorderColor: '#fff',
      pointRadius: 0,
      pointHoverRadius: 8,
      borderWidth: 3,
      fill: false,
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      shadowBlur: 12,
      shadowColor: 'rgba(255,122,122,0.25)'
    },
    {
      label: 'Target',
      data: [4, 6, 5, 5, 7, 5],
      borderColor: '#6C63FF',
      backgroundColor: 'rgba(108,99,255,0.08)',
      tension: 0.4,
      pointBackgroundColor: '#6C63FF',
      pointBorderColor: '#fff',
      pointRadius: 0,
      pointHoverRadius: 8,
      borderWidth: 3,
      fill: false,
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      shadowBlur: 12,
      shadowColor: 'rgba(108,99,255,0.25)'
    }
  ]
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      labels: {
        usePointStyle: true,
        font: { size: 16 }
      }
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
      position: 'nearest',
      yAlign: 'top',
      //usePointStyle: true,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y} Projects`;
        }
      },
      backgroundColor: '#fff',
      titleColor: '#222',
      bodyColor: '#222',
      borderColor: '#eee',
      borderWidth: 1,
      padding: 16,
      displayColors: true
    },
    datalabels: { display: false }
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: '#888', font: { size: 14 } }
    },
    y: {
      grid: { colo: '#f0f0f0', drawBorder: false },
      beginAtZero: true, max: 12,
      ticks: { color: '#888', font: { size: 14 }, stepSize: 2 }
    }
  },
  elements: {
    line: {
      borderJoinStyle: 'round'
    }
  }
};
</script>

<style lang="scss" scoped>
    .project-wrapper{
        width: 100%; height: 427px; margin-top: 2rem; box-shadow: 0px 4px 39px 9px #51459F17;
        border-radius: 10px; padding: 1.5rem;
    }
    .project-line-chart{
        width: 100%; height: 320px;

    }
    .project-title{
        font-size: 1.125rem; font-weight: 700; line-height: 2; margin-bottom: 1rem;
    }
    .chart-header {
        display: flex; justify-content: space-between; align-items: baseline;
    }
    .custom-legend {
        display: flex; gap: 24px; align-items: center;
    }
    .legend-dot {
        display: inline-block; width: 14px; height: 14px;
        border-radius: 50%; margin-inline-end: 2px;
    }
    .chartjs-tooltip {
        box-shadow: 0 4px 24px 0 rgba(44, 62, 80, 0.12);
        border-radius: 10px; border: 1px solid #eee;
    }
    
</style>