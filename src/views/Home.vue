<template>
  <div>
    <h1>Home</h1>
    <v-btn @click="call">CALL</v-btn>
    <AnimeList @selectedItem="logit" @nextItems="getNext" :items="animeList" />
  </div>
</template>

<script>
import AnimeService from '@/services/AnimeService.js'
import AnimeList from '@/components/AnimeList'
export default {
  name: 'Home',
  components: {
    AnimeList
  },
  data() {
    return {
      data: {},
      animeList: []
    }
  },
  methods: {
    call() {
      AnimeService.getData('anime')
        .then(response => {
          this.data = response.data
          this.animeList = response.data.data
          console.log(this.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    getNext() {
      console.log(this.data.links.next.split('/')[5])
      AnimeService.getData(this.data.links.next.split('/')[5])
        .then(response => {
          this.data = response.data
          this.animeList = this.animeList.concat(response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    logit(item) {
      console.log(item)
    }
  }
}
</script>
