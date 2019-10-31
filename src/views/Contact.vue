<template>
  <v-app>
    <v-card class="mx-auto" max-width="800" outlined>
      <v-row class="fill-height" v-if="$store.state.loading">
        <v-col>
          <v-row class="pa-0 ma-0">
            <v-col class="pa-0 ma-0">
              <v-sheet height="64">
                <v-toolbar flat color="white">
                  <v-btn outlined class="mr-4" @click="setToday">Today</v-btn>
                  <v-btn fab text small @click="prev">
                    <v-icon small>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn fab text small @click="next">
                    <v-icon small>mdi-chevron-right</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-toolbar>
              </v-sheet>
            </v-col>
            <v-col class="pa-0 ma-0"></v-col>
          </v-row>
          <v-sheet height="500" width="800">
            <v-calendar
              ref="calendar"
              v-model="focus"
              :now="today"
              type="month"
              color="primary"
              class="fill-hight"
              @change="updateRange"
            >
              <template v-slot:day="{ present, past, date }">
                <v-row class="mx-0 px-0">
                  <v-sheet :height="spaceHeight" tile></v-sheet>
                </v-row>

                <v-row class="mx-0 px-0">
                  <v-sheet
                    v-for="(percent, i) in tracked1[date]"
                    :key="i"
                    :color="COLORS[i]"
                    :width="`${percent}%`"
                    :height="barHeight"
                    tile
                    dark
                    class="caption"
                  >
                    <p v-if="i == 0">
                      {{ Systolic[date] }}
                    </p>
                  </v-sheet>
                </v-row>
                <v-row class="mx-0 px-0">
                  <v-sheet :height="spaceHeight" tile></v-sheet>
                </v-row>
                <v-row class="mx-0 px-0">
                  <v-sheet
                    v-for="(percent, i) in tracked2[date]"
                    :key="i"
                    :title="CATEGORY[i]"
                    :color="COLORS[i]"
                    :width="`${percent}%`"
                    :height="barHeight"
                    tile
                    dark
                    class="caption"
                  >
                    <p v-if="i == 0">
                      {{ Diastolic[date] }}
                    </p>
                  </v-sheet>
                </v-row>
              </template>
            </v-calendar>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data: () => ({
    today: null,
    focus: null,
    start: null,
    spaceHeight: '2',
    barHeight: '23',
    end: null,
    selectedEvent: {},
    selectedElement: null,
    Systolic: {
      '2019-01-05': 128,
      '2019-01-04': 130,
      '2019-01-03': 120,
      '2019-01-02': 140,
      '2019-01-01': 150
    },
    tracked1: {
      '2019-01-05': [48, 2, 0, 50],
      '2019-01-04': [50, 0, 0, 50],
      '2019-01-03': [40, 10, 0, 50],
      '2019-01-02': [50, 0, 10, 40],
      '2019-01-01': [50, 0, 20, 30]
    },
    tracked2: {
      '2019-01-05': [50, 0, 20, 30],
      '2019-01-04': [50, 0, 10, 40],
      '2019-01-03': [40, 10, 0, 0],
      '2019-01-02': [50, 0, 0, 50],
      '2019-01-01': [48, 2, 0, 50]
    },
    Diastolic: {
      '2019-01-05': 90,
      '2019-01-04': 85,
      '2019-01-03': 65,
      '2019-01-02': 80,
      '2019-01-01': 78
    }
  }),
  computed: {
    COLORS: () => ['teal', 'blue', 'red', 'white'],
    CATEGORY: () => ['Development', 'Meetings', '', '']
  },

  mounted() {
    this.today = this.$store.state.toDate
    this.focus = this.$store.state.toDate
    this.getBarHeight(this.today)
  },

  methods: {
    setToday() {
      this.focus = this.$store.state.today
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    updateRange({ start, end }) {
      this.start = start
      this.end = end
      this.getBarHeight(this.start.date)
    },
    getBarHeight(date) {
      let normalizedDate = dayjs(date)
      let weekdayNo = parseInt(normalizedDate.format('d'))
      let monthLastday = parseInt(normalizedDate.endOf('month').format('DD'))
      let weekCount = Math.ceil((weekdayNo + monthLastday) / 7)

      if (weekCount === 5) {
        this.spaceHeight = '2'
        this.barHeight = '23'
      } else {
        this.spaceHeight = '1'
        this.barHeight = '17'
      }
    }
  }
}
//*[@id="app"]/div/div/div/div/div[2]/div/div[2]
//*[@id="app"]/div/div/div/div/div[2]/div/div[6]
// document.querySelector("#app > div > div > div > div > div.v-sheet.theme--light > div > div:nth-child(2)")
// document.querySelector("#app > div > div > div > div > div.v-sheet.theme--light > div > div:nth-child(6)")
// #app > div > div > div > div > div.v-sheet.theme--light > div > div:nth-child(2)
// #app > div > div > div > div > div.v-sheet.theme--light > div > div:nth-child(6)
//div[@class="v-calendar-weekly__week"]
</script>

<style scoped>
.my-event {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  background-color: #1867c0;
  color: #ffffff;
  border: 1px solid #1867c0;
  width: 100%;
  font-size: 12px;
  padding: 3px;
  cursor: pointer;
  margin-bottom: 1px;
}
.caption p {
  text-align: right;
}
</style>
