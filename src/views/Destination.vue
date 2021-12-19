<template>
  <div class="destination">
    <h5><span>01</span>pick your destination</h5>
    <div class="container">
      <div class="destination__planet">
        <img
          :src="require(`@/assets/destination/image-${selectedMoon.name}.webp`)"
          alt=""
        />
      </div>
      <div class="destination__info">
        <MoonSelector :moons="moons" />
        <MoonInfo :moon="selectedMoon" />
      </div>
    </div>
  </div>
</template>

<script>
import MoonSelector from "../components/MoonSelector.vue";
import MoonInfo from "../components/MoonInfo.vue";

export default {
  name: "Destination",
  components: { MoonSelector, MoonInfo },
  computed: {
    moons() {
      return this.$store.state.moons;
    },
    selectedMoon() {
      let result;
      this.moons.forEach((moon) => {
        if (moon.isSelected) {
          result = moon;
        }
      });
      return result;
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
  padding: 6rem 1.5rem 1.5rem 1.5rem;
  background-image: url("../assets/destination/background-destination-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @include mq-up($medium) {
    padding: 8rem 2.5rem 2.5rem 2.5rem;
    background-image: url("../assets/destination/background-destination-tablet.jpg");
  }

  @include mq-up($large) {
    padding: 12.75rem 10.125rem 0 10.125rem;
    background-image: url("../assets/destination/background-destination-desktop.jpg");
  }

  h5 {
    text-transform: uppercase;
    color: $clr-white;

    @include mq-up($medium) {
      align-self: flex-start;
    }

    span {
      font-weight: 600;
      color: $clr-grey;
      margin-right: 1rem;
    }
  }

  .container {
    @include mq-up($large) {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 4rem;
    }
    @include mq-up($x-large) {
      max-width: 120rem;
      padding: 0 5vw 0 5vw;
    }
  }

  &__planet {
    display: grid;
    place-items: center;
    width: 100%;
    margin: 1.875rem 0;

    @include mq-up($medium) {
      margin: 3.75rem 0 3.3125rem 0;
    }

    @include mq-up($large) {
      justify-content: start;
      width: 90%;
    }

    img {
      width: 10.625rem;
      height: auto;

      @include mq-up($medium) {
        width: 18.75em;
      }

      @include mq-up($large) {
        width: 27.8125rem;
        margin-left: 1.5rem;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
