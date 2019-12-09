<template>
  <v-app id="app" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" color="green darken-1
               #43A047 ">
              <v-toolbar dark color="teal darken-4 ">
                <v-toolbar-title>Chat</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-list ref="chat" id="logs">
                  <template dark v-for="(item, index) in $store.state.chat">
                    <strong v-if="item" :key="index">{{$store.state.name}}: {{ item }}</strong>
                  </template>
                </v-list>
              </v-card-text>
              <v-card-actions>
                <v-form @submit.prevent="submit">
                  <v-row class="ml-2">
                    <v-col sm="6">
                      <v-text-field
                        v-model="msg"
                        label="Enter A Message"
                        single-line
                        solo-inverted
                        :disabled="!status"
                      ></v-text-field>
                    </v-col>
                    <v-col sm="2">
                      <v-btn fab dark small color="teal darken-4" type="submit" :disabled="!status">
                        <v-icon>mdi-send-outline</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col sm="4" class="asd">
                      <v-switch  v-model="status" :label="`Online  Offline`"></v-switch>
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
  middleware: "loggedin",

  data() {
    return {
      status: this.$store.state.status,
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
     status: function() {
        this.$store.commit("SET_STATUS", this.status);
    },
    logs() {
      setTimeout(() => {
        this.$refs.chat.$el.scrollTop = this.$refs.chat.$el.scrollHeight;
      }, 0);
    }
  }
};
</script>

<style scoped>
strong {
  color: white;
  margin: 0.5rem;
  background: #004d40;
  display: block;
}
#logs {
  height: 300px;
  overflow: auto;
}
.asd {
  padding-bottom: 2rem;
}
</style>