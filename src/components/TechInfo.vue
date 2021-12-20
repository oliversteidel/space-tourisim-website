<template>
  <div class="tech-info">
    <h5>the terminology...</h5>
    <h3>{{ selectedTech.name }}</h3>
    <p class="body-text">{{ selectedTech.descText }}</p>
  </div>
</template>

<script>
export default {
  name: "TechInfo",
  props: ["selectedTech"],
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.tech-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include mq-up($large) {
    align-items: flex-start;
  }

  h5 {
    color: $clr-purple;
    margin-bottom: 0.5rem;
  }

  h3 {
    color: $clr-white;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    max-width: 50ch;

    @include mq-up($large) {
      text-align: left;
      max-width: 47ch;
    }
  }
}
</style>
