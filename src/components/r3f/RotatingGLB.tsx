import { useRef, useState } from 'react';
import GLBLoader from '../../modules/GLBLoader.tsx';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';

const ORIGIN_SPEED = 0.003;

const RotatingGLB = ({ url }: { url: string }) => {
  const ref = useRef<Group>(null);
  const speedRef = useRef<number>(1.5);
  const [isDragging, setIsDragging] = useState(false);

  useFrame(() => {
    if (speedRef.current > ORIGIN_SPEED) {
      speedRef.current -= speedRef.current * 0.025;
    }
    if (ref.current && !isDragging) {
      ref.current.rotation.y += speedRef.current;
    }
  });

  return <GLBLoader ref={ref} url={url} setIsDragging={setIsDragging} />;
};

export default RotatingGLB;
