

<template>
  <aside class="aside">  
    <div class="menu-setting">
      <img src="../assets/images/setting.svg" alt="icon-setting" class="icon-setting">
      <p>Teamify</p>
    </div>  
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
          icon: 'pi pi-home custom-icon',
          to: '/'
        }
      ]
    }
  }
}
</script>