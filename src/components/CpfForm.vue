<script lang="ts" setup>
// import ButtonComponent from './ButtonComponent.vue';
import TextComponent from './TextComponent.vue';

defineProps<{
  cpf: String,
  nome: String,
  email: String,
  confirmEmail: String,
  senha: String,
  cliente: String,
  rg: String,
  telefone: String
}>();

defineEmits([
  'update:cpf',
  'update:nome',
  'update:email',
  'update:confirmEmail',
  'update:senha',
  'update:cliente',
  'update:rg',
  'update:telefone'
]);

</script>

<template>
  <v-row class="d-flex justify-space-around">
    <v-form>
      <v-card width="900">
        <v-container>
          <v-row no-gutters>
            <v-col cols="6">
              <TextComponent :model-value="cpf" label="CPF" placeholder="Digite seu CPF" type="text"
                @update:model-value="$emit('update:cpf', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent :model-value="email" label="E-mail" placeholder="Digite seu Email" type="email"
                @update:model-value="$emit('update:email', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent :model-value="senha" label="Senha" placeholder="Digite sua senha" type="password"
                @update:model-value="$emit('update:senha', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent :model-value="cliente" label="Tipo de Cliente" placeholder="Selecione" type="text"
                @update:model-value="$emit('update:cliente', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent :model-value="rg" label="Documento de Identidade" placeholder="Digite seu rg" type="text"
                @update:model-value="$emit('update:rg', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent :model-value="rg" label="Documento de Identidade" placeholder="Digite seu rg" type="text"
                @update:model-value="$emit('update:rg', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent :model-value="telefone" label="Telefone fixo" placeholder="Digite seu telefone" type="text"
                @update:model-value="$emit('update:telefone', $event)" />
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </v-row>
</template>
