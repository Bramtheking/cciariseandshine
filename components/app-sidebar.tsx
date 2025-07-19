"use client"

import type * as React from "react"
import {
  BookOpen,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Calendar,
  Users,
  Heart,
  Home,
  Camera,
  MessageSquare,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Church Member",
    email: "member@ariseandshine.co.ke",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Arise and Shine CCI Thika",
      logo: GalleryVerticalEnd,
      plan: "Church",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: true,
    },
    {
      title: "Gallery",
      url: "/gallery",
      icon: Camera,
    },
    {
      title: "Events",
      url: "/events",
      icon: Calendar,
    },
    {
      title: "Sermons",
      url: "/sermons",
      icon: BookOpen,
    },
    {
      title: "Blog",
      url: "/blog",
      icon: MessageSquare,
    },
    {
      title: "Prayer Request",
      url: "/prayer-request",
      icon: Heart,
    },
  ],
  projects: [
    {
      name: "About Us",
      url: "#about",
      icon: Frame,
    },
    {
      name: "Leadership",
      url: "#leadership",
      icon: Users,
    },
    {
      name: "Ministries",
      url: "#ministries",
      icon: PieChart,
    },
    {
      name: "Contact",
      url: "#contact",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
