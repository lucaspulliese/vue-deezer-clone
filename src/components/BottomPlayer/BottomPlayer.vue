<template>
  <div class="c-player-bottom">
      <div class="c-player-controls">
        <ul class="c-player-controls__list">
          <li>
            <button class="btn-to-start"><i class="icon-to-start"></i></button>
          </li>
          <li class="c-el-play">
            <button class="btn-play" @click="play"><i v-bind:class="[isPlaying ? 'icon-pause' : 'icon-play']"></i></button>
          </li>
          <li>
            <button class="btn-to-end inactive"><i class="icon-to-end"></i></button>
          </li>
        </ul>
      </div>

      <div class="c-player-track">
        <div class="c-player-track__top">
          <h5 class="c-player-track__name">{{ this.activeTrack.artist.name }} - {{ this.activeTrack.title }}</h5>
          <div class="c-player-track__actions">
            <button class="add-to-playlist"><i class="icon-heart"></i></button>
          </div>
        </div>
      </div>

      <VolumeSlider></VolumeSlider>
  </div>
</template>

<script>
import VolumeSlider from '@/components/BottomPlayer/VolumeSlider.vue'
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  components: {
    VolumeSlider,
  },
  computed: {

    ...mapGetters({
      isPlaying: 'player/isPlaying',
      activeTrack: 'player/activeTrack',
    }),

  },
  created() {
  },
  methods: {

    play() {
      this.isPlaying
        ? this.$store.dispatch('player/pause')
        : this.$store.dispatch('player/play', '');
    }
  },
}
</script>
