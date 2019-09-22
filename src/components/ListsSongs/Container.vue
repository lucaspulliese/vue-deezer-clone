<template>
    <div class="l-container">
        

    </div>
</template>

<script>
import WithSidebar from '@/layouts/WithSidebar.vue'
import UserBar from '@/components/UserBar/UserBar.vue'

export default {
  name: 'artist',
  data: function() {
    return {
    }
  },
  components: {
    WithSidebar,
    UserBar
  },
  created() {
    const artistID = this.$route.params.id


  }
}
</script>
