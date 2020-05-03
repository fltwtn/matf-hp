<template>
  <base-section id="iot-device" class="text-center" space="56">
    <v-container>
      <base-section-heading title="<iot デバイスの紹介>" color="transparent">
      </base-section-heading>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="4">
          <base-image-card v-bind="feature" align="left"> </base-image-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "IotDevice",

  data: () => ({
    features: [
      {
        title: "hoge",
        text: "hogehogehoge",
        imgFile: "soja_mobile.png",
      },
      // {
      //   title: "IoTデバイスとの連携",
      //   text:
      //     "IoTデバイスと連携することで、圃場のモニタリングが可能になります。例えば水位センサーと連携することにより、水田の水位が危険域に達する前にアラートを飛ばしたり、水位の時系列での変化を画面に表示できます。",
      //   imgFile: "soja_mobile.png",
      // },
      // {
      //   title: "最新の研究に基づくユニークな機能",
      //   text: "リリースv0.1.0では、以下の機能を実装しています。",
      //   items: [
      //     {
      //       id: 0,
      //       text: "地図情報を利用した圃場見回りの最短ルート計算",
      //     },
      //     {
      //       id: 1,
      //       text: "スマホカメラを利用した稲のバイオマス推定機能",
      //     },
      //   ],
      //   imgFile: "soja_mobile.png",
      // },
    ],
  }),
};
</script>
