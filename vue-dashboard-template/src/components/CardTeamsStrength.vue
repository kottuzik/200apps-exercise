<template>
    <div class="common-border card-wrapper">
        <h2 class="common-title">
            Teams Strength
        </h2>
        <Chart type="bar" :data="chartData" :options="chartOptions" />
        <div class="legend">
            <div class="legend-item"><span class="legend-color" style="background:#FFD59A">a</span> Marketing</div>
            <div class="legend-item"><span class="legend-color" style="background:#FF9C9C">b</span> HR</div>
            <div class="legend-item"><span class="legend-color" style="background:#7DE2FF">c</span> Developers</div>
            <div class="legend-item"><span class="legend-color" style="background:#8B7CFF">d</span> Design</div>
        </div>
    </div>
</template>
<script setup>
    import Chart from 'primevue/chart';
    import ChartDataLabels from 'chartjs-plugin-datalabels';
    import { Chart as ChartJS } from 'chart.js';

    ChartJS.register(ChartDataLabels);

    const chartData = {
        labels: ['a', 'b', 'c', 'd'],
        datasets: [
            {
                data: [1, 5, 3, 10],
                backgroundColor: ['#FABE7A', '#F6866A', '#59E6F6', '#7661E2'],
                borderRadius: 8,
                barPercentage: 0.6
            }
        ]
    };

    const chartOptions = {
        plugins: {
            legend: { display: false },
            datalabels: {
            anchor: 'end',
            align: 'start',
            offset: -22,
            zIndex: 1,
            color: '#222',
            font: {
                weight: 'bold',
                size: 16
            }
            }
        },
        scales: {
            x: { grid: { display: false } },
            y: { grid: { display: false }, beginAtZero: true, ticks: { stepSize: 1 }, max: 12 }
  }
}
</script>
<style lang="scss" scoped>
.legend {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 12px 24px; margin-top: 16px; max-width: 45%;
}
.legend-item {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.legend-color {
  display: inline-block; text-align: center; color: #fff; padding-top: 4.5px;
  width: 26px; height: 26px; border-radius: 6px; font-size: 12px;
  margin-inline-end: 8px;
}
</style>
