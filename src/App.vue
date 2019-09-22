<template>
  <div id="app">
    <div class="l-main-sidebar">
      <Sidebar></Sidebar>

      <div class="l-main-content">
        <router-view/>

        <div v-if="isLoading" class="c-loading">
          <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
        
      </div>

      <BottomPlayer></BottomPlayer>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import BottomPlayer from '@/components/BottomPlayer/BottomPlayer.vue'

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    Sidebar,
    BottomPlayer,
  },
  computed: {

    ...mapGetters({
      isLoading: 'globals/isLoading',
    }),

  },
}
</script>
