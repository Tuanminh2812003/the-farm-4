import React, { useState, lazy, Suspense, useEffect, useRef } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls

import Model1 from "../../components/Model5";
import RectAreaLight from '../../components/RectAreaLight';

// Extend THREE with custom geometries
extend({ PlaneGeometry: THREE.PlaneGeometry, BoxGeometry: THREE.BoxGeometry });

function Showmodel1(){
    return(
        <div style={{ width: '100vw', height: '100vh' }}> {/* Container div */}
            <Canvas shadows style={{ width: '100%', height: '100%' }}> {/* Canvas full screen */}
                {/* Môi trường */}
                <ambientLight intensity={1} />
                <directionalLight 
                    castShadow 
                    position={[5, 10, 7]} 
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-camera-far={50}
                    shadow-camera-left={-10}
                    shadow-camera-right={10}
                    shadow-camera-top={10}
                    shadow-camera-bottom={-10}
                />
                <RectAreaLight 
                    position={[2, 5, 5]} 
                    color="white"
                    intensity={5}
                    lookAt={[0,0,0]}
                />
                {/* item */}
                <Model1
                    position={[5, -1, -1]}
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