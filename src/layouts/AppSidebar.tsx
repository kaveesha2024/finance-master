import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowDataTransferVerticalIcon,
  Home03Icon,
} from "@hugeicons/core-free-icons"

const AppSidebar: React.FC = () => {
  return (
    <Sidebar>
      <SidebarHeader className={"text-2xl font-bold"}>
        Finance Master
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Overview</SidebarMenuButton>
              <SidebarMenuBadge>
                <HugeiconsIcon icon={Home03Icon} size={20} />
              </SidebarMenuBadge>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Transactions</SidebarMenuButton>
              <SidebarMenuBadge>
                <HugeiconsIcon icon={ArrowDataTransferVerticalIcon} size={20} />
              </SidebarMenuBadge>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
