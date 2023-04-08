<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div v-if="(isCell ? (isOpenGeral) : true)" :className="['grid text-white text-sm px-24 '
      + (isMidCell > 1150 ? 'grid-cols-10 py-2' : (isCell ? '' : 'py-[1.5rem] grid-cols-5'))]">
      <div v-for="i in list" v-bind:key="i">
        <menu-dropdown-button :obj="i" />
      </div>
    </div>
</template>

<script>
import MenuDropdownButton from './MenuDropdownButton.vue';

export default {
  name: 'MenuHeader',
  components: {
    MenuDropdownButton,
  },
  props: [
    'isCell',
    'isOpenGeral',
  ],
  data() {
    return {
      isMidCell: false,
      windowWidth: window.innerWidth,
      list: [
        {
          name: 'FRATERNIDADE',
          submenu: [
            {
              name: 'História',
              url: '',
            },
            {
              name: 'A Estrela',
              url: '',
            },
          ],
        },
        {
          name: 'POLÍTICA',
          submenu: [
            {
              name: 'Centros Acadêmicos',
              url: '',
            },
            {
              name: 'Movimento Estudantil',
              url: '',
            },
            {
              name: 'Conselhos Superiores',
              url: '',
            },
          ],
        },
        {
          name: 'ATLÉTICA',
          submenu: [
            {
              name: 'História AC7',
              url: '',
            },
            {
              name: 'Bateria AC7',
              url: '',
            },
            {
              name: 'Cheerleaders AC7',
              url: '',
            },
            {
              name: 'Bike AC7',
              url: '',
            },
            {
              name: 'Associe-se à AC7',
              url: '',
            },
            {
              name: 'Campeonatos',
              url: '',
            },
          ],
        },
        {
          name: 'Eventos',
          submenu: [
            {
              name: 'Cervejada',
              url: '',
            },
            {
              name: 'F.I.L.E.T',
              url: '',
            },
            {
              name: 'Quimaera',
              url: '',
            },
          ],
        },
        {
          name: 'PROFISSIONAL',
          submenu: [
            {
              name: 'Semana Acadêmica C7',
              url: '',
            },
          ],
        },
        {
          name: 'SOCIAL',
          submenu: [
            {
              name: 'C7 nas Escolas',
              url: '',
            },
            {
              name: 'Carona Solidária C7',
              url: '',
            },
            {
              name: 'HELA - CAO',
              url: '',
            },
            {
              name: 'Trote Solidário',
              url: '',
            },
          ],
        },
        {
          name: 'CULTURAL',
          submenu: [
            {
              name: 'Conversation C7',
              url: '',
            },
            {
              name: 'Semana Cultural C7',
              url: '',
            },
          ],
        },
        {
          name: 'MÍDIA',
          submenu: [
            {
              name: 'CESETv',
              url: '',
            },
            {
              name: 'Indicium C7',
              url: '',
            },
          ],
        },
        {
          name: 'STORE',
          submenu: [],
        },
        {
          name: 'ÁREA RESTRITA',
          submenu: [],
        },
      ],
    };
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {
    windowWidth(newWidth) {
      this.isMidCell = newWidth;
    },
  },
  beforeMount() {
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
