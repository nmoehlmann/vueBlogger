import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {
  async getBlogsByProfile(id) {
    const res = await api.get('api/blogs/',
      {
        params: {
          creatorId: id
        }

      })
    AppState.blogs = res.data.map(b => new Blog(b))
  }


  async getBlogs() {
    const res = await api.get('api/blogs')
    logger.log(res.data)
    AppState.blogs = res.data.map(b => new Blog(b))
  }

}

export const blogsService = new BlogsService()