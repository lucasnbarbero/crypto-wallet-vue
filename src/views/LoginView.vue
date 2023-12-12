<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <div class="text-center mb-4">
        <h1>Bienvenido</h1>
      </div>
      <v-form @submit.prevent="onSubmit">
        <v-text-field
          v-model="user.email"
          label="Correo electrónico"
          prepend-inner-icon="mdi-email"
          placeholder="example@gmail.com"
        />
        <v-text-field
          v-model="user.password"
          label="Contraseña"
          :append-inner-icon="passwordAppenInnerIcon"
          :prepend-inner-icon="'mdi-lock'"
          @click:append-inner="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
        />
        <v-btn color="blue" flat type="submit" block class="mb-4">Ingresar</v-btn>
      </v-form>

      <v-btn color="black" flat block class="mb-4">Ingresar con Google</v-btn>
      <v-btn color="primary" flat block variant="text" :to="{ path: '/register' }"
        >Registrate</v-btn
      >
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

interface IUser {
  email: string;
  password: string;
}

const user = ref<IUser>({ email: '', password: '' });
const showPassword = ref<boolean>(false);

const passwordAppenInnerIcon = computed(() => {
  return showPassword.value ? 'mdi-eye-off' : 'mdi-eye';
});

const onSubmit = async () => {
  console.log(user.value);
};
</script>
