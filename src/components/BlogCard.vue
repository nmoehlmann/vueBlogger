<template>
  <div class="">
    <div class="text-center">
      <h1>{{ blogProp?.title }}</h1>
    </div>
    <div class="d-flex p-3">
      <div class="col-3 p-3">
        <img class="img-fluid" :src="blogProp?.imgUrl" alt="">
      </div>
      <div class="col-9 d-flex flex-column justify-content-center">
        <p>{{ blogProp?.body }}</p>
        <div class="d-flex justify-content-center p-3">

          <router-link :to="{ name: 'Profile', params: { id: blogProp?.creatorId } }">
            <img class="creator-picture rounded-circle" :src="blogProp?.creator.picture">
          </router-link>


          <h2>{{ blogProp?.creator.name }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog.js';


export default {
  props: {
    blogProp: { type: Blog, required: true }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.creator-picture {
  height: 100px;
  width: 100px;
  object-fit: cover
}
</style>