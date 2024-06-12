<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import RadioButtonComponent from './RadioButtonComponent.vue';
import TextComponent from './TextComponent.vue';
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
            <RadioButtonComponent/>
          </v-col>
          <v-col cols="12">
            <TextComponent label="Cpf/CNPJ" placeholder="Digite seu cpf ou cnpj" type="text" />
          </v-col>
          <v-col class="mt-5" cols="12">
            <ButtonComponent textButton="Avançar" size="large" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
