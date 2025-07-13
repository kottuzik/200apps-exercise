

<template>
  <aside class="p-4 bg-gray-100 min-h-screen">
    <ul class="space-y-4">
      <li><a href="#" class="text-blue-600 font-semibold">Dashboard</a></li>
      <li><a href="#">Teams</a></li>
      <li><a href="#">Employees</a></li>
      <li><a href="#">Projects</a></li>
    </ul>
    <Sidebar  v.visible="visibleLeft" position="left" @hide="visibleLeft = false">
        <h3>Right Sidebar</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
  </aside>
</template>

<script setup>
    import Sidebar from 'primevue/sidebar';
    import { ref } from 'vue';

    const visible = ref(false)

    export default {
        components: {
            Sidebar
        },
        data(){
            return{
                vis
            }
        }
    }
</script>