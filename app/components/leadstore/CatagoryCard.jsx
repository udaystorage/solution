import Link from 'next/link'
import React from 'react'

export default function CatagoryCard({name,slug}) {
  return (
    <>
    <Link href={`/leadstore/${slug}`} className="hover:shadow-lg shadow-gray-300 cursor-pointer transition duration-200 w-45 h-min rounded-2xl px-5 py-3 flex flex-col items-center justify-start gap-3.5 ">
        <div className="bg-blue-300 rounded-full w-30 h-30"></div>
        <div className="w-full text-center">{name}</div>
    </Link>
    </>
  )
}
