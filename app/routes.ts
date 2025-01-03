import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("about", "routes/about.tsx"),
    route("post/:postId", "routes/posts.tsx"),

    // Nested Routing 
    
    route('dashboard', 'routes/dashboards/dashboard.tsx',[
        route('analytics', 'routes/dashboards/analytics.tsx'),
        route('finance', 'routes/dashboards/finance.tsx'),
    ]),

    // layout( 'routes/dashboards/dashboard.tsx',[
    //     route('analytics', 'routes/dashboards/analytics.tsx'),
    //     route('finance', 'routes/dashboards/finance.tsx'),
    // ])
] satisfies RouteConfig;
