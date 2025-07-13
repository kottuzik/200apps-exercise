<template>
    <header class="dashboard-header">
        <div class="header-start">
            <h1 class="header-title">Good Morning Anima</h1>
            <h2 class="header-subtitle">Hope you have a nice day</h2>
        </div>
        <div class="header-end">
            <i class="pi pi-search"></i>
            <i class="pi pi-bell"></i>
            <div class="avatar-wrap">
                <img src="../assets/images/avatar.webp" alt="avatar" class="avatar-image">
                <img src="../assets/images/arrow-drop-down-line.svg" alt="arrow down" class="arrow">
            </div>
        </div>
    </header>
</template>

<script>

</script>
<style lang="scss" scoped>
    .dashboard-header{
        display: flex; justify-content: space-between; align-items: baseline;
        background-color: #fff; width: 100%;
        padding-top: 1.25vw;
    }
    .header-title{
        font-size: 1.354vw; font-weight: 700; color: #23262F
    }
    .header-subtitle{
        font-size: 16px; color: #828282; font-weight: 600; margin-top: 0.3vw
    }
    .header-end{
      display: flex; gap: 1.8vw; align-items: center;
      .pi{width: 24px; height: 24PX;;}
    }
    .avatar-wrap{
        display: flex; align-items: center; gap: 0.65vw;
        .arrow{width: 3vw;}
    }
</style>