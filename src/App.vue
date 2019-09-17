<template>
  <v-app>
    <!--  menu  -->
    <v-app-bar app>
      <v-btn @click.stop="drawer = !drawer" icon>
        <v-icon>list</v-icon>
      </v-btn>

      <v-navigation-drawer v-model="drawer" absolute temporary height="400">
        <v-list>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

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
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard', link: '/' },
        { title: 'About', icon: 'event_note', link: '/about' },
        { title: 'contact', icon: 'question_answer', link: '/contact' },
        { title: 'table', icon: 'question_answer', link: '/axios' },
        { title: 'chart', icon: 'show_chart', link: '/line' }
      ]
    }
  },
  created: function() {
    this.$store.dispatch('getJSON')
  }
})
</script>
