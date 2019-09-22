<template>
  <div class="c-song-list">
    <SongItem v-for="song in listsSongs" 
      v-bind:track="song"
      ></SongItem>
  </div>
</template>

<script>
import axios from 'axios'
import SongItem from '@/components/Song/SongItem.vue'

export default {
  name: 'songList',
  props: [],
  data: function() {
    return {
      listsSongs: [],
    }
  },
  components: {
    SongItem,
  },
  created() {
    const userId = this.$route.params.id
    const thisContext = this

    axios.get(`/artist/`+userId+`/top?limit=30`)
    .then(response => {
      const songs = response.data.data
      
      let number = 1
      if(songs) {
        thisContext.listsSongs = songs
      }

    })
    .catch(e => {
      console.log(e)
    })
  }
}
</script>
