import { useRef } from 'react'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Head(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/head.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Default} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/head.gltf')
