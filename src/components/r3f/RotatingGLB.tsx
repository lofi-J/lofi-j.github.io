import { useRef, useState } from 'react';
import GLBLoader from '../../modules/GLBLoader.tsx';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';


const RotatingGLB = ({url}: {url: string}) => {
  const ref = useRef<Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  let speed = 0.8;
  
  
  useFrame(() => {
    if (speed > 0.003) {
      speed-= speed * 0.01;
    }
    if (ref.current && !isDragging) {
      ref.current.rotation.y += speed;
    }
  });
  
  return <GLBLoader ref={ref} url={url} setIsDragging={setIsDragging} />
}

export default RotatingGLB;