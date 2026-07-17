import React from 'react'

export default async function page({ params }) {
    const { slug } = await params;
  return (
    <>
    <div className="w-full text-center h-screen flex justify-center items-center bg-green-400">
        {
        console.log( typeof(slug ))
    }
    <div className="text-2xl  text-center text-black"> {slug} </div>  
    </div>
    
    </>
  )
}
