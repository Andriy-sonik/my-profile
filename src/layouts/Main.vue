<template>
  <div class="wrapper" :class="{ 'dark-theme': getTheme }">
    <div class="container">
      <TheHeader />
      <main class="main">
        <TheSidebar />
        <div class="default-block">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TheHeader from "../components/TheHeader";
import TheSidebar from "../components/TheSidebar";
export default {
  name: "Main",
  components: {
    TheHeader,
    TheSidebar
  },
  computed: {
    ...mapGetters({
      getTheme: "getTheme"
    })
  }
};
</script>
