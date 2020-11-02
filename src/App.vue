<template>
  <div id="app">
    <Main>
      <router-view />
    </Main>
  </div>
</template>
<script>
import Main from "./layouts/Main";
export default {
  components: {
    Main
  }
};
</script>
<style lang="scss"></style>
