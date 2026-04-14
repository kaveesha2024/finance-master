import { createSlice } from "@reduxjs/toolkit"
import type { Account } from "@/features/accounts/type/account"

export type AccountState = {
  accounts: Account[]
}

const initialState: AccountState = {
  accounts: [],
}

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {},
})

export const {} = accountSlice.actions
export default accountSlice.reducer
