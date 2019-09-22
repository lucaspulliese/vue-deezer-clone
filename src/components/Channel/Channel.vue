<template>
  <section class="c-channel l-channel">
      <div class="l-channel__top">
        <div class="wrapper-left">
          <h3 class="c-channel__name">{{ title }}</h3>
          <p class="c-channel__description">
            {{ description }}
          </p>
        </div>

        <div class="wrapper-right">

        </div>
      </div>

      <slot />
  </section>
</template>

<script>

export default {
  components: {
  },
  props: {
    title: String,
    description: String,
  },
  created() {
  }
}
</script>
