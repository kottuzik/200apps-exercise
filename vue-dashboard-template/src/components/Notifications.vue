<template>
    <section class="notification-container">
        <div class="top">
            <p class="title">Notificantions</p>
            <a href="#" @click.prevent="viewAll = true" class="button-view-all">View All</a>
        </div>
        <ul>
            <li v-for="n in notificationsToShow" :key="n.id" class="notification">
                <img :src="n.avatar" alt="avatar" class="avatar" />
                <div>
                    <p class="text">{{  n.message }}</p>
                    <div class="date"> {{ n.date }} | {{ n.time }}</div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useNotificationsStore } from '../stores/notifications'

    const store = useNotificationsStore()
    const viewAll = ref(false)

    const notifications = computed(() => store.notifications)
    const notificationsToShow = computed(() =>
        viewAll.value ? store.notifications : store.latest
    )
</script>

<style lang="scss" scoped>
 .top{
    display: flex; justify-content: space-between; align-items: baseline; width: 100%;
    padding-block: 1.5rem; padding-inline-start: 1rem;
    .title{
        font-size: 1.125rem; font-weight: bold;
    }
    .button-view-all{
        font-size: 0.875rem; font-weight: 600; color: #6956E5;
    }
}
.notification{
    display: flex; gap: 0.875rem; align-items: center; padding: 14px 11px;
    background-color: #F9F9F9; border-radius: 10px;
    &:not(:last-child){margin-bottom: 1rem;}
    .avatar{
        width: 36px; height: 36px; border-radius: 4px;
    }
    .text{
        font-size: 0.75rem; color: #23262F; font-weight: 500;
    }
    .date{
        font-size: 0.75rem; color: #708099;
    }
}

</style>