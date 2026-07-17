import React from 'react'
import Cube from '../components/Desigines/Cube'

export default function page() {
  return (
    <>
        <div className="w-full h-screen bg-green-300 p-90">
            <Cube color="bg-fuchsia-500/10 border-fuchsia-500 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)]"/> 
        </div>
    </>
  )
}
