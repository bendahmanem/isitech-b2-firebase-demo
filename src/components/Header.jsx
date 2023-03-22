import React from 'react'

function Header(props) {
  return (
    <div className="text-3xl font-bold underline">{props.title}</div>
  )
}

export default Header 