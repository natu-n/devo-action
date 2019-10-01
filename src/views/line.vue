<template>
  <v-app>
    <v-card class="mx-auto mt-4" color="grey lighten-4" max-width="800">
      <template v-if="$store.state.loading">
        <p v-if="this.toDate == null" v-show="true">
          {{ (this.toDate = this.$store.state.toDate) }}
        </p>
        <v-row>
          <v-col></v-col>
          <v-col>
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
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="toDate"
                :max="$store.state.today"
                scrollable
              >
                <v-btn text color="primary" @click="modal = false"
                  >Cancel</v-btn
                >
                <v-btn text color="primary" @click="setDate(toDate)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <line-chart :chart-data="fillData()" :width="480" :height="200" />
      </template>
      <template v-if="$store.state.loading">
        <v-slider
          max="3"
          :tick-labels="getLabel(slider)"
          ticks="always"
          tick-size="4"
        ></v-slider>
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
    lbl: [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    fromDate: dayjs(new Date())
      .subtract(13, 'day')
      .format('YYYY-MM-DD'),
    _toDate: null,
    get toDate() {
      return this._toDate
    },
    set toDate(value) {
      this._toDate = value
    },
    xLabel: [],
    modal: false,
    slider: [
      { label: 'A month ago', value: 1, period: 'month' },
      { label: '3 months ago', value: 3, period: 'month' },
      { label: '6 months ago', value: 6, period: 'month' },
      { label: 'A year ago', value: 1, period: 'year' }
    ]
  }),

  computed: {},

  // created: function() {
  //   this.$store.dispatch('getJSON')
  // },

  watch: {
    toDate: function(value) {
      this.fromDate = dayjs(value)
        .subtract(13, 'day')
        .format('YYYY-MM-DD')
      console.log('loading')
    }
  },

  methods: {
    setDate(value) {
      this.$refs.dialog.save(value)
      this.$store.commit('setToDate', value)
    },

    setLb: function(value) {
      return this.lbl.map(function(element, index, array) {
        return dayjs(value)
          .subtract(element, 'day')
          .format('M/D')
      })
    },

    getLabel(value) {
      var _this = this
      return value
        .map(function(element, index, array) {
          return element.label
        })
        .filter(x => x)
    },

    customFilter(value) {
      var _this = this
      return value
        .map(function(element, index, array) {
          if (_this.fromDate <= element.date && element.date <= _this.toDate) {
            return element
          }
        })
        .filter(x => x)
    },

    setSystolic(value) {
      var _this = this
      return value
        .map(function(element, index, array) {
          if (_this.fromDate <= element.date && element.date <= _this.toDate) {
            return element.systolic
          }
        })
        .filter(x => x)
    },

    setDiastolic(value) {
      var _this = this
      return value
        .map(function(element, index, array) {
          if (_this.fromDate <= element.date && element.date <= _this.toDate) {
            return element.diastolic
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
            data: this.setSystolic(this.$store.state.info),
            fill: false
          },
          {
            yAxisID: 'second-y-axis',
            label: 'diastolic',
            borderColor: 'indigo',
            lineTension: 0,
            data: this.setDiastolic(this.$store.state.info),
            fill: false
          }
        ]
      }
    }
  }
}
</script>

<style>
.chart {
  width: 500px;
  height: 500px;
}
</style>
