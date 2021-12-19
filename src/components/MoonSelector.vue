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

.wrapper {
  width: 100%;
  display: flex;
  justify-content: center;

  @include mq-up($large) {
    justify-content: flex-start;
  }
}
.selector-list {
  display: flex;

  &__item {
    position: relative;
    color: $clr-purple;
    transition: color 0.3s ease-out;
    cursor: pointer;
  }

  &__item::before {
    content: "";
    position: absolute;
    top: 125%;
    left: 0;
    width: 95%;
    height: 3px;
    background-color: $clr-nav-hover;
    opacity: 0;
    transition: opacity 0.25s ease-in;
  }

  &__item:hover::before {
    opacity: 1;
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
    z-index: 99;
  }
}
</style>
