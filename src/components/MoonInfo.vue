<template>
  <div class="moon">
    <h2 class="moon__name">{{ moon.name }}</h2>
    <p class="moon__description body-text">{{ moon.descText }}</p>
    <span class="line"></span>
    <p class="subheading2">avg. distance</p>
    <p class="subheading1">{{ moon.distance }}</p>
    <p class="subheading2">est. travel time</p>
    <p class="subheading1">{{ moon.travelTime }}</p>
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
  h2,
  .subheading1 {
    color: $clr-white;
  }

  p {
    text-align: center;
    color: $clr-purple;
  }

  &__description {
    margin-bottom: 2rem;
  }

  .line {
    display: block;
    width: 100%;
    height: 2px;
    background-color: $clr-light-grey;
    margin-bottom: 2rem;
  }

  .subheading1 {
    margin-bottom: 2rem;
  }

  .subheading2 {
    margin-bottom: 0.5rem;
  }
}
</style>
