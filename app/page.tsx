'use client'

import { useEffect, useRef } from 'react'
import { initializeBabylonApp } from '../src/playgroundRunner'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      // Initialize BabylonJS app when component mounts
      initializeBabylonApp({
        canvas: canvasRef.current,
        assetsHostUrl: '/'
      })
    }
  }, [])

  return (
    <main style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      <canvas 
        ref={canvasRef}
        id="renderCanvas"
        style={{ 
          width: '100%', 
          height: '100%', 
          display: 'block',
          outline: 'none'
        }}
      />
    </main>
  )
}