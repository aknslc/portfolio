import { useRef } from 'react'
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Raven(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/raven.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={.8} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.initialShadingGroup} />
      </group>
    </group>
  )
}

useGLTF.preload('/raven.gltf')
