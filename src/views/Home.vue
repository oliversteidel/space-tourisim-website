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
        <router-link :to="{ name: 'Destination' }" class="home__cta"
          >EXPLORE</router-link
        >
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
  height: 100vh;
  padding: 1.5rem;
  background-image: url("../assets/home/background-home-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @include mq-up($medium) {
    background-image: url("../assets/home/background-home-tablet.jpg");
  }

  @include mq-up($large) {
    background-image: url("../assets/home/background-home-desktop.jpg");
  }

  .wrapper {
    margin-top: 6rem;

    @include mq-up($medium) {
      margin-top: 12rem;
    }

    @include mq-up($large) {
      display: flex;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    h5,
    p {
      color: $clr-purple;
    }

    p {
      max-width: 49ch;
      line-height: 28;
    }

    h1 {
      color: $clr-white;
    }

    @include mq-up($large) {
      width: 100%;
      padding: 8.8125rem;
      align-items: flex-start;
      justify-content: flex-end;
      text-align: left;
    }
  }

  &__cta-container {
    display: flex;
    justify-content: center;
    @include mq-up($large) {
      width: 100%;
      padding: 8.8125rem;
      align-items: flex-end;
      justify-content: flex-end;
    }
    .home__cta {
      display: grid;
      place-items: center;
      position: relative;
      width: 9.375rem;
      height: 9.375rem;
      margin-top: 5rem;
      color: $clr-black;
      background: $clr-white;
      border-radius: 50%;
      font-size: 1.25rem;
      font-weight: 400;
      letter-spacing: 1.25px;
      outline: 100px solid transparent;
      transition: outline-color 0.25s ease-out;
      cursor: pointer;

      @include mq-up($medium) {
        width: 15.125rem;
        height: 15.125rem;
        margin-top: 6.5rem;
        font-size: 2rem;
        letter-spacing: 2px;
      }

      @include mq-up($large) {
        width: 17.125rem;
        height: 17.125rem;
      }
    }

    .home__cta:hover {
      outline-color: $clr-light-grey;
    }
  }
}
</style>
