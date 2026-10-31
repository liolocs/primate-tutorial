import route from "primate/route"
import response from "primate/response"
import Post from "@/stores/Post"

export default route({
  async get() {
    return response.json({ data: await Post.find() })
  }
})
