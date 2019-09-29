<script>
export default {
  data() {
    return {
      colors: [
        'grey lighten-2',
        'green accent-2',
        'green accent-4',
        'orange',
        'red',
        'purple'
      ]
    }
  },

  methods: {
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
