import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { Post } from "../types.d.ts";
import { listsPost } from "../utils/posts.ts";

export const handlers: Handlers = {
  async GET(req, context) {
    const posts = await listsPost();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;
  return (
    <main class="p-4">
      {posts.map(({ title, date }: Post) => (
        <article>
          <h2>
            <a>
              {title}
            </a>
          </h2>
          <p>
            {Intl.DateTimeFormat("es").format(date)}
          </p>
        </article>
      ))}
    </main>
  );
}
