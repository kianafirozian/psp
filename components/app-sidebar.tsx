"use client"

import {
  BookOpen,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarItem,
} from "@/components/ui/sidebar"
const data = {
  navMain: [
    {
      title: "List",
      url: "#",
      icon: BookOpen,
      link: "/dashboard/list"
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      link: "/dashboard/setting"
    },
  ],

}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarItem>
          <NavMain items={data.navMain} />
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  )
}
