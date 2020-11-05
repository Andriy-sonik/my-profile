<template>
  <div class="contact">
    <h2 class="title">Contact Me</h2>
    <button>Download Resume</button>
    <div class="contact-info">
      <div class="contact-info--item"></div>
    </div>
    <div class="contact-social">
      <ul class="contact-social--list">
        <li
          class="contact-social--item"
          v-for="item of socialList"
          :key="item.title"
        >
          <a
            :href="item.url"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <img
              :src="require(`@/assets/icons/${item.nameImg}.svg`)"
              :alt="`logotype ${item.nameImg}`"
              class="img-fluid"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      socialList: [
        {
          nameImg: "github",
          url: "https://github.com/Andriy-sonik"
        },
        {
          nameImg: "google",
          url: "mailto:rubypascal442@gmail.com"
        },
        {
          nameImg: "linkedin",
          url: "https://www.linkedin.com/in/андрій-андрійчук-6415121aa"
        },
        { nameImg: "skype", url: "https://join.skype.com/invite/l8Cs933WrULP" },
        { nameImg: "telegram", url: "tg://resolve?domain=andriy_andrychuk" },
        { nameImg: "phone", url: "tel:0688335740" }
      ]
    };
  }
};
</script>

<style scoped></style>
