import Link from 'next/link'
import React from 'react'

function Button(props) {
  if(props.link){
    return (
        <Link href={props.link} className="">
            <a className='px-3 py-2 bg-green-400 text-white rounded-md flex'>{props.children}</a>
        </Link>
      )
  }
  return <button onClick={props.onClick} className='px-3 py-2 bg-green-400 text-white rounded-md'>{props.children}</button>
}

export default Button