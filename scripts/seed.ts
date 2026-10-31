import Post from "@/stores/Post";

await Post.create();

await Post.insert({
  title: "My first post",
  body: "Some body here",
  created: new Date(),
  updated: new Date()
})

console.log("Post inserted")
