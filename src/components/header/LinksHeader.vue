<template>
  <div className="grid grid-cols-2 text-white py-2">
    <div>
      Quinta-Feira, 6 Abril, 2023
    </div>
    <div :className="['grid m-auto ' + (isCell ? 'grid-cols-4 gap-4' : 'grid-cols-7 gap-8')]">
      <div className="cursor-pointer"><v-icon name="co-facebook-f" /></div>
      <div className="cursor-pointer"><v-icon name="co-instagram" className="cursor-pointer" /></div>
      <div className="cursor-pointer"><v-icon name="co-linkedin-in" className="cursor-pointer" /></div>
      <div className="cursor-pointer"><v-icon name="md-email-outlined" className="cursor-pointer" /></div>
      <div className="cursor-pointer"><v-icon name="co-pinterest-p" className="cursor-pointer" /></div>
      <div className="cursor-pointer"><v-icon name="co-twitter" className="cursor-pointer" /></div>
      <div className="cursor-pointer"><v-icon name="co-youtube" className="cursor-pointer" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LinksHeader',
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
