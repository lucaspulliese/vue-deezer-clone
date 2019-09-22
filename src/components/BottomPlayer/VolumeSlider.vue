<template>
  <div class="c-volume-slider">
    <div class="c-volume-slider__actions">
      <span class="c-volume-slider__volume">
        <i class="icon-volume-down"></i>

        <div class="c-volume-slider__slider">
          <input v-model="volumeValue" min="1"
            @mouseup="onMouseUp"
            @mousedown="onMouseDown"
            @mouseleave="onMouseLeave"
            @change="changeVolume"
            @mousemove="onMouseMove" max="100" step="1" type="range" />
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
  },
  data: function() {
    return {
      mouseDown: false,
      volumeValue: 50,
    }
  },
  components: {
  },
  created() {
  },
  methods: {
    
    changeVolume(event) {
      this.$store.dispatch('player/setVolume', this.volumeValue / 100);
    },

    onMouseUp(event) {
      if (this.mouseDown) {
      }
      this.mouseDown = false;
    },

    onMouseDown(event) {
      this.mouseDown = true;
    },
    onMouseMove(event) {
      if (!this.mouseDown) {
        return;
      }

      this.$store.dispatch('player/setVolume', this.volumeValue / 100);
    },
    onMouseLeave() {
      this.mouseDown = false;
    },
  },
  computed: {

  },
}
</script>
