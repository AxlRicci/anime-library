<template>
  <v-card
    :img="info.attributes.posterImage.small"
    class="ma-4"
    height="241"
    width="170"
    @click="selectItem"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-scale-transition>
        <v-icon
          v-if="active"
          color="white"
          size="48"
          v-text="'mdi-close-circle-outline'"
        ></v-icon>
      </v-scale-transition>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      required: true
    },
    active: {
      type: Number
    }
  },
  methods: {
    toggle() {
      this.$emit('toggle')
    },
    selectItem() {
      this.$emit('selected')
    }
  }
}
</script>

<style lang="scss" scoped></style>
