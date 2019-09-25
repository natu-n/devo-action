<template>
  <v-card class="mx-auto" max-width="600" elevation="0">
    <v-row justify="space-around" v-if="$store.state.loading">
      <div>
        <div class="subheading">Until last month</div>
        <v-date-picker
          v-model="pastDate"
          :max="lastPastDate"
          :events="arrayEvents"
          event-color="green lighten-1"
          color="blue lighten-4"
          header-color="green lighten-1"
        ></v-date-picker>
      </div>
      <div>
        <div class="subheading">this month</div>
        <v-date-picker
          v-model="today"
          :disabled="true"
          :event-color="date => (date[9] % 2 ? 'red' : 'yellow')"
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

    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30)
      const d = new Date()
      d.setDate(day)
      return d.toISOString().substr(0, 10)
    })
  },

  methods: {
    functionEvents(date) {
      console.log(date)
      const [, , day] = date.split('-')
      if ([12, 17, 28].includes(parseInt(day, 10))) return true
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
      return false
    }
  }
}
</script>
