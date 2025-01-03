import type { Route } from "./+types/analytics";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Analytics" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Analytics(){
    return <div>
        Analytics
    </div>
}