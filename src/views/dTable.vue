<template>
  <v-app>
    <v-card class="mx-auto mt-4" width="600" height="606">
      <template v-if="$store.state.loading">
        <v-toolbar dense dark color="indigo darken-2">
          <v-toolbar-title>Daily blood pressure</v-toolbar-title>
        </v-toolbar>
        <p v-if="this.toDate == null" v-show="true">
          {{ (this.toDate = this.$store.state.toDate) }}
        </p>
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
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="toDate" :max="$store.state.today" scrollable>
            <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
            <v-btn text color="primary" @click="setDate(toDate)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
        <v-card class="mx-1" width="592" flat outlined>
          <v-data-table
            fixed-header
            :headers="headers"
            :items="this.$store.state.info"
            :items-per-page="14"
            search="search"
            :sort-by="['date']"
            :sort-desc="['true']"
            :custom-filter="customFilter"
            :footer-props="{
              showFirstLastPage: true,
              firstIcon: 'first_page',
              lastIcon: 'last_page',
              prevIcon: 'chevron_left',
              nextIcon: 'chevron_right',
              itemsPerPageOptions: [7, 14, 30]
            }"
            height="420px"
            dense
          >
            <template v-slot:item.date="{ item }">
              {{ cvtDate(item.date) }}
            </template>
            <template v-slot:item.systolic="{ item }">
              <v-chip
                :color="getSystolicColor(item.systolic)"
                :outlined="getSystolicColor(item.systolic) == 'grey darken-1'"
                dark
                small
                >{{ item.systolic }}</v-chip
              >
            </template>
            <template v-slot:item.diastolic="{ item }">
              <v-chip
                :color="getDiastolicColor(item.diastolic)"
                :outlined="getDiastolicColor(item.diastolic) == 'grey darken-1'"
                dark
                small
                >{{ item.diastolic }}</v-chip
              >
            </template>
          </v-data-table>
        </v-card>
      </template>
    </v-card>
  </v-app>
</template>

<script>
import Utilities from '@/components/Utilities'
import dayjs from 'dayjs'

export default {
  mixins: [Utilities],
  data: () => ({
    headers: [
      {
        text: 'date',
        align: 'center',
        value: 'date',
        sortable: false,
        width: '100px'
      },
      {
        text: 'systolic',
        align: 'center',
        value: 'systolic',
        sortable: false,
        width: '75px'
      },
      {
        text: 'diastolic',
        align: 'center',
        value: 'diastolic',
        sortable: false,
        width: '75px'
      }
    ],
    page: 1,
    toDate: null,
    modal: false
  }),

  methods: {
    setDate(value) {
      this.$refs.dialog.save(value)
      this.$store.commit('setToDate', value)
    },

    customFilter(value, search, item) {
      return this.fromDate <= value && value <= this.toDate
    },

    cvtDate(date) {
      return dayjs(date).format('M/D/YYYY')
    }
  },

  computed: {
    fromDate: function() {
      return dayjs(this.toDate)
        .subtract(1, 'month')
        .format('YYYY-MM-DD')
    }
  }
}
</script>

<style>
/* ToDo:ヘッダの色指定 */
.v-data-table-header tr {
  background-color: #7986cb;
}
.v-data-table tbody tr:nth-of-type(even) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
