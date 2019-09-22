<template>
  <div class="c-artist-intro">
    <div class="c-artist__avatar" v-bind:style="{'background-image': 'url(' + this.imageUrl + ')'}"></div>
    <div class="c-artist__actions">
      <h2 class="c-artist__name">{{ this.name }}</h2>
      <button type="button" class="c-btn">Follow</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['imageUrl', 'name'],
  data: function() {
    return {
    }
  },
  components: {
  },
  created() {
  },
  methods: {
  }
}
</script>
