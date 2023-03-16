import { OrbitControls, Preload, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

const Starts2 = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <mesh>
            <boxBufferGeometry />
            <OrbitControls
              rotation={[0, 0, Math.PI / 4]}
              autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stars />
            <meshStandardMaterial />
          </mesh>
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default Starts2
