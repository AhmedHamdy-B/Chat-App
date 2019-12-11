<template>
  <v-app id="app" class="primary">
    <v-row>
      <v-col>
    <ChatComponent :ActiveStatus="ActiveStatus1" :toolbar="sender" :text="senderText" :name="$store.state.name">
       <v-switch  v-model="ActiveStatus1" :label="`Online  Offline`"></v-switch>
       <p  v-if="$store.state.status2" class="online font-weight-black ">Reciever Online</p>
       <p  v-if="!$store.state.status2" class="offline font-weight-black  ">Reciever Offline</p>
    </ChatComponent>
    </v-col>
    <v-col>
    <ChatComponent :ActiveStatus="ActiveStatus2" :toolbar="reciever"  :text="recieverText" :name="reciever">
       <v-switch  v-model="ActiveStatus2" :label="`Online  Offline`"></v-switch>
       <p  v-if="$store.state.status1" class="online font-weight-black"> {{$store.state.name}}  Online</p>
       <p v-if="!$store.state.status1" class="offline font-weight-black">{{$store.state.name}}  Offline</p>
    </ChatComponent>
    </v-col>
</v-row>
    <!-- <v-content>
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
                        :disabled="!status1"
                      ></v-text-field>
                    </v-col>
                    <v-col sm="2">
                      <v-btn fab dark small color="teal darken-4" type="submit" :disabled="!status1">
                        <v-icon>mdi-send-outline</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col sm="4" class="asd">
                      <v-switch  v-model="status1" :label="`Online  Offline`"></v-switch>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
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
                        :disabled="!status2"
                      ></v-text-field>
                    </v-col>
                    <v-col sm="2">
                      <v-btn fab dark small color="teal darken-4" type="submit" :disabled="!status2">
                        <v-icon>mdi-send-outline</v-icon>
                      </v-btn>
                    </v-col>
                    <v-col sm="4" class="asd">
                      <v-switch  v-model="status2" :label="`Online  Offline`"></v-switch>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content> -->
  </v-app>
</template>


<script>
import ChatComponent from "~/components/ChatComponent";
export default {
  middleware: "loggedin",
  components:{ChatComponent},
  data() {
    return {
      senderText:"orange--text ml-4 font-weight-black",
      recieverText:"pink--text ml-4 font-weight-black",
      sender:this.$store.state.name,
      reciever:"Reciever",
      ActiveStatus1: this.$store.state.status1,
      ActiveStatus2: this.$store.state.status2,
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
     ActiveStatus1: function() {
        this.$store.commit("SET_STATUS_SENDER", this.ActiveStatus1);
      console.log(this.$store.state.status1)
    },
     ActiveStatus2: function() {
        this.$store.commit("SET_STATUS_RECIEVER", this.ActiveStatus2);
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

.online{
color: rgb(9, 255, 0) 
}
/* .offline{
  color: rgb(255, 72, 0)
} */
</style>