import type { Route } from "./+types/finance";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Finance" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Finance(){
    return <div>
        Finance
    </div>
}