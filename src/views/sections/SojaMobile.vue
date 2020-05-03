<template>
  <base-section id="soja-mobile" class="text-center" space="56">
    <v-container>
      <base-section-heading title="SOJA! Mobile" color="transparent">
        管理する圃場数の増加に従い、施肥や水管理などの作業をスケジュールするのが困難になります。SOJA!Mobileは作物生育モデルや数理最適化などの技術を用い、最適な作業スケジュール作成を支援するモバイルアプリケーションです。
      </base-section-heading>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="12">
          <base-image-card v-bind="feature" align="left" horizontal>
          </base-image-card>
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
        title: "直感的な操作で作業管理",
        text:
          "SOJA! Mobileにはスマートフォンに最適化されたフレームワークを採用しており、管理者や作業者が直感的に操作できるUIとなっています。また、Android / iOS どちらにも対応可能です（リリース v0.1.0はAndroidのみ）。",
        imgFile: "soja_mobile.png",
      },
      {
        title: "IoTデバイスとの連携",
        text:
          "IoTデバイスと連携することで、圃場のモニタリングが可能になります。例えば水位センサーと連携することにより、水田の水位が危険域に達する前にアラートを飛ばしたり、水位の時系列での変化を画面に表示できます。",
        imgFile: "soja_mobile.png",
      },
      {
        title: "最新の研究に基づくユニークな機能",
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
        imgFile: "soja_mobile.png",
      },
    ],
  }),
};
</script>
