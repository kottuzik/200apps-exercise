<template>
    <section class="section-stats">
        <div class="card card-pink">
            <p class="title">Top 10</p>
            <p class="main-text">Position in dribbble</p>
            <p class="small-text">20% Increase from Last Week</p>
        </div>
        <div class="card card-violet">
            <p class="title">26</p>
            <p class="main-text">New employees onboarded</p>
            <p class="small-text">15% Increase from Last Month</p>
        </div>
        <div class="card card-blue">
            <p class="title">500</p>
            <p class="main-text">New Clients Approached</p>
            <p class="small-text">5% Increase from Last Week</p>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .section-stats{
        display: flex; flex-direction: column; gap: 10px; width: 100%;
        .card{
            border-radius: 10px; text-align: center; width: 100%; padding-block: 14px; 
            &-pink{
                background-color: #FFF0E6;
            }
            &-violet{
                background-color: #ECEAFE;
            }
            &-blue{
                background-color: #E5F7FF;
            }
            *{line-height: 1;}
            .title{
                font-size: 1.375rem; //22px
                font-weight: 700;
            }
            .main-text{
                font-size: 0.875rem; //14
                 font-weight: 500; line-height: 3;
            }
            .small-text{
                color: #787486; font-size: 0.75rem; //12px
            }
        }
    }
</style>