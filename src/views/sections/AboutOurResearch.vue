<template>
  <base-section id="about-our-research">
    <v-container>
      <v-row justify="center">
        <v-col>
          <base-section-heading title="研究事例">
            MATFに参画する研究者の研究事例を紹介します。
          </base-section-heading>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center">
        <v-col v-for="card in cards" :key="card.title" cols="12" md="4">
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionAboutOurProduct",

  data: () => ({
    cards: [],
  }),
};
</script>
