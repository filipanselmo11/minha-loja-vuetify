<script lang="ts" setup>
defineProps<{
  textButton: string,
  size: string
}>();

defineEmits(['clickEvent'])

</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
      <v-btn @click="$emit('clickEvent', $event)" :size="size">
        {{ textButton }}
      </v-btn>
    </v-responsive>
</template>
