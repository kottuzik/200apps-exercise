

<template>
  <aside class="aside">  
    <div class="menu-setting">
      <img src="../assets/images/setting.svg" alt="icon-setting" class="icon-setting">
      <p class="text">Teamify</p>
    </div>  
    <Menu :model="items" >
      <template #item="{ item, props, index }">
        <a v-bind="props.action" class="p-menuitem-link" :class="{ 'active': index === activeIndex }">
          <span :class="['p-menuitem-icon', item.icon]"></span>
          <span :class="item.textClass">{{ item.label }}</span>
        </a>
      </template>
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
      activeIndex: 0,
      visibleLeft: true,
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-th-large custom-icon',
          to: '/',
          textClass: 'text'
        },
        {
          label: 'Teams',
          icon: 'pi pi-users custom-icon',
          to: '/',
          textClass: 'text'
        },
        {
          label: 'Projects',
          icon: 'pi pi-th-large custom-icon',
          to: '/',
          textClass: 'text'
        },
      ]
    }
  }
}
</script>