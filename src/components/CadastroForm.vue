<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import RadioButtonComponent from './RadioButtonComponent.vue';
import TextComponent from './TextComponent.vue';

defineProps<{
  field: string,
  radios: any | 'fisica'
}>();

defineEmits(['update:field', 'realizarCadastro', 'update:radios']);

</script>

<template>
  <v-card class="pa-4 ml-6" max-width="410">
    <v-card-title>
      Primeiro Acesso
    </v-card-title>
    <v-card-subtitle>
      Digite seu CPF ou CNPJ
    </v-card-subtitle>
    <v-form>
      <v-container>
        <v-row no-gutters>
          <v-col cols="12">
            <RadioButtonComponent :radios="radios" @update:radios="$emit('update:radios', $event)"/>
          </v-col>
          <v-col cols="12">
            <TextComponent
              v-if="radios === 'fisica'"
              :model-value="field"
              label="CPF"
              placeholder="Digite seu CPF"
              type="text"
              @update:model-value="$emit('update:field', $event)"
            />
            <TextComponent
              v-else
              :model-value="field"
              label="CNPJ"
              placeholder="Digite seu CNPJ"
              type="text"
              @update:model-value="$emit('update:field', $event)"
            />
          </v-col>
          <v-col class="mt-5" cols="12">
            <ButtonComponent
              @click-event="$emit('realizarCadastro', $event)"
              textButton="Avançar"
              size="large"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
