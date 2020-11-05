<template>
  <header class="header default-block">
    <SwitchLanguage />
    <div class="line-horizontal"></div>
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
