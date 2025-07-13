

<template>
  <aside class="aside">  
    <div class="menu-setting">
      <img src="../assets/images/setting.svg" alt="icon-setting" class="icon-setting">
      <p class="text">Teamify</p>
    </div>  
    <Menu :model="items" >
      <template #item="{ item, props }"></template>
    </Menu>
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
          icon: 'pi pi-th-large custom-icon',
          to: '/',
          textClass: 'text'
        }
      ]
    }
  }
}
</script>