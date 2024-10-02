import { forwardRef, Dispatch, SetStateAction } from 'react';
import {useGLTF} from "@react-three/drei";
import { Group } from 'three';

interface IGLBLoader {
  url: string;
  setIsDragging?: Dispatch<SetStateAction<boolean>>;
}

const GLBLoader = forwardRef<Group, IGLBLoader>(({ url, setIsDragging }, ref) => {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/HomePage/' : '';
  const { scene } = useGLTF(`${baseUrl}${url}`);
  
  const handleDragging = (state: boolean) => {
    if (setIsDragging) {
      setIsDragging(state);
    }
  }
  
  
  return (
    <primitive
      ref={ref}
      object={scene}
      onPointerDown={() => handleDragging(true)}
      onPointerUp={() => handleDragging(false)}
      onPointerLeave={() => handleDragging(false)}
    />
  );
});

export default GLBLoader;