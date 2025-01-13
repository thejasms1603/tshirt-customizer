import { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <>
      {/* Shadow Accumulation */}
      <AccumulativeShadows
        ref={shadows}
        temporal
        frames={60}
        alphaTest={0.85}
        scale={10} // Fixed typo
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, -0.14]}
        color="white"
      >
        <RandomizedLight
          amount={4}
          radius={9}
          intensity={1} // Increased for brightness
          ambient={0.3}
          position={[5, 5, -10]}
        />
        <RandomizedLight
          amount={4}
          radius={5}
          intensity={0.7} // Increased for brightness
          ambient={0.5}
          position={[-5, 5, -9]}
        />
      </AccumulativeShadows>
    </>
  );
};

export default Backdrop;
