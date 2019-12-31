<template>
  <v-app>
    <v-card class="mx-auto mt-4" max-width="800">
      <template v-if="$store.state.loading">
        <v-toolbar dense dark color="indigo darken-2">
          <v-toolbar-title>Blood pressure graph</v-toolbar-title>
        </v-toolbar>
        <p v-if="this.toDate == null" v-show="true">
          {{ (this.toDate = this.$store.state.toDate) }}
        </p>
        <div>
          <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="toDate"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="toDate"
                :prefix="fromDate + ' - '"
                prepend-icon="event"
                x-larg="true"
                v-on="on"
                class="mx-2"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="toDate"
              :max="$store.state.today"
              scrollable
            >
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="setDate(toDate)">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </div>
        <line-chart :chart-data="fillData()" :width="590" :height="200" />
        <v-card class="mx-2" flat>
          <div class="subtitle">Select past data</div>
          <v-slider
            v-model="past"
            min="0"
            max="3"
            :tick-labels="getLabel(SLIDER)"
            ticks="always"
            tick-size="4"
          ></v-slider>
        </v-card>
      </template>
    </v-card>
  </v-app>
</template>

<script>
import dayjs from 'dayjs'
import LineChart from '@/components/LineChart'

export default {
  components: { LineChart },
  data: () => ({
    fromDate: dayjs(new Date())
      .subtract(13, 'day')
      .format('YYYY-MM-DD'),
    toDate: null,
    modal: false,
    past: 0,
    fromPastDate: dayjs(new Date())
      .subtract(1, 'month')
      .format('YYYY-MM-DD'),
    toPastDate: null
  }),

  computed: {
    LBL: () => [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    SLIDER: () => [
      { label: 'A month ago', subVal: 1, period: 'month' },
      { label: '3 months ago', subVal: 3, period: 'month' },
      { label: '6 months ago', subVal: 6, period: 'month' },
      { label: 'A year ago', subVal: 1, period: 'year' }
    ],
    SYSTOLIC: () => 'systolic',
    DIASTOLIC: () => 'diastolic'
  },

  watch: {
    toDate: function(value) {
      this.fromDate = dayjs(value)
        .subtract(13, 'day')
        .format('YYYY-MM-DD')
      this.setPastDate(this.past)
    },

    // ToDo:method only
    past: function(value) {
      this.toPastDate = dayjs(this.toDate)
        .subtract(this.SLIDER[value].subVal, this.SLIDER[value].period)
        .format('YYYY-MM-DD')
      this.fromPastDate = dayjs(this.toPastDate)
        .subtract(13, 'day')
        .format('YYYY-MM-DD')
    }
  },

  methods: {
    setPastDate: function(past) {
      this.toPastDate = dayjs(this.toDate)
        .subtract(this.SLIDER[past].subVal, this.SLIDER[past].period)
        .format('YYYY-MM-DD')
      this.fromPastDate = dayjs(this.toPastDate)
        .subtract(13, 'day')
        .format('YYYY-MM-DD')
    },

    setDate(value) {
      this.$refs.dialog.save(value)
      this.$store.commit('setToDate', value)
    },

    setLb: function(value) {
      return this.LBL.map(function(element) {
        return dayjs(value)
          .subtract(element, 'day')
          .format('M/D')
      })
    },

    getLabel(value) {
      return value
        .map(function(element) {
          return element.label
        })
        .filter(x => x)
    },

    setItem(key, from, to) {
      return this.$store.state.info
        .map(function(element) {
          if (from <= element.date && element.date <= to) {
            return element[key]
          }
        })
        .filter(x => x)
    },

    fillData: function() {
      return {
        labels: this.setLb(this.toDate),
        datasets: [
          {
            title: {
              display: false
            },
            legend: {
              display: false
            }
          },
          {
            yAxisID: 'first-y-axis',
            label: 'systolic',
            borderColor: 'red',
            lineTension: 0,
            data: this.setItem(this.SYSTOLIC, this.fromDate, this.toDate),
            fill: false
          },
          {
            yAxisID: 'second-y-axis',
            label: 'diastolic',
            borderColor: 'indigo',
            lineTension: 0,
            data: this.setItem(this.DIASTOLIC, this.fromDate, this.toDate),
            fill: false
          },
          {
            yAxisID: 'third-y-axis',
            label: 'past-systolic',
            borderColor: '#FFCDD2',
            lineTension: 0,
            data: this.setItem(
              this.SYSTOLIC,
              this.fromPastDate,
              this.toPastDate
            ),
            fill: false
          },
          {
            yAxisID: 'fourth-y-axis',
            label: 'past-diastolic',
            borderColor: '#C5CAE9',
            lineTension: 0,
            data: this.setItem(
              this.DIASTOLIC,
              this.fromPastDate,
              this.toPastDate
            ),
            fill: false
          }
        ]
      }
    }
  }
}
</script>
