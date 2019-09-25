<template>
  <WithSidebar>
    <UserBar></UserBar>

    <div class="l-content">

      <Channel
        title="Favourites"
        description="Your avourites artists">

        <div class="l-song-blocks">
          <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            
            <swiper-slide v-for="id in idFavourites" >
              <Playlist v-bind:id="id"></Playlist>
            </swiper-slide>
                
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
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
// components
import Playlist from '@/components/Playlist/Playlist.vue'
import Artist from '@/components/Artist/Artist.vue'
import WithSidebar from '@/layouts/WithSidebar.vue'
import UserBar from '@/components/UserBar/UserBar.vue'
import Channel from '@/components/Channel/Channel.vue'

// swiper slides
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'home',
  data: function() {
    return {
      idArtists: [1445, 2707, 1194, 927, 181, 207, 906, 1190, 808, 3337, 997, 10696, 1883, 73921, 64410, 2468, 449941],
      idFavourites: [1, 2179, 1129, 3128],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 10,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          // when window width is >= 640px
          730: {
            slidesPerView: 1,
            spaceBetween: 40
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    WithSidebar,
    UserBar,
    Channel,
    Playlist,
    Artist,
    swiper,
    swiperSlide
  },
  created() {
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
  }
}
</script>
