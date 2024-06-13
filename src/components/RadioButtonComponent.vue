<script lang="ts" setup>
defineProps<{
  radios: any
}>();

defineEmits(['update:radios']);

</script>

<template>
  <v-radio-group :model-value="radios" @update:model-value="$emit('update:radios', $event)" inline>
    <v-radio label="Pessoa Física" value="fisica"></v-radio>
    <v-radio label="Pessoa Jurídica" value="juridica"></v-radio>
  </v-radio-group>
</template>
