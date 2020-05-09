<template>
  <v-container>
    <v-slide-group
      v-model="model"
      class="pa-4"
      :prev-icon="prevIcon"
      :next-icon="nextIcon"
      show-arrows
      @click:next="getNext"
      @click:prev="calcListPosition"
    >
      <v-slide-item v-for="item in items" :key="item.attributes.slug">
        <AnimeListCard @selected="setSelectedAnime(item)" :info="item" />
      </v-slide-item>
    </v-slide-group>
    <AnimeInfoPanel @closePanel="deselectAnime" v-if="selectedAnime" :anime="selectedAnime" />
  </v-container>
</template>

<script>
import AnimeListCard from '@/components/AnimeListCard'
import AnimeInfoPanel from '@/components/AnimeInfoPanel'
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    prevIcon: {
      type: String,
      default: 'mdi-minus'
    },
    nextIcon: {
      type: String,
      default: 'mdi-plus'
    }
  },
  components: {
    AnimeListCard,
    AnimeInfoPanel
  },
  data() {
    return {
      model: null,
      scrollPosition: 0,
      selectedAnime: null
    }
  },
  methods: {
    getNext() {
      if (this.scrollPosition <= 0) {
        this.$emit('nextItems')
      } else {
        this.scrollPosition -= 1
      }
    },
    calcListPosition() {
      this.scrollPosition += 1
    },
    setSelectedAnime(item) {
      this.selectedAnime = item
      console.log(this.selectedAnime)
    },
    deselectAnime() {
      this.selectedAnime = null
    },
    logit(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped></style>
