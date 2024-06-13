<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import TextComponent from './TextComponent.vue';

defineProps<{
  cpf: String,
  nome: String,
  email: String,
  senha: String,
  rg: String,
  telefone: String
}>();

defineEmits([
  'update:cpf',
  'update:nome',
  'update:email',
  'update:senha',
  'update:rg',
  'update:telefone',
  'goLogin'
]);

</script>

<template>
    <v-form>
      <v-card max-width="590">
        <v-container>
          <v-row>
            <v-col cols="6">
                <TextComponent
                  :model-value="cpf"
                  label="CPF"
                  placeholder="Digite seu CPF"
                  type="text"
                  @update:model-value="$emit('update:cpf', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="nome"
                label="Nome Completo"
                placeholder="Digite seu nome"
                type="text"
                @update:model-value="$emit('update:nome', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="email"
                label="E-mail"
                placeholder="Digite seu email"
                type="email"
                @update:model-value="$emit('update:email', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="senha"
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                @update:model-value="$emit('update:senha', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="telefone"
                label="Telefone"
                placeholder="Digite seu telefone"
                type="text"
                @update:model-value="$emit('update:telefone', $event)" />
            </v-col>
            <v-col cols="6">
              <TextComponent
                :model-value="rg"
                label="Documento de Identificação"
                placeholder="Digite seu RG ou CNH"
                type="text"
                @update:model-value="$emit('update:rg', $event)" />
            </v-col>
            <v-col cols="12" class="text-center">
              <ButtonComponent
               text-button="Cadastrar"
               size="large"
               @click-event="$emit('goLogin', $event)"/>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
</template>
