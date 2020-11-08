<template>
  <figure class="caption">
    <div class="caption-container--img">
      <img
        v-if="picture"
        :src="require(`@/assets/icons/${picture}`)"
        class="img-fluid caption-img"
        alt="icon education"
      />
    </div>
    <figcaption class="caption-text">{{ title }}</figcaption>
  </figure>
</template>

<script>
export default {
  name: "TitleFigure",
  props: {
    title: {
      type: String,
      default: ""
    },
    picture: {
      type: String,
      default: "empty.svg"
    }
  }
};
</script>

<style scoped></style>
