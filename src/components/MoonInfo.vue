<template>
  <div class="moon">
    <h2 class="moon__name">{{ moon.name }}</h2>
    <p class="moon__description body-text">{{ moon.descText }}</p>
    <span class="line"></span>
    <div class="container">
      <div class="wrapper">
        <p class="subheading2">avg. distance</p>
        <p class="subheading1">{{ moon.distance }}</p>
      </div>
      <div class="wrapper">
        <p class="subheading2">est. travel time</p>
        <p class="subheading1">{{ moon.travelTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoonInfo",
  props: ["moon"],
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.moon {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem;

  @include mq-up($large) {
    align-items: flex-start;
  }
  h2,
  .subheading1 {
    color: $clr-white;
  }

  p {
    text-align: center;
    color: $clr-purple;

    @include mq-up($large) {
      text-align: left;
    }
  }

  &__name {
    margin-top: 0.5rem;
  }

  &__description {
    margin-bottom: 2rem;
    max-width: 63ch;

    @include mq-up($medium) {
      margin-bottom: 3.125rem;
    }
  }

  .line {
    display: block;
    width: 100%;
    height: 1px;
    background-color: $clr-light-grey;
    margin-bottom: 2rem;
  }

  .container {
    width: 100%;
    @include mq-up($medium) {
      display: flex;
      justify-content: space-around;
    }
    @include mq-up($large) {
      justify-content: flex-start;
    }

    .subheading1 {
      margin-bottom: 2rem;
    }

    .subheading2 {
      margin-bottom: 0.5rem;
    }

    .wrapper:first-child {
      @include mq-up($large) {
        margin-right: 4rem;
      }
    }
  }
}
</style>
