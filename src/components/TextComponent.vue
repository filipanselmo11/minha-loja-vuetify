<script lang="ts" setup>
const textProps = defineProps<{
  label: string,
  placeholder: string,
  type: string
}>();
</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
      <v-text-field
        hide-details
        :label="textProps.label"
        :placeholder="textProps.placeholder"
        :type="textProps.type"
        ></v-text-field>
    </v-responsive>
</template>
