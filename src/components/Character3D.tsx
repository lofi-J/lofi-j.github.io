import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import GLBLoader from "../modules/GLBLoader.tsx";
import {css} from "@emotion/react";
import {mq} from "../styles/media.ts";

const Character3D = () => {
  return (
    <Canvas
      css={main}
      camera={{ position: [-6, 6, 6], fov: 63.3 }}
    >
      <OrbitControls minDistance={8} maxDistance={20} />
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <GLBLoader url={'/assets/dog.glb'} />
    </Canvas>
  );
}

const main = css`
  z-index: 0;
  width: 48rem !important;
  height: 48rem !important;
  ${mq('tablet')} {
    width: 34rem !important;
    height: 34rem !important;
  }
  ${mq('mobile')} {
    width: 28rem !important;
    height: 28rem !important;
  }
`;

export default Character3D;