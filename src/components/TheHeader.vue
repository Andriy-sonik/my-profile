<template>
  <header class="header default-block">
    <SwitchLanguage />
    <SwitchTheme />
  </header>
</template>

<script>
import SwitchLanguage from "./ui/SwitchLanguage";
import SwitchTheme from "./ui/SwitchTheme";
export default {
  name: "TheHeader",
  components: {
    SwitchLanguage,
    SwitchTheme
  }
};
</script>

<style scoped></style>
