import React from 'react'
import '../style.css'

export default function SingleToken({tokenName ,Attribiute}) {
  return (
    <span className="tag_token">{tokenName}&{Attribiute}</span>

  )
}
