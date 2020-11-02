<template>
  <button
    class="switch-theme"
    :class="{ active: getTheme }"
    @click="changeTheme()"
  ></button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SwitchTheme",
  data() {
    return {
      setTheme: false
    };
  },
  computed: {
    ...mapGetters({
      getTheme: "getTheme"
    })
  },
  methods: {
    changeTheme() {
      this.setTheme = !this.setTheme;
      this.$store.commit("SET_TYPE_THEME", this.setTheme);
    }
  }
};
</script>

<style scoped></style>
