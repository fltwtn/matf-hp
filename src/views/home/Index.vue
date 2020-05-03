<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Home",

  metaInfo: { title: "Home" },

  extends: View,

  mixins: [
    LoadSections([
      "hero",
      "home-blank",
      "home-mission",
      "home-research",
      "home-product",
      "info",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "home",
    },
  },
};
</script>
