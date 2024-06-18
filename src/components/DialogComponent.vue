<script lang="ts" setup>
defineProps<{
  dialog: boolean,
  image: string,
  nome: string
}>();
defineEmits(['openDialog', 'closeDialog', 'update:dialog']);
</script>

<template>
  <v-btn @click="$emit('openDialog', $event)">Comprar</v-btn>
  <v-dialog persistent width="auto" :model-value="dialog" @update:model-value="$emit('update:dialog', $event)">
    <v-card max-width="400">
      <v-img height="200px" :src="image" cover />
      <v-card-title>
        {{ nome }}
      </v-card-title>
      <v-card-item>
        <h1>Form de compra</h1>
      </v-card-item>
      <template v-slot:actions>
        <v-btn @click="$emit('closeDialog', $event)" class="ms-auto" text="Fechar">
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
