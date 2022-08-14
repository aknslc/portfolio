
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Computer(props) {
  const { nodes, materials } = useGLTF('/computer.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 11]}>
        <group scale={2.5} rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Part2} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Part1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/computer.gltf')
