<script lang="ts" setup>
import ButtonComponent from './ButtonComponent.vue';
import TextComponent from './TextComponent.vue';
defineProps<{
  email: string,
  senha: string
}>();

defineEmits(['update:email', 'update:senha', 'realizarLogin']);
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
              :model-value="email"
              label="Email"
              placeholder="fulano@email.com"
              type="email"
              @update:model-value="$emit('update:email', $event)"
            />
          </v-col>
          <v-col cols="12">
            <TextComponent
              :model-value="senha"
              label="Senha"
              placeholder="****"
              type="password"
              @update:model-value="$emit('update:senha', $event)"
            />
          </v-col>
          <v-col cols="6">
            <ButtonComponent
              @click-event="$emit('realizarLogin', $event)"
              textButton="Entrar"
              size="large"/>
          </v-col>
          <v-col class="mt-2" cols="6">
            <span>Esqueci minha senha</span>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>
