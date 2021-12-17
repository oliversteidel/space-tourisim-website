<template>
  <div class="home">
    <div class="wrapper">
      <div class="home__content">
        <h5>so, you want to travel to</h5>
        <h1>space</h1>
        <p class="body-text">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div class="home__cta-container">
        <button class="home__cta">EXPLORE</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;

.home {
  width: 100vw;
  min-height: 100vh;
  padding: 1.5rem;
  background-image: url("../assets/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  .wrapper {
    margin-top: 6rem;
  }

  &__content {
    h5,
    p {
      color: $clr-purple;
    }

    h1 {
      color: $clr-white;
    }
  }

  &__cta-container {
    button {
      width: 9.375rem;
      height: 9.375rem;
      margin-top: 5rem;
      color: $clr-black;
      background: $clr-white;
      border: none;
      border-radius: 50%;
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 1.25px;
    }
  }
}
</style>
