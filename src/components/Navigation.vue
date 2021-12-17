<template>
  <div class="nav flex">
    <div class="nav__logo">
      <img src="../assets/shared/logo.svg" alt="" />
    </div>
    <span class="nav__line"></span>
    <div class="nav__links-container">
      <ul class="nav__links">
        <li class="nav__link">
          <a href="#" class="nav-text"><span>00</span>HOME</a>
        </li>
        <li class="nav__link">
          <a href="#" class="nav-text"><span>01</span>DESTINATION</a>
        </li>
        <li class="nav__link">
          <a href="#" class="nav-text"><span>02</span>CREW</a>
        </li>
        <li class="nav__link">
          <a href="#" class="nav-text"><span>03</span>TECHNOLOGY</a>
        </li>
      </ul>
    </div>
    <div class="nav__burger">
      <img src="../assets/shared/icon-hamburger.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.nav {
  position: fixed;
  width: 100vw;
  height: 5.5rem;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  &__links-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 15.875rem;
    height: 100vh;
    background-color: hsla(230, 35%, 7%, 0.01);
    backdrop-filter: blur(45px);

    @supports not (backdrop-filter: blur(45px)) {
      background-color: hsla(230, 35%, 7%, 0.975);
    }

    .nav__links {
      margin: 7.5rem 0 0 2rem;

      .nav__link {
        margin-bottom: 1.5rem;
        a {
          text-align: left;
          color: $clr-white;

          span {
            font-weight: 600;
            margin-right: 1em;
          }
        }
      }
    }
  }

  &__logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1.5rem;
  }

  &__burger {
    position: fixed;
    right: 1.5rem;
  }
}
</style>
