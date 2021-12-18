<template>
  <div class="destination">
    <h5><span>01</span>pick your destination</h5>
    <div class="destination__planet">
      <img
        src="..\assets\destination\image-moon.webp"
        alt=""
        class="destination__planet__img"
      />
    </div>
    <div class="destination__info">
      <MoonSelector :moons="moons" />
    </div>
  </div>
</template>

<script>
import MoonSelector from "../components/MoonSelector.vue";
export default {
  name: "Destination",
  components: { MoonSelector },
  computed: {
    moons() {
      return this.$store.state.moons;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.destination {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 6rem;
  background-image: url("../assets/destination/background-destination-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  h5 {
    text-transform: uppercase;
    color: $clr-white;

    span {
      font-weight: 600;
      color: $clr-grey;
      margin-right: 1rem;
    }
  }

  &__planet {
    display: grid;
    place-items: center;
    width: 100%;
    padding: 1.875rem;

    &__img {
      width: 10.625rem;
      height: auto;
    }
  }
}
</style>
