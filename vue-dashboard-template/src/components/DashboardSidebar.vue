

<template>
  <aside class="aside">  
    <div class="menu-setting">
      <img src="../assets/images/setting.svg" alt="icon-setting" class="icon-setting">
      <p class="text">Teamify</p>
    </div>  
    <Menu :model="items">
      <template #item="{ item, props }">
        <a v-bind="props.action"
           class="p-menuitem-link"
           :class="{ 'active': activeTopLabel === item.label }"
           @click="setActiveTop(item.label)"
        >
          <span :class="['p-menuitem-icon', item.icon]"></span>
          <span :class="item.textClass">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
    <div class="sidebar-divider"></div>
    <Menu :model="bottomItems">
      <template #item="{ item, props }">
        <a class="p-menuitem-link"
           v-bind="props.action"  
           :class="{ 'active': activeBottomLabel === item.label }"
           @click="setActiveBottom(item.label)"
        >
          <span :class="['p-menuitem-icon', item.icon]"></span>
          <span :class="item.textClass">{{ item.label }}</span>
        </a>
      </template>
    </Menu>
  </aside>  
</template>

<script>
  import Button from 'primevue/button';
  import Sidebar from 'primevue/sidebar';
  import Menu from 'primevue/menu';
  import { setActivePinia } from 'pinia';

  export default {
    components: {
      Button,
      Sidebar,
      Menu
    },
    data() {
      return {
        activeTopLabel: 'Dashboard',
        activeBottomLabel: null,
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
            icon: 'pi custom-icon added-icon team-icon',
            to: '/',
            textClass: 'text'
          },
          {
            label: 'Employees',
            icon: 'pi pi-users custom-icon',
            to: '/',
            textClass: 'text'
          },
          {
            label: 'Projects',
            icon: 'pi custom-icon added-icon projects-icon',
            to: '/',
            textClass: 'text'
          }
        ],
        bottomItems: [
          {
            label: 'Meetings',
            icon: 'pi pi-phone custom-icon',
            to: '/',
            textClass: 'text'
          },
          {
              label: ' Tasks',
              icon: 'pi pi-folder custom-icon',
              to: '/',
            textClass: 'text'
          },
          {
            label: 'Settings',
            icon: 'pi pi-cog custom-icon',
            to: '/',
            textClass: 'text'
          }
        ]
      }
    },
    methods: {
      setActiveTop(label) {
        this.activeTopLabel = label;
        this.activeBottomLabel = null;
      },
      setActiveBottom(label) {
        this.activeBottomLabel = label;
        this.activeTopLabel = null;
      }
    }
  }
</script>

<style lang="scss" scoped>
.sidebar-divider{
  max-width: 218px; margin-inline: auto; height: 1px; border-top: 1px solid #C4C4C4;
  margin-block: 1.2vw;
}
</style>