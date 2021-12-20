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
  }

  button:hover {
    border-color: $clr-white;
  }

  button + button {
    margin-left: 1rem;
  }

  .selected {
    background: $clr-white;
    color: $clr-black;
  }
}
</style>
