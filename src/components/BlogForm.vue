<template>
  <form action="" @submit="submitBlogForm()">
    <div>
      <label for="title">Title:</label>
      <input required name="title" placeholder="Title" class="form-control" type="text" v-model="editable.title">
    </div>
    <div>
      <label for="body">Blog Body:</label>
      <input type="text" name="body" v-model="editable.body" required class="form-control"
        placeholder="Type blog here...">
    </div>
    <div>
      <label for="imgUrl">Img Url:</label>
      <input type="text" name="imgUrl" v-model="editable.imgUrl" required class="form-control" placeholder="img url">
    </div>
    <button class="btn btn-primary" type="submit">Submit Form</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props) {
    const editable = ref({})

    return {
      editable,
      submitBlogForm() {

      }
    }
  }
}
</script>


<style lang="scss" scoped></style>