<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div>
    <div className='grid grid-cols-4 pb-4'>
      <div className="w-full">
        <div className="bg-estrela bg-center bg-no-repeat bg-contain w-28 h-28 my-auto ml-auto" />
      </div>
      <div className="text-white my-auto text-2xl col-span-2">
        Conselho dos Estudantes do Setor de Tecnologia
      </div>
      <div v-if="isCell" className="my-auto">
        <div className="cursor-pointer text-white" @click="openMenuGeral"><v-icon name="co-menu" scale="4" /></div>
      </div>
    </div>
    <menu-header :isCell="isCell" :isOpenGeral="isOpenGeral" />
  </div>
</template>

<script>
import MenuHeader from './MenuHeader.vue';

export default {
  name: 'LogoHeader',
  components: {
    MenuHeader,
  },
  data() {
    return {
      isCell: false,
      isOpenGeral: false,
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    verifyResize(i) {
      if (i < 768) {
        return true;
      }
      return false;
    },
    openMenuGeral() {
      this.isOpenGeral = !this.isOpenGeral;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.isCell = this.verifyResize(newWidth);
      this.isMidCell = newWidth;
    },
  },
  beforeMount() {
    this.isCell = this.verifyResize(window.innerWidth);
    this.isMidCell = window.innerWidth;
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
};
</script>
