<template>
  <v-card class="mx-auto" max-width="600" elevation="0">
    <v-row justify="space-around" v-if="$store.state.loading">
      <div>
        <div class="title">Until last month</div>
        <v-date-picker
          v-model="pastDate"
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
import dayjs from 'dayjs'

export default {
  data: () => ({
    arrayEvents: null,
    pastDate: null,
    lastPastDate: null,
    today: null,
    colors: [
      'green accent-2',
      'green accent-3',
      'green accent-4',
      'orange',
      'red',
      'purple'
    ]
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
    },
    getSystolicColor(val) {
      let j = 0
      if (val < 115) {
        j = 0
      } else if (115 <= val && val < 125) {
        j = 1
      } else if (125 <= val && val < 135) {
        j = 2
      } else if (135 <= val && val < 145) {
        j = 3
      } else if (145 <= val && val < 160) {
        j = 4
      } else {
        j = 5
      }
      return this.colors[j]
    },
    getDiastolicColor(val) {
      let j = 0
      if (val < 75) {
        j = 0
      } else if (75 <= val && val < 85) {
        j = 2
      } else if (85 <= val && val < 90) {
        j = 3
      } else if (90 <= val && val < 100) {
        j = 4
      } else {
        j = 5
      }
      return this.colors[j]
    }
  }
}
</script>
