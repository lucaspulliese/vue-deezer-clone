<template>
  <div class="c-search-block l-search-block">
    <ul class="c-search-block__results">
      <li v-for="result in searchResults">
        <button type="button" @click="startTrack(result)"><img :src="result.album.cover_small" :alt="result.title" /> {{ result.title }} - {{ result.album.title }}</button>
      </li>
    </ul>

    <div class="c-loading-block" v-if="processing">
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  props: {
  },
  computed: {

    ...mapGetters({
      searchResults: 'search/searchResults',
      processing: 'search/processing',
    }),

  },
  methods: {
    startTrack(track) {
      this.$store.dispatch('player/play', track);
    }
  }
}
</script>
