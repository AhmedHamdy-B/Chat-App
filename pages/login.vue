<template>
  <div id="app">
       <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
       :timeout="timeout"
    >
      Please Enter A Name
      <button
      class="close"
        text
        @click="snackbar = false"
      >
        Close
      </button>
    </v-snackbar>
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="teal darken-4" dark flat>
                  <v-toolbar-title>Login Chat</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit.prevent="login()">
                    <v-row>
                      <v-icon left>mdi-account</v-icon>
                      <v-text-field v-model="name" label="UserName" name="login" type="text"></v-text-field>
                    </v-row>
                     <!-- <v-row>
                       <v-icon left>mdi-lock-question </v-icon>
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      
                      type="password"
                    ></v-text-field>
                    </v-row> -->
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="login()" class="login_btn" color="teal darken-4 white--text">Login</v-btn>
                </v-card-actions>
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
    data() {
    return {
         multiLine: true,
      snackbar: false,
      timeout: 200,
      name:null
    };
  },
    methods:{
        login(){
            if(this.name){
            this.$router.push("/chat")
            this.$store.commit("SET_CURRENT_USER_NAME", this.name);
             this.$store.commit("SET_USER", this.name + "1d5qw1d5q1w");
             }
             else{
                 this.snackbar = true
             }
        }
    }
};
</script>
<style scoped>
.v-btn:not(.v-btn--round).v-size--default {
    min-width: 80%;
    margin:0% 10% 5% 0%;
    

}
.v-card__actions{
  text-align: center;
}

</style>

