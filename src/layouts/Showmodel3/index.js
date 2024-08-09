import React, { useState, lazy, Suspense, useEffect, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls

import Model1 from "../../components/Model3";

// Extend THREE with custom geometries
extend({ PlaneGeometry: THREE.PlaneGeometry, BoxGeometry: THREE.BoxGeometry });

function Showmodel1(){
    return(
        <div style={{ width: '100vw', height: '100vh' }}> {/* Container div */}
            <Canvas shadows style={{ width: '100%', height: '100%' }}> {/* Canvas full screen */}
                {/* Môi trường */}
                <ambientLight intensity={2} />
                {/* item */}
                <Model1
                    position={[0, -2, -20]}
                    rotation={[10, 30, 0]}
                    scale={[2,2,2]}
                />
                {/* item */}
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Showmodel1;