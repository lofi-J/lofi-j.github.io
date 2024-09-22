import {useGLTF} from "@react-three/drei";

const GLBLoader = ({ url }: { url: string }) => {
  const { scene } = useGLTF(url);
  
  return <primitive object={scene} />;
};

export default GLBLoader;