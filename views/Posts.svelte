<script lang="ts">
    import { PostSchema } from "@/schemas/PostSchema";

  const { posts = [] }: {
      posts: typeof PostSchema[]
    } = $props();
</script>

<div>
    Hello from Svelte!

    {#each posts as post}
        <div>
            <h2>{post.title}</h2>
        </div>
    {/each}
</div>
