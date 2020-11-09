<template>
  <div id="app">
    <components is="Main">
      <router-view />
    </components>
  </div>
</template>
<script>
import Main from "./layouts/Main";

export default {
  components: { Main }
};
</script>
<style lang="scss"></style>
