import { configureStore } from "@reduxjs/toolkit"
import { accountSlice } from "@/features/accounts/slice/account.slice.ts"

export default configureStore({
  reducer: {
    accountSlice: accountSlice.reducer,
  },
})
