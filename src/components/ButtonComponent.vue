<script lang="ts" setup>
const buttonProps = defineProps<{
  textButton: string,
  size: string
}>();
</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
      <v-btn :size="buttonProps.size">
        {{ buttonProps.textButton }}
      </v-btn>
    </v-responsive>
</template>
