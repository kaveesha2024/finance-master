import {
  HiHome,
  HiMiniArrowsRightLeft,
  HiMiniBuildingLibrary,
  // HiMiniBuildingLibrary,
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
    path: "/accounts",
    icon: HiWallet,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: HiMiniArrowsRightLeft,
  },

  {
    name: "Loans",
    path: "/loans",
    icon: HiMiniBuildingLibrary,
  },
]
