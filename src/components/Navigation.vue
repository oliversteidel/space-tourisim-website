<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }">
      <div class="nav__logo">
        <img src="../assets/shared/logo.svg" alt="" />
      </div>
    </router-link>
    <div class="nav__links-container" :class="{ open: navOpen }">
      <ul class="nav__links">
        <li class="nav__link">
          <router-link
            :to="{ name: 'Home' }"
            class="nav-text"
            @click="toggleNav"
            ><span>00</span>HOME</router-link
          >
        </li>
        <li class="nav__link">
          <router-link
            :to="{ name: 'Destination' }"
            class="nav-text"
            @click="toggleNav"
            ><span>01</span>DESTINATION</router-link
          >
        </li>
        <li class="nav__link">
          <router-link
            :to="{ name: 'Crew' }"
            class="nav-text"
            @click="toggleNav"
            ><span>02</span>CREW</router-link
          >
        </li>
        <li class="nav__link">
          <router-link
            :to="{ name: 'Technology' }"
            class="nav-text"
            @click="toggleNav"
            ><span>03</span>TECHNOLOGY</router-link
          >
        </li>
      </ul>
    </div>
    <div class="nav__burger" @click="toggleNav">
      <img v-if="!navOpen" src="../assets/shared/icon-hamburger.svg" alt="" />
      <img v-if="navOpen" src="../assets/shared/icon-close.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      navOpen: false,
    };
  },
  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.nav {
  position: fixed;
  width: 100vw;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  z-index: 100;

  @include mq-up($large) {
    margin-top: 2.5rem;
  }

  &__links-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 15.875rem;
    height: 100vh;
    background-color: $clr-black-transp;
    backdrop-filter: blur(45px);

    @supports not (backdrop-filter: blur(45px)) {
      background-color: hsla(230, 35%, 7%, 0.975);
    }

    transform: translateX(100%);
    transition: transform 0.25s ease-out;

    @include mq-up($medium) {
      position: relative;
      height: 6rem;
      min-width: 28.125rem;
      transform: translateX(0);
      background-color: hsla(0, 0%, 40%, 0.1); // TODO: adjust color with blur
    }

    @include mq-up($large) {
      min-width: 51.875rem;
    }

    .nav__links {
      margin: 7.5rem 0 0 2rem;

      @include mq-up($medium) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        margin: 0;
      }

      @include mq-up($large) {
        justify-content: center;
      }

      .nav__link {
        position: relative;
        margin-bottom: 1.5rem;

        @include mq-up($medium) {
          margin-bottom: 0;
        }
        a {
          text-align: left;
          color: $clr-white;

          span {
            font-weight: 600;
            margin-right: 1em;

            @include mq-up($medium) {
              display: none;
            }

            @include mq-up($large) {
              display: inline;
            }
          }
        }

        .router-link-active::after {
          @include mq-up($medium) {
            content: "";
            position: absolute;
            top: 3.5rem;
            left: 0;
            width: 100%;
            height: 3px;
            background: $clr-white;
          }
        }
      }

      .nav__link::after {
        content: "";
        position: absolute;
        top: 3.5rem;
        left: 0;
        width: 100%;
        height: 3px;
        background: $clr-nav-hover;
        opacity: 0;
        transition: opacity 0.25s ease-in;
      }

      .nav__link:hover::after {
        opacity: 1;
      }

      .nav__link + .nav__link {
        @include mq-up($large) {
          margin-left: 3rem;
        }
      }
    }
  }

  &__links-container::before {
    @include mq-up($large) {
      position: absolute;
      content: "";
      top: 50%;
      left: calc(-55% - 100vw + 90rem);
      width: calc(60% + 100vw - 90rem);
      height: 2px;
      background-color: $clr-light-grey;
    }
  }

  .open {
    transform: translateX(0);
  }

  &__logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1.5rem;

    @include mq-up($medium) {
      width: 3rem;
      height: 3rem;
      margin-left: 2.4375rem;
    }

    @include mq-up($large) {
      margin-left: 3.4375rem;
    }
  }

  &__burger {
    position: absolute;
    right: 1.5rem;
    cursor: pointer;

    @include mq-up($medium) {
      display: none;
    }
  }
}
</style>
