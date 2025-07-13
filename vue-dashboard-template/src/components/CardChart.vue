<template>
    <div class="common-border card-wrapper">
      <div class="stats-header">
        <h2 class="common-title">Employees</h2>
        <span class="stats-date">Aug 25-Sept 25 <span class="arrow">▼</span></span>
      </div>
      <div class="stats-content">
        <div class="stats-info">
          <div class="stats-row inactive"><span class="dot dot-inactive"></span>Inactive</div>
          <div class="stats-value">254</div>
          <div class="stats-row active"><span class="dot dot-active"></span>Active</div>
          <div class="stats-value">3000</div>
          <div class="stats-row total"><span class="dot dot-total"></span>Total</div>
          <div class="stats-value">3254</div>
        </div>
        <div class="stats-chart-wrapper">
          <Chart type="doughnut" :data="chartData" :options="chartOptions" class="stats-chart" />
          <img class="stats-avatar" src="../assets/images/user-icon.svg" alt="avatar" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Chart from 'primevue/chart';
  import { Chart as ChartJS } from 'chart.js';
  
  const chartData = {
    labels: ['Total', 'Active', 'Inactive'],
    datasets: [
    {
        data: [0, 0, 3254],
        backgroundColor: ['transparent', 'transparent', '#FFD59A'],//orange
        borderWidth: 10,
        cutout: '45%',
        circumference: 220,
        rotation: 200
      },
      {
        data: [0, 3000, 0],
        backgroundColor: ['transparent', '#FF8A7A', 'transparent'], //red
        borderWidth: 8,
        cutout: '60%',
        circumference: 210,
        rotation: 380
      },
      {
        data: [254, 0, 0],
        backgroundColor: ['#6C63FF', 'transparent', 'transparent'], //blue
        borderWidth: 6,
        cutout: '70%',
        circumference: 280,
        rotation: 180
      },
      
    ]
  };
  
  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: { display: false }
    },
    cutout: '40%',
    responsive: true,
    maintainAspectRatio: false
  };
  </script>
  
  <style scoped>
  
  .stats-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .stats-date {
    color: #888;
    font-size: 15px;
  }
  .arrow {
    font-size: 12px;
  }
  .stats-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .stats-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 80px;
  }
  .stats-row {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: #888;
    gap: 8px;
  }
  .stats-row.inactive .dot { background: #6C63FF; }
  .stats-row.active .dot { background: #FF8A7A; }
  .stats-row.total .dot { background: #FFD59A; }
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .stats-value {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
    margin-left: 18px;
  }
  .stats-chart-wrapper {
    position: relative;
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .stats-chart {
    width: 180px;
    height: 180px;
  }
  .stats-avatar {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    transform: translate(-50%, -50%);
    border: 4px solid #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  }
  </style>
  