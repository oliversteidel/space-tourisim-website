<template>
  <div class="nav flex">
    <div class="nav__logo">
      <img src="../assets/shared/logo.svg" alt="" />
    </div>
    <span class="nav__line"></span>
    <div class="nav__links-container">
      <ul class="nav__links">
        <li class="nav__link"><a href="#" class="nav-text">00 HOME</a></li>
        <li class="nav__link">
          <a href="#" class="nav-text">01 DESTINATION</a>
        </li>
        <li class="nav__link"><a href="#" class="nav-text">02 CREW</a></li>
        <li class="nav__link">
          <a href="#" class="nav-text">03 TECHNOLOGY</a>
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
.nav {
  position: fixed;
  width: 100vw;
  height: 5.5rem;
  align-items: center;
  justify-content: space-between;
  background: transparent;

  &__logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 1.5rem;
  }

  &__burger {
    margin-right: 1.5rem;
  }
}
</style>
