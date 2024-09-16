import {useAnimations, useGLTF} from "@react-three/drei";
import {useEffect} from "react";

interface IGLBLoader {
  url: string;
}

const GLBLoader = ({ url }: IGLBLoader) => {
  const { scene, animations } = useGLTF(url);  // GLB 파일을 로드하는 훅
  const { actions } = useAnimations(animations, scene); // 애니메이션 로드
  
  console.log(`act: ${JSON.stringify(actions)}`);
  
  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]]?.play(); // 첫 번째 애니메이션 실행
    }
  }, [actions]);
  
  return <primitive object={scene} />;
};

export default GLBLoader;