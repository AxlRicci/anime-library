<template>
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
      <AnimeListCard @selected="selectItem(item)" :info="item" />
    </v-slide-item>
  </v-slide-group>
</template>

<script>
import AnimeListCard from '@/components/AnimeListCard'
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
    AnimeListCard
  },
  data() {
    return {
      model: null,
      scrollPosition: 0
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
    selectItem(item) {
      this.$emit('selectedItem', item)
    },
    logit(item) {
      console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped></style>
