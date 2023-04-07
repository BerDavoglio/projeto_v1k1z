<template>
  <div className="bg-black w-full h-48">
    <links-header />
    <logo-header />
    <menu-header />
  </div>
</template>

<script>
import LinksHeader from './LinksHeader.vue';
import LogoHeader from './LogoHeader.vue';
import MenuHeader from './MenuHeader.vue';

export default {
  name: 'HeaderComponent',
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  components: {
    LinksHeader,
    LogoHeader,
    MenuHeader,
  },
};
</script>
