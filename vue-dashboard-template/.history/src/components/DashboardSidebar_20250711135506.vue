

<template>
  <aside class="p-4 bg-gray-100 min-h-screen">
    <Sidebar <!-- v-model:visible="visibleLeft" position="left" @hide="visibleLeft = false" -->>
        <h3>Right Sidebar</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
    <Menu :model="items" />
  </aside>
</template>


<script>
/*  import { ref } from 'vue';

    const visible = ref(false) */

import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import Menu from 'primevue/menu';

export default {
  components: {
    Button,
    Sidebar,
    Menu
  },
  data() {
    return {
      visibleLeft: true,
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          to: '/'
        }
      ]
    }
  }
}
</script>