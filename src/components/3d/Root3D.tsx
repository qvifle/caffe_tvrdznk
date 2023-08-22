"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const Root3D = () => {
  return (
    <Canvas
      className="h-full w-full absolute top-0 left-0 "
      shadows
      camera={{ position: [0, 0, 6], fov: 30 }}
    >
      <Experience />
    </Canvas>
  );
};

export default Root3D;
