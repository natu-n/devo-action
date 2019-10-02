<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  name: 'LineChart',
  mixins: [reactiveProp],
  extends: Line,
  data: () => ({
    options: {
      title: {
        display: false
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            stacked: false,
            gridLines: {
              display: false
            }
          }
        ],
        yAxes: [
          {
            id: 'first-y-axis',
            display: true,
            gridLines: {
              drawBorder: false
            },
            ticks: {
              autoSbeginatZero: false,
              suggestedMin: 70,
              suggestedMax: 150
            }
          },
          {
            id: 'second-y-axis',
            display: false,
            gridLines: {
              drawBorder: false
            },
            ticks: {
              autoSbeginatZero: false,
              suggestedMin: 70,
              suggestedMax: 150
            }
          },
          {
            id: 'third-y-axis',
            display: false,
            gridLines: {
              drawBorder: false
            },
            ticks: {
              autoSbeginatZero: false,
              suggestedMin: 70,
              suggestedMax: 150
            }
          },
          {
            id: 'fourth-y-axis',
            display: false,
            gridLines: {
              drawBorder: false
            },
            ticks: {
              autoSbeginatZero: false,
              suggestedMin: 70,
              suggestedMax: 150
            }
          }
        ]
      }
    }
  }),

  mounted: function() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
