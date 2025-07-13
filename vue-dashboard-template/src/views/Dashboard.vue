<script setup>
    import DashboardSidebar from '../components/DashboardSidebar.vue';
    import Header from '../components/Header.vue';
    import CardTeamsStrength from '../components/CardTeamsStrength.vue';
    import CardStats from '../components/CardStats.vue';
</script>

<template>
    <div class="dashboard-main">
        <DashboardSidebar class="w-1/5 bg-gray-100 min-h-screen"/>
        <main class="main-container min-h-screen">
            <Header />
            <section class="inner-section">
                <CardTeamsStrength />
                <CardStats />
            </section>
        </main>
    </div>
</template>
<style lang="scss" scoped>
    .dashboard-main{
        display: flex; width: 100%;
    }
    .inner-section{
        display: flex; gap: 10px
    }
    .main-container{
        padding-inline: 2vw; padding-top: 1vw; width: 100%; 
    }
    .inner-section{
        margin-top: 2.2rem;
    }
</style>