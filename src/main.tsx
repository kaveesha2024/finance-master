import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import AppRoutes from "@/features/routing/AppRoutes.tsx"
import { BrowserRouter } from "react-router-dom"
import { SidebarProvider } from "@/components/ui/sidebar.tsx"
// import AppSidebar from "@/layouts/AppSidebar.tsx"
import { Toaster } from "sonner"
// import { Provider } from "react-redux"
// import { persistor, store } from "@/store.ts"
// import { PersistGate } from "redux-persist/integration/react"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*<Provider store={store}>*/}
    {/*  <PersistGate loading={null} persistor={persistor}>*/}
    <ThemeProvider>
      <SidebarProvider>
        <BrowserRouter>
          {/*<AppSidebar />*/}
          <AppRoutes />
          <Toaster />
        </BrowserRouter>
      </SidebarProvider>
    </ThemeProvider>
    {/*</PersistGate>*/}
    {/*</Provider>*/}
  </StrictMode>
)
