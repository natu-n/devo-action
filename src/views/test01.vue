<template>
  <v-dialog v-model="drawer" class="justify-start" height="300" width="300">
    <v-navigation-drawer permanent width="100%">
      <v-row class="fill-height">
        <v-navigation-drawer
          dark
          mini-variant
          mini-variant-width="46"
          permanent
        >
          <v-list nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              :to="item.link"
            >
              <v-layout justify-space-between>
                <v-list-item-action>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
              </v-layout>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>

        <v-list class="grow" nav>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-row>
    </v-navigation-drawer>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', link: '/' },
        { title: 'About', icon: 'event_note', link: '/about' },
        { title: 'contact', icon: 'question_answer', link: '/contact' },
        {
          title: 'Daily blood pressure',
          icon: 'table_chart',
          link: '/table'
        },
        {
          title: 'Blood pressure graph',
          icon: 'multiline_chart',
          link: '/line'
        }
      ],
      drawer2: true
    }
  }
}
</script>
