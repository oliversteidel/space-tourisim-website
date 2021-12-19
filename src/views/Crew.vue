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
      <SelectMember :crew="crew" />
    </div>
  </div>
</template>

<script>
import SelectMember from "../components/SelectMember.vue";
export default {
  name: "Crew",
  components: { SelectMember },
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
    //padding: 8rem 2.5rem 2.5rem 2.5rem;
    background-image: url("../assets/crew/background-crew-tablet.jpg");
  }

  @include mq-up($large) {
    //padding: 12.75rem 10.125rem 0 10.125rem;
    background-image: url("../assets/crew/background-crew-desktop.jpg");
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
  }

  &__member {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid $clr-grey;
    img {
      height: clamp(13.875rem, -13.4367rem + 116.53vw, 42.5rem);
    }
  }
}
</style>
