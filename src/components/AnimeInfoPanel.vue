<template>
  <v-container>
    <v-card class="mx-auto">
      <v-row justify="space-between">
        <v-col cols="2" align-self="center">
          <v-simple-table class="ma-2">
            <template v-slot:default>
              <tbody>
                <tr v-for="detail in animeDetails" :key="detail.name">
                  <td>{{ detail.name }}</td>
                  <td>{{ detail.data }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <v-col cols="6" align-self="center">
          <v-row>
            <v-col>
              <v-card-title>{{ anime.attributes.canonicalTitle }}</v-card-title>
              <v-card-subtitle>{{
                anime.attributes.startDate.split('-')[0]
              }}</v-card-subtitle>
              <v-chip-group column class="px-4">
                <v-chip v-for="n in 5" :key="n">
                  {{ n }}
                </v-chip>
              </v-chip-group>
              <v-card-text>{{ anime.attributes.synopsis }}</v-card-text>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="4" align-self="center">
          <v-row justify="end">
            <v-col cols="2">
              <v-icon @click="closePanel">mdi-close</v-icon>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <iframe
                v-if="anime.attributes.youtubeVideoId"
                width="500"
                height="300"
                :src="
                  `https://www.youtube.com/embed/${anime.attributes.youtubeVideoId}`
                "
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <v-img
                v-if="!anime.attributes.youtubeVideoId"
                src="https://www.afghansmart.com/assets/fronend/images/no-video-available.gif"
                height="200"
                contain
              >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  created() {
    //make the call to db to get genre types.
  },
  methods: {
    closePanel() {
      this.$emit('closePanel')
    }
  },
  computed: {
    animeDetails() {
      let requestedDetails = [
        { attribute: 'averageRating', name: 'Community Approval' },
        { attribute: 'ratingRank', name: 'Overall Rank' },
        { attribute: 'episodeCount', name: 'Episodes' },
        { attribute: 'status', name: 'Status' },
        { attribute: 'ageRating', name: 'Rating' }
      ]
      let detailsArray = []
      requestedDetails.forEach(detail => {
        let hasProperty = Object.prototype.hasOwnProperty.call(
          this.anime.attributes,
          detail.attribute
        )
        if (hasProperty) {
          let animeDetail = {
            name: detail.name,
            data: this.anime.attributes[detail.attribute]
          }
          detailsArray.push(animeDetail)
        }
      })
      return detailsArray
    }
  }
}
</script>

<style lang="scss" scoped></style>
