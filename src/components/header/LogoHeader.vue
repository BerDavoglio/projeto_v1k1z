<!-- eslint-disable max-len -->
<template>
  <div :className="['grid ' + (isCell ? 'grid-cols-3' : 'grid-cols-4')]">
    <div className="w-full">
      <div className="bg-estrela bg-center bg-no-repeat bg-contain w-28 h-28 my-auto ml-auto" />
    </div>
    <div className="text-white my-auto text-2xl col-span-2">
      Conselho dos Estudantes do Setor de Tecnologia
    </div>
  </div>
</template>

<script>
export default {
  name: 'LogoHeader',
  data() {
    return {
      isCell: false,
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
  },
  watch: {
    windowWidth(newWidth) {
      this.isCell = this.verifyResize(newWidth);
    },
  },
  beforeMount() {
    this.isCell = this.verifyResize(window.innerWidth);
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
