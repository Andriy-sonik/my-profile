<template>
  <div class="about">
    <h2 class="title">{{ $t("about") }}</h2>
    <div class="about-row">
      <div class="about-education">
        <TitleFigure :title="$t('education')" picture="education.svg" />
        <ul class="about-education--list default-block_inset">
          <li
            class="about-education--item"
            v-for="item of educations"
            :key="item.title"
          >
            <h4 class="about-education--item_title">
              <abbr :title="item.abbreviation">
                {{ item.title }}
              </abbr>
            </h4>
            <p class="about-education--item_text">
              <span>{{ $t("specialty") }}:</span> {{ $t(item.faculty) }}
            </p>
            <p class="about-education--item_date">{{ item.date }}</p>
          </li>
        </ul>
      </div>
      <div class="about-skills">
        <TitleFigure :title="$t('skills')" picture="laptop-code.svg" />
        <ul class="about-skills--list default-block_inset">
          <li class="about-skills--item" v-for="item of skills" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="about-experience">
      <TitleFigure :title="$t('experience')" picture="experience.svg" />
      <div class="about-experience--list default-block_inset">
        <li class="about-experience--item">
          <table>
            <tbody>
              <tr>
                <th>{{ $t("company") }}:</th>
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
                <th>{{ $t("position") }}:</th>
                <td>
                  {{
                    `Frontend  ${$t("developer")} Vue.js, ${$t(
                      "layout_designer"
                    )}`
                  }}
                </td>
              </tr>
              <tr>
                <th>{{ $t("employment_type") }}:</th>
                <td>{{ $t("full_time_work") }}</td>
              </tr>
              <tr>
                <th>{{ $t("date") }}:</th>
                <td>
                  {{
                    `1 ${$t("november")} 2018 ${$t("year")} - ${$t(
                      "present_hour"
                    )}`
                  }}
                </td>
              </tr>
              <tr>
                <th>{{ $t("duties") }}:</th>
                <td>
                  <p>
                    Верстка нових компонентів / сторінок, внесення правок до вже
                    існуючих сторінок, локалізація сайту, різні калькуляції,
                    сортував/ фільтрував дані, реалізовував пагінацію. Працював
                    з Vuex, Vue Router, API.
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
          faculty: "specialty_name",
          date: "2017-2019"
        },
        {
          title: "БКПЕП",
          abbreviation:
            "Бердичевский колледж промышленности, экономики и права",
          faculty: "specialty_name",
          date: "2013-2017"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
