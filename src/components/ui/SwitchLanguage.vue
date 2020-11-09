<template>
  <div class="language">
    <p class="language-name">
      {{ fullNameLanguage($i18n.locale) }}
    </p>
    <div class="language-list">
      <template v-for="(item, index) in localList">
        <span
          :key="`lang${index}`"
          v-if="item.iso != $i18n.locale"
          @click="setLanguage(item.iso)"
        >
          {{ item.title }}
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchLanguage",
  data() {
    return {
      localList: {
        ru: { iso: "ru", title: "Russian" },
        en: { iso: "en", title: "English" }
      }
    };
  },
  methods: {
    fullNameLanguage(data) {
      return this.localList[data].title;
    },
    setLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang);
    }
  }
};
</script>

<style scoped></style>
