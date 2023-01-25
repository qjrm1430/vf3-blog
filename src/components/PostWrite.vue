<script setup lang="ts">
import { ref } from 'vue';
import { db } from 'boot/firebase';
import { doc, setDoc } from 'firebase/firestore';

const title = ref('');
const content = ref('');

const existsRule = (val: string) => (val && val.length > 0) || '내용을 쓰세요';

const onSubmit = async () => {
  try {
    await setDoc(doc(db, 'cities', 'LA'), {
      title: title.value,
      content: content.value
    });
  } catch (e) {
    console.error(e);
  }
};
const onReset = () => {
  title.value = '';
  content.value = '';
};
</script>
<template>
  <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
    <v-card>
      <q-card-section>
        <q-input
          filled
          v-model="title"
          label="제목"
          hint="제목을 쓰세요"
          lazy-rules
          :rules="[existsRule]"
        />

        <q-input
          filled
          v-model="content"
          type="textarea"
          label="내용"
          hint="내용을 쓰세요"
          lazy-rules
          :rules="[existsRule]"
        />
      </q-card-section>
      <q-card-actions>
        <QSpace />
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </q-card-actions>
    </v-card>
  </q-form>
</template>
