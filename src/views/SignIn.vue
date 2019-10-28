<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                  <v-text-field label="Login" name="login" type="text" v-model="email"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    v-if="showPassword"
                  ></v-text-field>
                <span v-if="loginEmailSent">A link has been sent to your email</span>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="this.login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String,
    showPassword: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      actionCodeSettings: {
        // TODO do NOT use this in prod
        url: `${window.location.origin}/callback`,
        handleCodeInApp: true
      },
      email: "",
      loginEmailSent: false
    };
  },
  methods: {
    async login() {
      await this.$firebase
        .auth()
        .sendSignInLinkToEmail(this.email, this.actionCodeSettings);
      localStorage.setItem("email", this.email);
      this.loginEmailSent = true;
    }
  }
};
</script>