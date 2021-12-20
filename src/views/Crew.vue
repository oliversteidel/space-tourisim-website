<template>
  <div class="crew">
    <h5><span>02</span>meet your crew</h5>
    <div class="container">
      <div class="crew__member">
        <img
          :src="
            require(`@/assets/crew/image-${selectedCrewMember.name.replace(
              ' ',
              '-'
            )}.webp`)
          "
          class="crew__member__img"
          alt=""
        />
      </div>
      <div class="wrapper">
        <CrewSelector :crew="crew" />
        <CrewInfo :selectedMember="selectedCrewMember" />
      </div>
    </div>
  </div>
</template>

<script>
import CrewSelector from "../components/CrewSelector.vue";
import CrewInfo from "../components/CrewInfo.vue";
export default {
  name: "Crew",
  components: { CrewSelector, CrewInfo },
  computed: {
    crew() {
      return this.$store.state.crew;
    },
    selectedCrewMember() {
      let result;
      this.crew.forEach((member) => {
        if (member.isSelected) {
          result = member;
        }
      });
      return result;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.crew {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 1.5rem 1.5rem 1.5rem;
  background-image: url("../assets/crew/background-crew-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @include mq-up($medium) {
    padding: 8.5rem 2.5rem 0 2.5rem;
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }

  @include mq-up($large) {
    padding: 13.125rem 2rem 0 10rem;
    background-image: url("../assets/crew/background-crew-desktop.jpg");
    justify-content: space-between;
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
    margin-top: 2rem;

    @include mq-up($medium) {
      flex-direction: column-reverse;
      margin-top: 3.75rem;
    }

    @include mq-up($large) {
      flex-direction: row-reverse;
      margin-top: 0;
    }
  }

  &__member {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-bottom: 1px solid $clr-grey;

    @include mq-up($medium) {
      border: none;
    }

    img {
      height: clamp(13.875rem, -3.3rem + 73.28vw, 42.5rem);
    }
  }

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @include mq-up($medium) {
      flex-direction: column-reverse;
    }

    @include mq-up($large) {
      align-items: flex-start;
    }
  }
}
</style>
