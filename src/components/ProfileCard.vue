<template>
  <div class="card">
    <div class="card-body">
      <div class="profile-card mb-2 text-center">
        <p class="text-center mb-0">
          <img :src="profile.picture" alt="profile.name" class="rounded-circle profile-picture">

        </p>
      </div>
      <p>
        {{ profile.name }}
      </p>
    </div>
  </div>
</template>


<script lang="ts">
import { Account } from '../models/Account.js';
import { Profile } from '../models/Profile.js';

export default {

  props: {
    profile: { type: [Profile, Account], required: true }
  },


  setup() {

    return {}
  }
}
</script>


<style lang="scss" scoped></style>