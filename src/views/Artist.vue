<template>
  <WithSidebar>
    <UserBar></UserBar>

    <div class="l-content">
      <ArtistIntro 
        :imageUrl="imageUrl"
        :name="name"
        ></ArtistIntro>

      <SongList
        :urlTracklist="urlTracklist"
        ></SongList>
    </div>

  </WithSidebar>
</template>

<script>
import axios from 'axios'
import WithSidebar from '@/layouts/WithSidebar.vue'
import UserBar from '@/components/UserBar/UserBar.vue'
import ArtistIntro from '@/components/Artist/ArtistIntro.vue'
import SongList from '@/components/Song/SongList.vue'

export default {
  name: 'artist',
  data: function() {
    return {
      imageUrl: '',
      name: '',
      urlTracklist: '',
    }
  },
  components: {
    WithSidebar,
    UserBar,
    ArtistIntro,
    SongList,
  },
  created() {
    const thisContext = this
    const userId = this.$route.params.id

    // add loading block
    thisContext.$store.dispatch('globals/setLoading', true)

    // only when have and ID
    if(userId) {
      axios.get(`artist/`+userId)
      .then(response => {

        // JSON responses are automatically parsed.
        const data = response.data
        thisContext.imageUrl = data.picture_big
        thisContext.name = data.name

        thisContext.$store.dispatch('globals/setLoading', false)
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
}
</script>
