<template>
  <div class="selector">
    <button
      v-for="(member, index) in crew"
      :key="index"
      :class="{ selected: member.isSelected }"
      @click="selectCrewMember(member.name)"
    ></button>
  </div>
</template>

<script>
export default {
  name: "SelectMember",
  props: ["crew"],
  methods: {
    selectCrewMember(payload) {
      this.$store.commit("toggleSelectedCrewMember", payload);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../style/scss/setup/index" as *;

.selector {
  display: flex;
  margin-top: 2rem;

  button {
    width: 0.625rem;
    height: 0.625rem;
    border: none;
    border-radius: 50%;
    background: $clr-light-grey;
    cursor: pointer;
  }

  button + button {
    margin-left: 1rem;
  }

  .selected {
    background: $clr-white;
  }
}
</style>
