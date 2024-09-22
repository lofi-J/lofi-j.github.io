import { useRef, useState } from 'react';
import GLBLoader from '../../modules/GLBLoader.tsx';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

const RotatingGLB = ({url}: {url: string}) => {
  const ref = useRef<Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  useFrame(() => {
    if (ref.current && !isDragging) {
      ref.current.rotation.y += 0.003;
    }
  });
  
  return <GLBLoader ref={ref} url={url} setIsDragging={setIsDragging} />
}

export default RotatingGLB;