<template>
  <base-section id="about-our-research">
    <v-container>
      <v-row justify="center">
        <v-col>
          <base-section-heading title="研究事例">
            MATFでは研究から得られた知見を元に、IoTなどの情報通信技術を利用したプロダクト開発を行なっています。
            これらのプロダクトから取得された実データは研究へフィードバックされ、新たなテーマを開拓します。
            このサイクルを高速で回すことにより、農学研究の社会実装を加速していきます。
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
