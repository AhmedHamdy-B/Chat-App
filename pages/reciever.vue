<template>
<div>
    <h1 v-if="$store.state.status">The Sender Is > Online!</h1>
    <h1 v-if="!$store.state.status">The Sender Is > Offline!</h1>
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
                     
                    <strong v-if="item" :key="index"> {{$store.state.name}}: {{ item }}</strong>
                  </template>
                </v-list>
              </v-card-text>
              
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
  </div>
</template>


<script>
export default {
};
</script>

<style scoped>
strong{
   color:white;
    margin: .5rem;
    background: #601be0 ;
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