<template>
  <v-theme-provider dark>
    <base-section id="info-alt" class="grey darken-4" space="15">
      <v-responsive class="mx-auto" max-width="1400">
        <v-container fluid>
          <!-- <v-row justify="center">
            <v-col cols="12" md="3">
              <base-info />
            </v-col>
          </v-row> -->
          <v-row justify="center">
            <v-col cols="12" md="3">
              <base-business-contact dense />
            </v-col>
          </v-row>
        </v-container>
      </v-responsive>
    </base-section>
  </v-theme-provider>
</template>

<script>
export default {
  name: "SectionBusinessInfo",

  components: {},
};
</script>

<style lang="sass">
#info-alt a
  text-decoration: none
</style>
