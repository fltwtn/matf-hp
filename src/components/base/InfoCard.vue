<template>
  <v-theme-provider :dark="dark">
    <v-container class="pa-0">
      <v-row :justify="justify" no-gutters>
        <v-col v-if="icon" :class="`text-${align}`" cols="12" class="mb-4">
          <base-icon :color="color">
            {{ icon }}
          </base-icon>
        </v-col>

        <v-col v-if="title || subtitle" :cols="callout ? 9 : 10">
          <base-subtitle v-if="subtitle" :title="subtitle" space="1" />

          <base-title :title="title" class="" space="1" />

          <base-divider :color="color" />

          <base-body
            v-if="text || $slots.default"
            :text="text"
            space="6"
            style="margin-right: 15px"
          >
            <slot />
          </base-body>
        </v-col>

        <v-col v-if="callout" cols="2">
          <div
            class="display-3 grey--text text--lighten-4 font-weight-bold pr-8"
            v-text="callout"
          />
        </v-col>
        <v-col cols="2">
          <base-img
            v-if="file"
            :src="require(`@/assets/${this.file}`)"
            max-width="100"
            tile
            contain
          />
        </v-col>
      </v-row>
    </v-container>
  </v-theme-provider>
</template>

<script>
// Mixins
import Heading from "@/mixins/heading";

export default {
  name: "BaseInfoCard",

  mixins: [Heading],

  props: {
    dark: Boolean,
    callout: String,
    color: {
      type: String,
      default: "primary",
    },
    icon: String,
    subtitle: String,
    text: String,
    title: String,
    file: String,
  },
};
</script>
