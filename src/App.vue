<template>
  <v-app>
    <v-app-bar app dense>
      <v-tabs align-with-title slider-size="6" background-color="transparent">
        <v-tabs-slider color="blue"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item.title" :to="item.link">
          <v-icon>{{ item.icon }}</v-icon>
          <div class="ml-1">
            {{ item.title }}
          </div>
        </v-tab>
      </v-tabs>

      <v-tabs-items>
        <v-tab-item v-for="item in items" :key="item.title"> </v-tab-item>
      </v-tabs-items>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', link: '/' },
        { title: 'About', icon: 'event_note', link: '/about' },
        { title: 'contact', icon: 'question_answer', link: '/contact' },
        {
          title: 'Daily',
          icon: 'table_chart',
          link: '/table'
        },
        {
          title: 'graph',
          icon: 'multiline_chart',
          link: '/line'
        },
        { title: 'test01', icon: 'event_note', link: '/test01' }
      ]
    }
  },
  created: function() {
    this.$store.dispatch('getJSON')
  }
})
</script>
