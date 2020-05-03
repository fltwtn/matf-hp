<template>
  <base-section id="research-tomobe" class="text-center" space="56">
    <v-container>
      <base-section-heading title="<友部さんの研究紹介>" color="transparent">
        <ul style="text-align: center; list-style: none">
          <li>所属</li>
          <li>友部遼</li>
          <li>Haruka TOMOBE</li>
        </ul>
      </base-section-heading>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="12">
          <v-row class="my-5">
            <v-col v-if="feature.left" cols="5">
              <base-img
                v-if="feature.img"
                :src="require(`@/assets/${feature.img}`)"
                tile
                class="mr-2"
                contain
              />
            </v-col>
            <v-col cols="7">
              <base-image-card v-bind="feature" align="left" horizontal>
              </base-image-card>
            </v-col>
            <v-col v-if="feature.right" cols="5">
              <base-img
                v-if="feature.img"
                :src="require(`@/assets/${feature.img}`)"
                tile
                class="mr-2"
                contain
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SojaMobile",

  data: () => ({
    features: [
      {
        title: "研究背景",
        text:
          "SOJA! Mobileにはスマートフォンに最適化されたフレームワークを採用しており、管理者や作業者が直感的に操作できるUIとなっています。また、Android / iOS どちらにも対応可能です（リリース v0.1.0はAndroidのみ）。",
        img: "root_tomobe.png",
        left: true,
        right: false,
      },
      {
        title: "<成果A>",
        text: "テスト",
        img: "canopy_3d.png",
        left: false,
        right: true,
      },
      {
        title: "<成果B>",
        text: "リリースv0.1.0では、以下の機能を実装しています。",
        items: [
          {
            id: 0,
            text: "地図情報を利用した圃場見回りの最短ルート計算",
          },
          {
            id: 1,
            text: "スマホカメラを利用した稲のバイオマス推定機能",
          },
        ],
        img: "soybean_3d.png",
        left: true,
        right: false,
      },
    ],
  }),
};
</script>
