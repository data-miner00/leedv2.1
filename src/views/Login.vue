<template lang="pug">
  .login
    main
      .illustration
        img(src="../assets/images/illustration.jpg" height="100%")
      .other
        .logo
          img(src="../assets/icons/logo2.png" height="70")
        .cta 
          .big Where Assignment Meets
          .small Join your friends now.
        form.field-input
          div
            input(type="text" v-model="userId" placeholder="User ID" required)
          div
            input(type="password" v-model="password" placeholder="Password" required)
          div
            input(type="submit" value="Login" @click.prevent="login")
        
    nav
      .link About
      .link Help
      .link Courses
      .link Contact Admin
      .link Institution
      .link Terms of Service
      .link Code of Conduct
      .link Rules and Regulations
      .link Cookies
      .link Advertising
      .link News
      .link Release Note
      .link Tensegrity
      .link Side Note
      .link Settings
      .link &copy; 2021 Leed Pte Ltd.
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

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.login
  display: flex
  flex-direction: column
  height: 100vh
  main
    min-height: auto
    flex: 1 1 auto

    display: flex
    div

      flex-basis: auto
      flex-shrink: 0

    .illustration

      min-height: 45vh
      background: $color4
      flex-grow: 1
      overflow: hidden
      img
        pointer-events: none
        user-select: none
    .other
      min-width: 45vw
      padding: 50px
      .cta
        margin-top: 50px
        .big
          font-size: 3rem
          font-weight: 800
        .small
          font-size: 1.25rem
      .field-input
        margin-top: 200px

        width: 300px
        input
          margin-top: 10px
          padding: 6px 10px
          border: 1px solid #eee
          border-radius: 5px
          outline: none
          font-size: 1.2rem

        input[type=submit]
          width: 100%
          background: $color2
          color: white
          font-weight: 800



  nav
    padding: 12px 16px
    display: flex
    justify-content: center

    .link
      padding: 3px 8px
      color: $color3
      font-size: 13px
      cursor: pointer
      transition: color .2s

      &:hover
        color: $pcolor1
</style>
