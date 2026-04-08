import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import AppRoutes from "@/features/routing/AppRoutes.tsx"
import { BrowserRouter } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar.tsx"
import AppSidebar from "@/layouts/AppSidebar.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          <AppSidebar />
          <main>
            <AppRoutes />
          </main>
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
)
