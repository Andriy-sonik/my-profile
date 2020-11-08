<template>
  <div class="about">
    <h2 class="title">about</h2>
    <div class="about-row">
      <div class="about-education">
        <TitleFigure title="Education" picture="education.svg" />
        <ul class="about-education--list default-block_inset">
          <li
            class="about-education--item"
            v-for="(item, index) of educations"
            :key="index"
          >
            <h4 class="about-education--item_title">
              <abbr :title="item.abbreviation">
                {{ item.title }}
              </abbr>
            </h4>
            <p class="about-education--item_text">
              <span>Специальность:</span> {{ item.faculty }}
            </p>
            <p class="about-education--item_date">{{ item.date }}</p>
          </li>
        </ul>
      </div>
      <div class="about-skills">
        <TitleFigure title="Skills" picture="laptop-code.svg" />
        <ul class="about-skills--list default-block_inset">
          <li class="about-skills--item" v-for="item of skills" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="about-experience">
      <TitleFigure title="experience" picture="experience.svg" />
      <div class="about-experience--list default-block_inset">
        <li class="about-experience--item">
          <table>
            <tbody>
              <tr>
                <th>Компания:</th>
                <td>
                  <a href="https://webport.technology/">
                    <img
                      src="../assets/images/logo_wpt.svg"
                      alt="logotype company wpt"
                    />WebPortTechnology
                  </a>
                </td>
              </tr>
              <tr>
                <th>Должность:</th>
                <td>Frontend developer Vue.js, верстальщик</td>
              </tr>
              <tr>
                <th>Тип занятости:</th>
                <td>Полный рабочий день</td>
              </tr>
              <tr>
                <th>Дата:</th>
                <td>1 ноября 2018 г. - настоящий час</td>
              </tr>
              <tr>
                <th>Обязанности:</th>
                <td>
                  <p>
                    Верстка нових компонентів / сторінок і внесення правок до
                    вже існуючих, реалізовував локалізацію для проекту, робив
                    різні калькуляції, працював з API, виводив дані, сортував,
                    фільтрував, додавав пагінацію. Працював з Vuex, Vue Router.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import TitleFigure from "../components/ui/TitleFigure";
export default {
  name: "About",
  components: { TitleFigure },
  data() {
    return {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "Vue",
        "React",
        "Git",
        "Webpack"
      ],
      educations: [
        {
          title: "ВНТУ",
          abbreviation: "Винницкий национальний технический университет",
          faculty: "Инженерия программного обеспечения",
          date: "2017-2019"
        },
        {
          title: "БКПЕП",
          abbreviation:
            "Бердичевский колледж промышленности, экономики и права",
          faculty: "Инженерия программного обеспечения",
          date: "2013-2017"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
