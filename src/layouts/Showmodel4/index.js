import React, { useState, lazy, Suspense, useEffect, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls

import Model1 from "../../components/Model1";

// Extend THREE with custom geometries
extend({ PlaneGeometry: THREE.PlaneGeometry, BoxGeometry: THREE.BoxGeometry });

function Showmodel1(){
    return(
        <div style={{ width: '100vw', height: '100vh' }}> {/* Container div */}
            <Canvas shadows style={{ width: '100%', height: '100%' }}> {/* Canvas full screen */}
                {/* Môi trường */}
                <ambientLight intensity={3} />
                {/* item */}
                <Model1
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={[2,2,2]}
                />
                {/* item */}
                <OrbitControls />
            </Canvas>
        </div>
    )
}
export default Showmodel1;