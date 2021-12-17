<template>
  <router-view />
</template>

<style lang="scss">
@use "./style/scss/setup/index" as *;
#app {
  text-align: center;
  color: #2c3e50;

  // font-size

  h1 {
    font-size: $fz-500;
    font-weight: 400;
  }

  h2 {
    font-size: $fz-400;
  }

  h3 {
    font-size: $fz-300;
  }

  h4 {
    font-size: $fz-200;
  }

  h5 {
    font-size: $fz-100;
    letter-spacing: 4.75px;
  }

  .subheading1 {
    font-size: 1.75rem;
  }

  .subheading2 {
    font-size: 0.875rem;
    letter-spacing: 2.35px;
  }

  .nav-text,
  .body-text {
    font-size: 1rem;
  }

  .nav-text {
    letter-spacing: 2.7px;
  }

  .body-text {
    line-height: 25px;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
