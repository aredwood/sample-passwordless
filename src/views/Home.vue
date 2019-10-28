<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="6">
          <h1>Home</h1>

          <div v-if="auth">
            email ->> {{auth['email']}}
            <br />
            uid ->> {{auth['uid']}}
            <br />
            displayName ->> {{auth['displayName']}}
            <br />
            lastSignInTime ->> {{auth.metadata.lastSignInTime}}
            <br />
            creationTime ->> {{auth.metadata.creationTime}}
            <br /><br>
            <v-btn small color="error" block v-on:click="signOut">Signout</v-btn>
          </div>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: ["email", "uid", "displayName"]
    };
  },
  name: "home",
  components: {},
  computed: {
    auth() {
      return this.$store.state.auth;
    },

  },
  methods:{
    signOut(){
      this.$firebase.auth().signOut();
      this.$router.replace("/signin")
    }
  },

  mounted() {}
};
</script>
