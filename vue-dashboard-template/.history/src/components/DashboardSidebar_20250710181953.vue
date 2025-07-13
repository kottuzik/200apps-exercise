

<template>
  <aside class="p-4 bg-gray-100 min-h-screen">
    <ul class="space-y-4">
      <li><a href="#" class="text-blue-600 font-semibold">Dashboard</a></li>
      <li><a href="#">Teams</a></li>
      <li><a href="#">Employees</a></li>
      <li><a href="#">Projects</a></li>
    </ul>
  </aside>
</template>

<script setup>
    import Sidebar from 'primevue/sidebar';
    import Button from 'primevue/button';
    import { ref } from 'vue';

    const visible = ref(false)
</script>