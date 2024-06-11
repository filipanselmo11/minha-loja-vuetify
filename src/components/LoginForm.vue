<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import TextComponent from './TextComponent.vue';
</script>

<template>
  <v-card class="pa-4 ml-6" max-width="400">
    <v-card-title>
      Já possuo cadastro
    </v-card-title>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12">
            <TextComponent
              label="Email"
              placeholder="fulano@email.com"
              type="email"
            />
          </v-col>
          <v-col cols="12">
            <TextComponent
              label="Senha"
              placeholder="****"
              type="password"
            />
          </v-col>
          <v-col cols="12">
            <ButtonComponent
              textButton="Entrar"
              size="large"/>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
