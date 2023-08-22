import React, { useRef } from "react";
import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Experience = () => {
  const map = useTexture("textures/texture.jpg");
  const myMesh = useRef();
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() / 10;
  });

  return (
    <>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI * 0.4}
        maxPolarAngle={Math.PI / 1.7}
      />
      <ambientLight intensity={0.5} />
      <Environment preset="sunset" />
      <mesh ref={myMesh && myMesh}>
        <sphereGeometry args={[4, 32, 32]} />
        <meshStandardMaterial map={map} side={THREE.BackSide} />
      </mesh>
    </>
  );
};

export default Experience;
