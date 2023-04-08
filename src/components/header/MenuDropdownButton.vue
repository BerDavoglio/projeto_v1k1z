<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div className="my-4">
        <div className="cursor-pointer" @click="openMenu">
          {{ this.obj.name }}<v-icon v-if="this.obj.submenu.length" :name="[isOpen ? 'bi-chevron-compact-up' : 'bi-chevron-compact-down']" />
        </div>
        <div v-if="isOpen && this.obj.submenu.length" className='text-white text-xs py-2'>
          <div v-for="i in this.obj.submenu" v-bind:key="i">
            <div className="m-2 cursor-pointer">{{ i.name }}</div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'MenuDropdownButton',
  props: [
    'obj',
  ],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
