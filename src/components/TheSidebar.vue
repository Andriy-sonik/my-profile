<template>
  <aside class="sidebar default-block">
    <div class="sidebar-picture">
      <div class="sidebar-picture--container">
        <img src="@/assets/images/user.png" class="img-fluid" />
      </div>
    </div>
    <hr class="line" />
    <h1 class="sidebar-username">Andriy Andriychuk</h1>
    <p class="sidebar-profession">Front-end {{ $t("developer") }}</p>
    <hr class="line" />
    <nav class="menu w-100">
      <ul class="menu-list">
        <router-link
          v-for="(link, index) of menuList"
          :key="link.url + index"
          tag="li"
          class="menu-item"
          :to="link.url"
          :exact="link.exact"
          active-class="active"
        >
          <a href="#" class="menu-link">{{ link.title }}</a>
        </router-link>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "TheSidebar",
  data() {
    return {
      menuList: [
        { title: "About", url: "/about", exact: true },
        { title: "Portfolio", url: "/portfolio" },
        { title: "Contact", url: "/contact" }
      ]
    };
  }
};
</script>

<style scoped></style>
