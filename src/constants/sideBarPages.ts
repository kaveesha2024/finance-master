import {
  HiHome,
  HiMiniArrowsRightLeft,
  HiMiniBuildingLibrary,
  HiWallet,
} from "react-icons/hi2"
import type { IconType } from "react-icons"

export const sideBarPages: { name: string; path: string; icon: IconType }[] = [
  {
    name: "Home",
    path: "/home",
    icon: HiHome,
  },
  {
    name: "Accounts",
    path: "/all_accounts",
    icon: HiWallet,
  },
  {
    name: "Loans",
    path: "/loans",
    icon: HiMiniBuildingLibrary,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: HiMiniArrowsRightLeft,
  },
]
