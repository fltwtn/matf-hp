<template>
  <base-section id="research-tomobe" class="text-center" space="56">
    <v-container>
      <base-section-heading title="<xxxさんの研究紹介>" color="transparent">
        <ul style="text-align: center; list-style: none">
          <li>所属</li>
          <li>名前</li>
          <li>Namae</li>
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
        text: "hogehoge",
        type: "research",
        img: "root_tomobe.png",
        left: true,
        right: false,
      },
      {
        title: "<成果A>",
        text: "テスト",
        img: "canopy_3d.png",
        type: "research",
        left: false,
        right: true,
      },
      {
        title: "<成果B>",
        text: "aaaaaaaaaaaaaaaaaa",
        items: [],
        img: "soybean_3d.png",
        type: "research",
        left: true,
        right: false,
      },
    ],
  }),
};
</script>
