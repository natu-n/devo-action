<template>
  <v-app>
    <v-container>
      <template v-if="$store.state.loading">
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
      </template>

      <v-data-table
        class="elevation-1"
        :dense="true"
        :headers="headers"
        :items="this.$store.state.info"
        :items-per-page="14"
        search="search"
        :fixed-header="true"
        :sort-by="['date']"
        :sort-desc="['true']"
        :custom-filter="customFilter"
        :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
          itemsPerPageOptions: [7, 14, 30]
        }"
        height="450px"
      >
        <template v-slot:item.date="{ item }">
          <td>{{ cvtDate(item.date) }}</td>
        </template>
        <template v-slot:item.systolic="{ item }">
          <v-chip :color="getSystolicColor(item.systolic)" dark small>{{
            item.systolic
          }}</v-chip>
        </template>
        <template v-slot:item.diastolic="{ item }">
          <v-chip :color="getDiastolicColor(item.diastolic)" dark small>{{
            item.diastolic
          }}</v-chip>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script>
import Utilities from '@/components/Utilities'
import dayjs from 'dayjs'

export default {
  mixins: [Utilities],
  data: () => ({
    headers: [
      { text: 'date', align: 'center', value: 'date', sortable: false },
      { text: 'systolic', align: 'center', value: 'systolic', sortable: false },
      {
        text: 'diastolic',
        align: 'center',
        value: 'diastolic',
        sortable: false
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
        .add(-1, 'month')
        .format('YYYY-MM-DD')
    }
  }
}
</script>

<style>
.v-data-table tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
