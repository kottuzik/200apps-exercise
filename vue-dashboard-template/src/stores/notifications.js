import { defineStore } from 'pinia'
import Notifications from '../components/Notifications.vue'
import { layouts } from 'chart.js'

export const useNotificationsStore = defineStore('notifications', {
    state: () => ({
        notifications: [
            {
                id: 1,
                user: "Ellie",
                avatar: "https://randomuser.me/api/portraits/women/1.jpg",
                message: "Ellie joined team developers",
                date: "04 April, 2021",
                time: "04:00 PM"
            },
            {
                id: 2,
                user: "Jenny",
                avatar: "https://randomuser.me/api/portraits/women/2.jpg",
                message: "Jenny joined team HR",
                date: "04 April, 2021",
                time: "04:00 PM"
            },
            {
                id: 3,
                user: "Adam",
                avatar: "https://randomuser.me/api/portraits/men/3.jpg",
                message: "Adam got employee of the month",
                date: "03 April, 2021",
                time: "02:00 PM"
            },
            {
                id: 4,
                user: "Robert",
                avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                message: "Robert joined team design",
                date: "02 April, 2021",
                time: "02:00 PM"
            },
            {
                id: 5,
                user: "Jack",
                avatar: "https://randomuser.me/api/portraits/men/2.jpg",
                message: "Jack joined team design",
                date: "01 April, 2021",
                time: "03:00 PM"
            },
            {
                id: 6,
                user: "Julia",
                avatar: "https://randomuser.me/api/portraits/women/6.jpg",
                message: "Julia joined product team",
                date: "29 March, 2021",
                time: "01:00 PM"
            },
            {
                id: 7,
                user: "Vannesa",
                avatar: "https://randomuser.me/api/portraits/women/5.jpg",
                message: "Julia joined product team",
                date: "29 March, 2021",
                time: "01:00 PM"
            },
        ]
    }),
    getters: {
        latest: (state) => state.notifications.slice(0, 5)
        },
        actions: {
            addNotification(notification) {
                this.notifications.unshift(notification)
            }
        }
})