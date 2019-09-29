<template>
  <v-card class="mx-auto" max-width="600" elevation="0">
    <v-row justify="space-around" v-if="$store.state.loading">
      <div>
        <div class="title">Until last month</div>
        <v-date-picker
          v-model="pastDate"
          min="2017-10-20"
          :max="lastPastDate"
          :events="functionEvents"
          event-color="green lighten-1"
          color="blue lighten-3"
          header-color="green lighten-1"
        ></v-date-picker>
      </div>
      <div>
        <div class="title">this month</div>
        <v-date-picker
          v-model="today"
          :disabled="true"
          :events="functionEvents"
          color="blue lighten-5"
          header-color="primary"
        ></v-date-picker>
      </div>
    </v-row>
  </v-card>
</template>

<script>
import Utilities from '@/components/Utilities'
import dayjs from 'dayjs'

export default {
  mixins: [Utilities],
  data: () => ({
    arrayEvents: null,
    pastDate: null,
    lastPastDate: null,
    today: null
  }),

  mounted() {
    this.today = this.$store.state.toDate
    this.pastDate = dayjs(this.today)
      .add(-1, 'month')
      .format('YYYY-MM-DD')
    this.lastPastDate = dayjs(this.pastDate)
      .endOf('month')
      .format('YYYY-MM-DD')
  },

  methods: {
    functionEvents(date) {
      let dotColor = []
      const i = this.$store.state.info.findIndex(function(
        element,
        index,
        array
      ) {
        return date == element.date
      })
      if (i > 0) {
        dotColor.push(this.getSystolicColor(this.$store.state.info[i].systolic))
        dotColor.push(
          this.getDiastolicColor(this.$store.state.info[i].diastolic)
        )
        return dotColor
      } else {
        return false
      }
    }
  }
}
</script>
