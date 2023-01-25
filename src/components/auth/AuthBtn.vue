<template>
  <div>
    <q-btn color="info" round v-if="firebaseUser">
      <q-avatar size="32px">
        <img :src="firebaseUser.photoURL || ''" />
        <q-menu>
          <q-card>
            <q-list>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-account" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> 이름 </q-item-label>
                  <q-item-label caption>
                    {{ firebaseUser.displayName }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="mdi-email" />
                </q-item-section>
                <q-item-section>
                  <q-item-label> 이메일 </q-item-label>
                  <q-item-label caption>
                    {{ firebaseUser.email }}
                  </q-item-label>
                </q-item-section>
              </q-item>
              <q-item> sss </q-item>
            </q-list>
            <q-card-actions align="right">
              <q-btn
                icon="mdi-logout"
                label="로그아웃"
                flat
                color="primary"
                @click="signOut(auth)"
              ></q-btn>
            </q-card-actions>
          </q-card>
        </q-menu>
      </q-avatar>
    </q-btn>
    <q-btn @click="signInWithPopup(auth, provider)" round color="info" v-else>
      <q-avatar size="24" icon="mdi-login" />
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
import { auth } from 'boot/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { firebaseUser, useAuth } from 'src/composables/useAuth';
useAuth();
const provider = new GoogleAuthProvider();
</script>
