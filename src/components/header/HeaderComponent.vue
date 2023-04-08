<template>
  <div className="bg-black w-full">
    <links-header />
    <logo-header />
  </div>
</template>

<script>
import LinksHeader from './LinksHeader.vue';
import LogoHeader from './LogoHeader.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LinksHeader,
    LogoHeader,
  },
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
