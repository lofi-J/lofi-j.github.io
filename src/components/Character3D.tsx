import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import {css} from "@emotion/react";
import {mq} from "../styles/media.ts";
import RotatingGLB from './r3f/RotatingGLB.tsx';


const Character3D = () => {
  
  return (
    <Canvas
      css={main}
      camera={{position: [-6, 6, 6], fov: 75}}
    >
      <OrbitControls minDistance={8} maxDistance={20}/>
      <ambientLight intensity={1}/>
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow={false}/>
      <RotatingGLB url={'/assets/dog.glb'}/>
    </Canvas>
  );
}

const main = css`
  width: 48rem !important;
  height: 48rem !important;
  position: absolute !important;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  
  
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