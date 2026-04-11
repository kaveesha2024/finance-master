import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar.tsx"

const AppSidebar: React.FC = () => {
  return (
    <Sidebar>
      <SidebarHeader className={"text-2xl font-bold"}>
        Finance Master
      </SidebarHeader>
      <SidebarContent>
        {/* First group starts */}
        <SidebarGroup>
          <SidebarGroupLabel>Finance</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Overview</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>My Accounts</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Financial Overview</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Credit Cards</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Transfers</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={ArrowDataTransferVerticalIcon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* First group ends */}

        {/* Second group starts */}
        <SidebarGroup>
          <SidebarGroupLabel>Planning</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Monthly Plan</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Subscriptions</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Recurring Expenses</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {/* Second group ends */}

        {/* Third group ends */}
        <SidebarGroup>
          <SidebarGroupLabel>Loans and Assets</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Loans</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Lendings</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>My Assets</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Saving Goals</SidebarMenuButton>
              {/*<SidebarMenuBadge>*/}
              {/*  <HugeiconsIcon icon={Home03Icon} size={20} />*/}
              {/*</SidebarMenuBadge>*/}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default AppSidebar
