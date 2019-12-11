<template>
  <v-app id="app" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs5 sm8 md12>
            <v-card class="elevation-12" color="green darken-1
               #43A047 ">
              <v-toolbar dark color="teal darken-4 ">
                <v-toolbar-title>{{toolbar}}</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-list ref="chat" id="logs">
                  <template dark v-for="(item, index) in $store.state.chat">
                    <p :class="`${text}`" v-if="item" :key="index">{{name}}: {{ item }}</p>
                  </template>
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-form @submit.prevent="submit">
                  <v-row class="ml-2">
                    <v-col sm="6">
                      <v-text-field v-model="msg" label="Enter A Message" single-line solo-inverted></v-text-field>
                    </v-col>
                    <v-col sm="2">
                      <v-btn fab dark small color="teal darken-4" type="submit">
                        <v-icon>mdi-send-outline</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col sm="4" class="chat">
                      <slot></slot>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
export default {
  props: ["toolbar", "name", "ActiveStatus",'text', 'text-bg'],
  data() {
    return {
      Active: true,
      // status1: this.$store.state.status1,
      logs: [],
      msg: null
    };
  },
  methods: {
    // switchStatus() {
    //     this.$store.commit("SET_STATUS", this.status);
    // },
    submit() {
      this.$store.commit("SET_CHAT", this.msg);
      this.msg = "";
    }
  },
  watch: {
    //  status1: function() {
    //     this.$store.commit("SET_STATUS1", this.status1);
    // },
    logs() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    }
  }
};
</script>

<style scoped>
/* strong {
  color: white;
  margin: 0.5rem;
  background: #004d40;
  display: block;
} */
#logs {
  height: 300px;
  overflow: auto;
}
.chat {
  padding-bottom: 2rem;
}
</style>