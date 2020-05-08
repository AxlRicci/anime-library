<template>
  <v-container>
    <v-slide-group
      class="pa-4"
      next-icon="mdi-plus"
      prev-icon="mdi-minus"
      show-arrows
      @click:next="nextItems"
      @click:prev="countPosition"
    >
      <v-slide-item
        v-for="item in items"
        :key="item.attributes.slug"
        v-slot:default="{ active, toggle }"
      >
        <AnimeListCover
          @toggle="toggle"
          @selected="selectItem(item)"
          :img="item.attributes.posterImage.small"
        />
      </v-slide-item>
    </v-slide-group>
  </v-container>
</template>

<script>
import AnimeListCover from '@/components/AnimeListCover'
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      position: 0
    }
  },
  components: {
    AnimeListCover
  },
  methods: {
    selectItem(item) {
      console.log(item)
    },
    nextItems() {
      if (this.position <= 0) {
        this.$emit('nextItems')
      } else {
        this.position -= 1
        console.log(this.position)
      }
    },
    countPosition() {
      this.position += 1
      console.log(this.position)
    },
    logit() {
      console.log('poopies')
    }
  }
}
</script>

<style lang="scss" scoped></style>
