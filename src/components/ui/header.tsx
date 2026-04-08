import React from "react"

type Header = { text: string }

const Header: React.FC<Header> = ({ text }) => {
  return <p className={"mb-3 text-xl font-bold"}>{text}</p>
}

export default Header
