<template>
  <div class="profilePage">
    <div class="container">


      <div class="row">
        <div class="col" v-if="profile">
          <div>
            <ProfileCard :profile="profile" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-8 m-auto" v-for=" b in blogs">
          <BlogCard :blogProp="b" />

        </div>
      </div>
    </div>




  </div>
</template>


<script lang="ts">
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { profileService } from '../services/ProfileService.js';
import { onMounted, popScopeId } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/blogsService.js';
import BlogCard from '../components/BlogCard.vue.js';


export default {
  setup() {
    const route = useRoute()
    async function getProfileById() {
      try {
        await profileService.getProfileById(route.params.id)
      } catch (error) {
        Pop.error({ error })
      }

    }

    async function getBlogsByProfile() {
      try {
        await blogsService.getBlogsByProfile(route.params.id)

      } catch (error) {
        Pop.error
      }
    }

    onMounted(() => {
      getProfileById()
      getBlogsByProfile()
    })

    return {
      profile: computed(() => AppState.activeProfile),
      blogs: computed(() => AppState.blogs)

    }
  }
}
</script>


<style lang="scss" scoped></style>