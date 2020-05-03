<template>
  <base-section id="home-research">
    <v-container fluid fill-height>
      <v-row align="center">
        <v-col cols="12" md="5" class="px-5" order="last">
          <base-heading title="<研究に関するアイキャッチ>" />

          <base-body> test </base-body>
          <v-btn
            class="ma-2"
            outlined
            color="indigo"
            block
            @click="this.onButtonPressed"
          >
            研究紹介へ
          </v-btn>
        </v-col>
        <v-col cols="12" md="7" class="px-5" order="first">
          <base-img
            :src="require(`@/assets/canopy_3d.png`)"
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
  name: "SectionHomeResearch",

  data: () => ({}),

  methods: {
    onButtonPressed() {
      this.$router.push({ path: "Research" });
    },
  },
};
</script>
