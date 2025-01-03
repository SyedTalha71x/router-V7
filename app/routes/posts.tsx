import { Form, useFetcher } from "react-router";
import type { Route } from "./+types/posts";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Posts" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


//client loader v7
export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  return await res.json();
}

//ssr loader v7
// export async function loader({ params }: Route.LoaderArgs) {
//       const res = await db.getProducts();
//       return res;
// }


export async function clientAction({params}: Route.ClientActionArgs){
    try{
        await fetch(`https://jsonplaceholder.typicode.com/todos/${params.postId}`,{
        method: 'DELETE'
       })
       return {isDeleted: true}
    }
    catch(error){
        return {isDeleted: false}
    }
}

//redirect work in action and loader methods 

export default function Posts({ loaderData }: Route.ComponentProps) {

    const fetcher = useFetcher();
    const isDeleted = fetcher.data?.isDeleted;
    
    return (
    <div className="flex justify-center items-center flex-col gap-1">
      {!isDeleted && (<div className="flex items-center flex-col gap-1 mt-10">
        <div>
        Title: {loaderData.title}
        </div>
        <div>
        userId: {loaderData.userId}
        </div>
      </div>)}
      <div>
        <fetcher.Form method="DELETE">
        <button type="submit" className="bg-purple-600 text-white text-sm py-1 px-6 rounded-md" >
            Delete
        </button>
        </fetcher.Form>
      </div>
    </div>
  );
}
