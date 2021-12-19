<template>
  <div class="crew-info">
    <h4>{{ selectedMember.title }}</h4>
    <h3>{{ selectedMember.name }}</h3>
    <p class="body-text">{{ selectedMember.descText }}</p>
  </div>
</template>

<script>
export default {
  name: "CrewInfo",
  props: ["selectedMember"],
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.crew-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  h4 {
    color: $clr-nav-hover;
  }

  h3 {
    color: $clr-white;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
  }
}
</style>
