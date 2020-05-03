<script>
// Extensions
import View from "@/views/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "research",

  metaInfo: { title: "Research" },

  extends: View,

  mixins: [
    LoadSections([
      "hero-alt",
      "about-our-research",
      "research-tomobe",
      "research-tanaka",
      "info",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "research",
    },
  },
};
</script>
