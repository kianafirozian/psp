import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarLayout,
} from "@/components/ui/sidebar"

export default async function Page({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { cookies } = await import("next/headers")
    return (
        <SidebarLayout
            defaultOpen={cookies().get("sidebar:state")?.value === "true"}
        >
            <AppSidebar />
            {children}
        </SidebarLayout>
    )
}
