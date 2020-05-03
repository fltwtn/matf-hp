<template>
  <base-section id="404">
    <base-heading title="404" />

    <base-subheading space="8" title="ページが見つかりません。" />
  </base-section>
</template>

<script>
export default {
  name: "FourOhFour",

  provide: {
    heading: { align: "center" },
  },
};
</script>
