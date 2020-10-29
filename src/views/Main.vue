<template>
  <div class="wrapper">
    <TheHeader />
    <main class="main">
      <TheSidebar />
      <div class="default-block">main</div>
    </main>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheSidebar from "../components/TheSidebar";
export default {
  name: "Main",
  components: {
    TheHeader,
    TheSidebar
  }
};
</script>
