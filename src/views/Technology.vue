<template>
  <div class="tech">
    <h5><span>03</span>space launch 101</h5>
    <div class="container">
      <div class="tech__img-wrapper">
        <picture>
          <source
            :srcset="
              require(`@/assets/technology/image-${selectedTech.imgStringPortrait}.jpg`)
            "
            media="(min-width: 1440px)"
          />
          <img
            :src="
              require(`@/assets/technology/image-${selectedTech.imgStringLandscape}.jpg`)
            "
            alt=""
          />
        </picture>
      </div>
      <TechSelector :techs="techs" />
      <TechInfo :selectedTech="selectedTech" />
    </div>
  </div>
</template>

<script>
import TechSelector from "../components/TechSelector.vue";
import TechInfo from "../components/TechInfo.vue";
export default {
  name: "Technology",
  components: { TechSelector, TechInfo },
  computed: {
    techs() {
      return this.$store.state.techs;
    },
    selectedTech() {
      let result;
      this.techs.forEach((tech) => {
        if (tech.isSelected) {
          result = tech;
        }
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;

.tech {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1.5rem 1.5rem 1.5rem;
  background-image: url("../assets/technology/background-technology-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @include mq-up($medium) {
    padding: 8.5rem 2.5rem 0 2.5rem;
    background-image: url("../assets/technology/background-technology-tablet.jpg");
  }

  @include mq-up($large) {
    padding: 13.125rem 0 0 10rem;
    background-image: url("../assets/technology/background-technology-desktop.jpg");
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
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq-up($large) {
      //width: 100vw;
      flex-direction: row;
    }
  }

  &__img-wrapper {
    width: 100vw;
    margin-top: 2rem;

    @include mq-up($large) {
      order: 3;
      display: flex;
      justify-content: flex-end;
    }

    img {
      min-height: 10.625rem;
    }
  }
}
</style>
