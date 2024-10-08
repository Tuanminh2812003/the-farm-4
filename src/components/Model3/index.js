// src/components/MinhTestPicture/MinhTestPicture.js
import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { clone } from 'three/examples/jsm/utils/SkeletonUtils'; // Import clone
import { Euler } from 'three';

function Model1({ position, rotation, scale, onClick }) {
    const gltf = useLoader(GLTFLoader, '/assets/KV2-PA2.glb');
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
        // Áp dụng một phép quay ban đầu để đảm bảo bức tranh xuất hiện chính diện
        ref.current.rotation.set(
            rotation[0] * (Math.PI / 180),
            rotation[1] * (Math.PI / 180),
            rotation[2] * (Math.PI / 180)
        );

        // Kích hoạt nhận bóng đổ và tạo bóng đổ cho các mesh
        ref.current.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true; // Cho phép tạo bóng đổ
                child.receiveShadow = true; // Cho phép nhận bóng đổ
            }
        });
        }
    }, [rotation]);

    // Nhân bản đối tượng
    const clonedScene = clone(gltf.scene);

    const handleClick = () => {
        if (onClick) {
        onClick(position, rotation, clonedScene);
        }
    };

    return (
        <group ref={ref} position={position} scale={scale} onClick={handleClick}>
            <primitive object={clonedScene} />
        </group>
    );
}

export default Model1;
