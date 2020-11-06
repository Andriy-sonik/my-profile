<template>
  <div class="portfolio">
    <h2 class="title">My Work</h2>
    <div class="portfolio-list">
      <div
        class="portfolio-item"
        v-for="(item, index) of listTechnologies"
        :key="index"
        :style="{
          background: `url(${require(`@/assets/images/${item.picture}`)})center center no-repeat`
        }"
      >
        <span class="portfolio-item--desc">
          Кількість проектів на {{ item.technology }}:
          {{ item.numberProjects }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      listTechnologies: [
        { technology: "Vue", numberProjects: 0, picture: "vue.svg" },
        { technology: "React", numberProjects: 0, picture: "react.svg" },
        { technology: "JS", numberProjects: 0, picture: "javascript.svg" }
      ]
    };
  }
};
</script>

<style scoped></style>
