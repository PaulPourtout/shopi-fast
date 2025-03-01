import { createFileRoute, Link } from "@tanstack/react-router";
import { PostErrorComponent } from "./posts.$postId";
import { createServerFn } from "@tanstack/start";
import { z } from "zod";
import { useState } from "react";

export const Route = createFileRoute("/posts_/$postId/deeper")({
  component: PostDeeperComponent,
  errorComponent: PostErrorComponent,
});

const getNewUserServer = createServerFn({ method: "GET" })
  .validator(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      age: z.number(),
    })
  )
  .handler(async (req) => {
    console.log("request", req);
    return `New user is ${req.data?.firstName} ${req.data?.lastName} and is ${req.data?.age} years old!`;
  });

function PostDeeperComponent() {
  const { postId } = Route.useParams();
  const [user, setUser] = useState<string | null>(null);

  const getNewUser = async () => {
    const newUser = await getNewUserServer({
      data: { firstName: "Marco", lastName: "Polo", age: 42 },
    });
    if (newUser) {
      console.log("newUser", newUser);
      setUser(newUser);
    }
  };

  return (
    <div className="p-2 space-y-2">
      <Link
        to="/posts/$postId"
        params={{ postId }}
        className="text-blue-800 hover:text-blue-600"
      >
        Back to post
      </Link>
      <div>Hello deeper post {postId}!</div>
      <button onClick={getNewUser}>GET USER</button>
      {user && <div>{user}</div>}
    </div>
  );
}
