import route from "primate/route"
import response from "primate/response"
import Post from "@/stores/Post"

export default route({
  async get() {
    return response.view("Posts.svelte", {posts: await Post.find()})
  }
})
