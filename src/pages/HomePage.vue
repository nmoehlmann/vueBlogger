<template>
  <main class="container">
    <section class="row">
      <BlogForm />
    </section>
    <section class="row">
      <div class="col-12 elevation-5 my-3" v-for="b in blogs" :key="b.id">
        <BlogCard :blogProp="b" />
      </div>
    </section>
  </main>
</template>

<script>
import { onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/blogsService.js"
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import BlogCard from "../components/BlogCard.vue"
import BlogForm from "../components/BlogForm.vue"

export default {
  components: { BlogCard, BlogForm },

  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss"></style>
