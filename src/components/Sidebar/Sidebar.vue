<template>
  <div class="c-sidebar l-sidebar">
    <h1 class="o-logo">Vue.js</h1>

    <ul class="c-nav l-nav">
      <router-link tag="li" to="/">
        <a>Home</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
