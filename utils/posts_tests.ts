import { loadPost } from "./posts.ts";
import { assertEquals } from "$std/testing/asserts.ts";
import { Post } from "../types.d.ts";
Deno.test(
  "loadPost() returns null if the post does not exist",
  async (): Promise<void> => {
    const post: Post | null = await loadPost("non-existent");
    assertEquals(post, null);
    // if (post !== null) throw new Error("Expected null");
  },
);

Deno.test(
  "loadPost() returns null if the post does not exist",
  async (): Promise<void> => {
    const post: Post | null = await loadPost("non-existent");
    assertEquals(post, null);
    // if (post !== null) throw new Error("Expected null");
  },
);
