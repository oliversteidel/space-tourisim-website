<template>
  <div class="selector">
    <button
      v-for="(tech, index) in techs"
      :key="index"
      :class="{ selected: tech.isSelected }"
      @click="selectTech(tech.name)"
    >
      {{ index + 1 }}
    </button>
  </div>
</template>

<script>
export default {
  name: "TechSelector",
  props: ["techs"],
  methods: {
    selectTech(payload) {
      this.$store.commit("toggleSelectedTech", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;

.selector {
  display: flex;
  margin: 2.125rem 0 1.625rem 0;

  @include mq-up($medium) {
    margin: 3.5rem 0 2.8125rem 0;
  }

  @include mq-up($large) {
    height: 18.75rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 5rem;
  }

  button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
    color: $clr-white;
    background: transparent;
    border-radius: 50%;
    border: 1px solid $clr-nav-hover;
    transition: border-color 0.3s ease-in;
    cursor: pointer;

    @include mq-up($medium) {
      width: 3.625rem;
      height: 3.625rem;
      font-size: 1.5rem;
    }

    @include mq-up($large) {
      width: 5rem;
      height: 5rem;
      font-size: 2rem;
    }
  }

  button:hover {
    border-color: $clr-white;
  }

  button + button {
    margin-left: 1rem;

    @include mq-up($large) {
      margin-left: 0;
    }
  }

  .selected {
    background: $clr-white;
    color: $clr-black;
  }
}
</style>
