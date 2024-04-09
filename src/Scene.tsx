import React from "react";
import {Box, OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Scene = () => (
    <Canvas style={{ width: "100vw", height: "100vh" }} camera={{"position": [3, 2, 7]}}>
        <Box scale={3}>
            <meshBasicMaterial attach={"material"} color={"purple"} />
        </Box>
        <OrbitControls enablePan={false} autoRotate={true} autoRotateSpeed={1.7} />
    </Canvas>
);

export default Scene;