

<template>
  <aside class="aside">  
    <div class="menu-settings">
      <Menu :model="items" />
    </div>
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
          label: 'Teamify',
          icon: 'pi pi-home custom-icon',
          to: '/'
        }
      ]
    }
  }
}
</script>