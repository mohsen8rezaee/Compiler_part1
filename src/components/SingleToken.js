import React from 'react'
import '../style.css'

export default function SingleToken({tokenName ,Attribiute}) {
  return (
    <span class="tag_token">{tokenName}&{Attribiute}</span>

  )
}
