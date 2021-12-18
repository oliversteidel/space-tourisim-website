<template>
  <div class="wrapper">
    <ul class="selector-list">
      <li
        class="selector-list__item nav-text"
        :class="{ selected: moon.isSelected }"
        v-for="(moon, index) in moons"
        :key="index"
        @click="selectMoon(moon.name)"
      >
        {{ moon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PlanetSelector",
  props: ["moons"],
  methods: {
    selectMoon(payload) {
      this.$store.commit("toggleSelectedMoon", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;
.selector-list {
  display: flex;

  &__item {
    color: $clr-purple;
    transition: color 0.3s ease-out;
    cursor: pointer;
  }

  li + li {
    margin-left: 1.5rem;
  }

  .selected {
    position: relative;
    color: $clr-white;
  }

  .selected::after {
    content: "";
    position: absolute;
    top: 125%;
    left: 0;
    width: 95%;
    height: 3px;
    background-color: $clr-white;
  }
}
</style>
