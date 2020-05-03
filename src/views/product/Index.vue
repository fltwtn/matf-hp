<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Product",

  metaInfo: { title: "Product" },

  extends: View,

  mixins: [
    LoadSections([
      "hero-alt",
      "about-our-product",
      "soja-mobile",
      "theme-features",
      "info",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "product",
    },
  },
};
</script>
