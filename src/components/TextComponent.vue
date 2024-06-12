<script lang="ts" setup>
defineProps<{
  label: string,
  placeholder: string,
  type: string,
  modelValue: any
}>();

defineEmits(['update:modelValue']);

// const modelValue = defineModel('')
</script>

<template>
  <v-responsive
    class="mx-auto"
    max-width="344">
      <v-text-field
        :model-value="modelValue"
        hide-details
        :label="label"
        :placeholder="placeholder"
        :type="type"
        @update:model-value="$emit('update:modelValue', $event)"
        ></v-text-field>
    </v-responsive>
</template>
