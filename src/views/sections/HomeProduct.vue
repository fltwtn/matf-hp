<template>
  <base-section id="home-product">
    <v-container fluid fill-height>
      <v-row align="center">
        <v-col cols="12" md="5" class="px-5">
          <base-heading
            title="研究成果をプロダクトへ。数理農学研究の社会実装を加速します。"
          />

          <base-body>
            MATF (Mathematical Agronomy Task-Force)
            は「数理農学」の研究を促進する有志の研究会です。
          </base-body>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            block
            @click="this.onButtonPressed"
            >プロダクト紹介へ</v-btn
          >
        </v-col>
        <v-col cols="12" md="7" class="px-5">
          <base-img
            :src="require(`@/assets/coming_soon.png`)"
            tile
            class="mr-2 mb-4"
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionHomeProduct",

  data: () => ({
    features: [
      {
        title: "Pixel Perfect Design",
        icon: "mdi-fountain-pen-tip",
      },
      {
        title: "Retina Ready",
        icon: "mdi-cellphone",
      },
      {
        color: "primary",
        dark: true,
        title: "Easily Customizable",
        icon: "mdi-pencil-box-outline",
      },
      {
        title: "Image Parallax",
        icon: "mdi-image-size-select-actual",
      },
      {
        title: "Seo Optimized",
        icon: "mdi-ice-pop",
      },
      {
        title: "24/7 Support",
        icon: "mdi-help-circle-outline",
      },
    ],
  }),
  methods: {
    onButtonPressed() {
      this.$router.push({ path: "Product" });
    },
  },
};
</script>
