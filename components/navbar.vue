<template>
  <div >
    <v-toolbar >
      <v-toolbar-title><nuxt-link to="/"> Chat App</nuxt-link></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <h1 v-if="$store.state.name">Welcome:
       {{$store.state.name}}</h1>
        <v-btn text v-if="!$store.state.name"><nuxt-link to="/login"> Login</nuxt-link></v-btn>
        <v-btn text v-if="$store.state.name" @click="logout()"><nuxt-link to="/"> Logout</nuxt-link></v-btn>
         <v-btn text v-if="$store.state.name"><nuxt-link to="/chat"> Chat</nuxt-link></v-btn>
        <v-btn text><nuxt-link to="/reciever"> Reciever</nuxt-link></v-btn>
      </v-toolbar-items>

      
    </v-toolbar>
  </div>
</template>

<script>
export default {
methods:{
  logout(){
    this.$store.commit("SET_CURRENT_USER_NAME", null);
    this.$store.commit("SET_USER", null);
    this.$router.push("/login")
  }
}
}
</script>


<style >
h1{
  color: teal;
  padding-top: 1rem;
}
a {
  size: 100%;
  text-transform:capitalize;
  text-decoration: none;
}
</style>