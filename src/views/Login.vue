<template>
  <div class="login">
    <v-text-field
      v-model="userId"
      prepend-icon="person"
      name="login"
      label="Login"
    ></v-text-field>
    <v-text-field
      v-model="password"
      prepend-icon="lock"
      name="password"
      label="Password"
    ></v-text-field>

    <v-alert color="error" v-if="isError" icon="close">
      The username or passowrd are incorrect
    </v-alert>

    <v-btn rounded color="primary" dark @click.prevent="login">
      Login
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    userId: "",
    password: "",
    isError: false,
  }),
  methods: {
    login() {
      this.$store
        .dispatch("LOGIN", {
          userId: this.userId,
          password: this.password,
        })
        .then((response) => {
          this.$store
            .dispatch("RETRIEVE_DETAIL", response)
            .then(() => {
              console.log(this.$store.state.user.userType);
              console.log(this.$store.state.user.userId);
              if (this.$store.state.user.userType === "student") {
                this.$router.push("/s/home");
              } else {
                this.$router.push("/l/home");
              }
            })
            .catch(console.error);
        })
        .catch(() => {
          this.isError = true;
        });
    },
  },
};
</script>

<style lang="sass" scoped></style>
