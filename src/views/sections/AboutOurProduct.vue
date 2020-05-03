<template>
  <base-section id="about-our-product">
    <v-container>
      <v-row justify="center">
        <v-col>
          <base-section-heading title="プロダクト紹介">
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
    cards: [
      {
        title: "（IoTタイトル）",
        subtitle: "圃場監視IoTデバイス",
        text:
          "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.",
        callout: "01",
        // file: "iot-m2m.jpg",
      },
      {
        title: "SOJA! MOBILE",
        subtitle: "モバイルアプリケーション",
        text:
          "大規模な圃場管理における最適作業スケジュール作成を支援するアプリケーション",
        callout: "02",
        // file: "soja_mobile.png",
      },
    ],
  }),
};
</script>
