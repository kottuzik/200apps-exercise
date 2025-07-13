<script setup>
    import DashboardSidebar from '../components/DashboardSidebar.vue';
    import Header from '../components/Header.vue';
    import CardTeamsStrength from '../components/CardTeamsStrength.vue';
    import CardChart from '../components/CardChart.vue';
    import CardStats from '../components/CardStats.vue';
    import CardProject from '../components/CardProject.vue';
    import Notifications from '../components/Notifications.vue';
</script>

<template>
    <div class="dashboard-main">
        <DashboardSidebar class="w-1/5 bg-gray-100 min-h-screen"/>
        <main class="main-container min-h-screen">
            <Header />
            <section class="inner-section">
                <CardTeamsStrength />
                <CardChart />
                <CardStats />
            </section>
            <section class="second-section">
                <CardProject />
                <Notifications />
            </section>            
        </main>
    </div>
</template>
<style lang="scss" scoped>
    .dashboard-main{
        display: flex; width: 100%;
    }
    .main-container{
        padding-inline: 2vw; padding-top: 1vw; width: 100%; overflow: auto; padding-bottom: 2vw; height: 100vh;
    }
    .inner-section{
        display: grid; gap: 1.5rem; grid-template-columns: repeat(3, 1fr); margin-top: 2.2rem;
    }    
    .second-section{
        display: grid; gap: 1.5rem; grid-template-columns: 2fr 1fr;
    }    
</style>