<template>
  <div class="c-song-item">
    <div class="c-song__data">
      <div class="c-song__thumb" v-bind:style="{'background-image': 'url(' + track.album.cover_small + ')'}"></div>
      <h3 class="c-song__title">{{ track.title }}</h3>
    </div>
    <button class="o-play" @click="play">
      <span>
          
        <span class="play-icon visible play-default" v-bind:class="{ visible: !isActive }" v-if="!isActive">
          <span class="icon icon-play"></span>
        </span>

        <span class="play-icon play-hover" v-bind:class="{ visible: isActive }" v-if="isActive">
            <span class="icon icon-pause"></span>
        </span>

        <span class="play-icon play-active">
          <span class="equalizer"></span>
        </span>
      </span>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'singItem',
  props: ['track'],
  data: function() {
    return {
    }
  },
  computed: {

    ...mapGetters({
      isPlaying: 'player/isPlaying',
      activeTrack: 'player/activeTrack',
    }),

    isActive() {
      if((this.track.id === this.activeTrack.id) && this.isPlaying) {
        return true;
      } else {
        return false;
      }
    }

  },
  components: {
  },
  created() {
    
  },
  methods: {

    play() {
      this.isPlaying && this.track.id === this.activeTrack.id
        ? this.$store.dispatch('player/pause')
        : this.$store.dispatch('player/play', this.track);
    }
  },
}
</script>
