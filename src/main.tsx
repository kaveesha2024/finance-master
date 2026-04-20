import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import AppRoutes from "@/features/routing/AppRoutes.tsx"
import { BrowserRouter } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar.tsx"
import { Toaster } from "sonner"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          {/*<AppSidebar />*/}
          <AppRoutes />
          <Toaster />
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
)
