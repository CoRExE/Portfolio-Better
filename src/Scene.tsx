import React from "react";
import {Box, OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Scene = () => (
        <Canvas>
            <Box />
            <OrbitControls />
        </Canvas>
);

export default Scene;