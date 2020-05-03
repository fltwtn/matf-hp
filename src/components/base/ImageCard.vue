<template>
  <div :class="classes" class="pt-2 ml-2 mr-2">
    <v-container v-if="type == 'product'">
      <v-row justify="center">
        <base-img
          v-if="imgFile"
          :src="require(`@/assets/${imgFile}`)"
          max-width="100"
          tile
          class="mr-2 mb-4"
          contain
        />
      </v-row>
    </v-container>

    <div v-if="type == 'research'">
      <base-img
        v-if="imgFile"
        :src="require(`@/assets/${imgFile}`)"
        max-width="100"
        tile
        class="mr-2 mb-4"
        contain
      />
    </div>

    <div :class="horizontal && title && 'ml-5'">
      <base-title :title="title" class="text-uppercase mb-5" space="3" />

      <base-body
        v-if="text || $slots.default"
        :space="horizontal ? 0 : undefined"
        :text="text"
        class="mx-auto mb-2"
      >
        <slot />
      </base-body>

      <ul style="text-align: left; color: #757575; font-size: 15px">
        <li v-for="item in items" :key="item.id">{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// Mixins
import Heading from "@/mixins/heading";

export default {
  name: "BaseImageCard",

  mixins: [Heading],

  props: {
    align: {
      type: String,
      default: "left",
    },
    color: String,
    horizontal: Boolean,
    space: {
      type: [Number, String],
      default: 8,
    },
    size: {
      type: [Number, String],
      default: 72,
    },
    text: String,
    title: String,
    items: Array,
    imgFile: String,
    type: String,
  },

  computed: {
    classes() {
      const classes = [`mb-${this.space}`];

      if (this.horizontal) {
        classes.push("d-flex");

        if (!this.$slots.default && !this.text) {
          classes.push("align-center");
        }
      }

      return classes;
    },
  },
};
</script>
