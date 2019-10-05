<template>
  <div class="c-user-bar l-user-bar">
    <button class="c-btn-hamburger"><span></span></button>
    <form class="c-search" v-on:submit.prevent="triggerSearch">
      <input type="text" 
        @focusin="showSearch = true"
        autocomplete="nonefalse" 
        placeholder="Search for a song" 
        v-model="searchText"
        class="js-input-search"
        name="search" />
    </form>

    <UserProfileBlock></UserProfileBlock>

    <Search v-click-outside="closeEvent" v-show="showSearchBlock"></Search>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ClickOutside from 'vue-click-outside'
import UserProfileBlock from '@/components/UserBar/UserProfileBlock.vue'
import Search from '@/components/UserBar/Search/Search.vue'

export default {
  components: {
    UserProfileBlock,
    Search,
  },
  props: {
  },
  data: function() {
    return {
      showSearch: false,
      searchText: null,
    }
  },
  methods: {
    triggerSearch() {
      this.$store.dispatch('search/startSearch', this.searchText)
    },
    closeEvent(el) {
      if(!el.srcElement.classList.contains('js-input-search')) {
        this.showSearch = false
      }
    }
  },
  computed: {

    ...mapGetters({
      searchResults: 'search/searchResults',
    }),

    showSearchBlock() {
      return this.searchResults.length > 0 && this.showSearch
    }

  },
  directives: {
    ClickOutside
  }
}
</script>
