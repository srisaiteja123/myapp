import React from 'react'

export default function Sqr1(props) {
    let result =props.f(props.n)
  return (
    <div>{result}</div>
  )
}
