<template>
  <WithSidebar>
    <UserBar></UserBar>

    <div class="l-content">

      <Channel
        title="Favourites"
        description="Your avourites artists">

        <div class="l-song-blocks">
            <Playlist v-for="id in idFavourites" v-bind:id="id"></Playlist>
        </div>
      </Channel>

      <Channel
        title="Shuffle"
        description="Random artists">

        <div v-masonry class="l-masonry-songs" transition-duration="0.3s" item-selector=".l-song">
          <Artist v-for="id in idArtists" v-bind:canPlay="false" v-bind:id="id"></Artist>
        </div>
      </Channel>

    </div>

  </WithSidebar>
</template>

<script>
import Playlist from '@/components/Playlist/Playlist.vue'
import Artist from '@/components/Artist/Artist.vue'
import WithSidebar from '@/layouts/WithSidebar.vue'
import UserBar from '@/components/UserBar/UserBar.vue'
import Channel from '@/components/Channel/Channel.vue'

export default {
  name: 'home',
  data: function() {
    return {
      idArtists: [1445, 2707, 1194, 927, 181, 207, 906, 1190, 808, 3337, 997, 10696, 1883, 73921, 64410, 2468, 449941],
      idFavourites: [1, 2179, 1129, 3128],
    }
  },
  components: {
    WithSidebar,
    UserBar,
    Channel,
    Playlist,
    Artist,
  },
  created() {
  }
}
</script>
