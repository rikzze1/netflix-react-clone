import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { SuspenseFallback } from "@/components/SuspenseFallback/SuspenseFallback";

const Login = lazy(() => import("@/pages/Login/Login"));

import { Preloader } from "@/components/Preloader/Preloader";

const routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<SuspenseFallback />}>
                <Preloader />
            </Suspense>
        )
    },
    {
        path: "/browse",
        element: (
            <Suspense fallback={<SuspenseFallback />}>
                <Login />
            </Suspense>
        )
    },
])

export const Router = () => {
    return (
        <RouterProvider router={routes} />
    )
}