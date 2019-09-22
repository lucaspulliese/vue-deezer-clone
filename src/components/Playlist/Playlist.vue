<template>
  <div class="c-song l-song">
    <div class="c-song__thumb">
      
      <div class="c-song__thumb__image" v-bind:style="{'background-image': 'url(' + this.urlBackground + ')'}" v-on:click="goToArtist"></div>

      <ul v-if="canPlay" class="c-song__actions">
        <li>
          <button class="o-play">
            <span>
              <span @click="startTracklist" class="play-icon visible play-default">
                <span class="icon icon-play"></span>
              </span>
              <span class="play-icon play-hover">
                <span class="icon icon-pause"></span>
              </span>
              <span class="play-icon play-active">
                <span class="equalizer"></span>
              </span>
            </span>
          </button>
        </li>

        <li>
          <button class="o-love">
            <i class="icon-heart"></i>
          </button>
        </li>
      </ul>

      <button v-if="!canPlay" class="c-song__thumb-action">
        <h4 class="c-song__name">{{ this.title }}</h4>
      </button>

      <div v-if="this.loading" class="lds-ring"><div></div><div></div><div></div><div></div></div>

    </div>

    <div v-if="canPlay" class="l-song__descriptions">
      <h4 class="c-song__name">{{ this.title }}</h4>
      <span class="c-song__description">{{ this.albums }} albums - {{ this.fans }} followers</span>
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
      tracklist: '',
    }
  },
  components: {
  },
  created() {
    const thisContext = this
    // only when have and ID
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
        thisContext.tracklist = data.tracklist
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  methods: {
    goToArtist: function() {
      this.$router.push({ name: 'artist', params: { id: this.id } })
    },

    startTracklist: function() {
      
    },
  }
}
</script>
