<template>
  <div class="c-song l-song">
    <div class="c-song__thumb" v-bind:style="{'background-image': 'url(' + this.urlBackground + ')'}" v-on:click="goToArtist">

      <button class="c-song__thumb-action">
        <h4 class="c-song__name">{{ this.title }}</h4>
      </button>

      <div v-if="this.loading" class="lds-ring"><div></div><div></div><div></div><div></div></div>

    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    /**
     * Decide if can play the song or the album
     * @default true
     * @type {Boolean}
     */
    canPlay: {
      type: Boolean,
      default: true
    },
    id: {
      type: Number,
    }
  },
  data: function() {
    return {
      loading: true,
      urlBackground: '',
      title: '',
      albums: '',
      fans: '',
    }
  },
  components: {
  },
  created() {
    const thisContext = this

    // add loading block
    thisContext.$store.dispatch('globals/setLoading', true)
    if(this.id) {
      axios.get(`artist/`+this.id)
      .then(response => {
        this.loading = false

        // JSON responses are automatically parsed.
        const data = response.data

        thisContext.urlBackground = data.picture_big
        thisContext.title = data.name
        thisContext.fans = data.nb_fan
        thisContext.albums = data.nb_album

        // remove loading
        thisContext.$store.dispatch('globals/setLoading', false)

      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  methods: {
    goToArtist: function() {
      this.$router.push({ name: 'artist', params: { id: this.id } })
    }
  }
}
</script>
