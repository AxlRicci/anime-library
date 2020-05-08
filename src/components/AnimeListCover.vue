<template>
  <v-card
    :img="img"
    class="ma-1"
    height="241"
    width="170"
    @click="sendSelected"
  >
  </v-card>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default:
        'https://image.shutterstock.com/image-vector/404-error-file-not-found-600w-1507090958.jpg'
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    sendToggle() {
      this.$emit('toggle')
    },
    sendSelected() {
      this.$emit('selected')
    }
  }
}
</script>

<style lang="scss" scoped></style>
