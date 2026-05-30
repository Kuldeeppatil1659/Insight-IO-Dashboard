import React, { Suspense, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { PCDLoader } from "three/examples/jsm/loaders/PCDLoader";
import { Box } from "@mui/material";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          color: "#00ff00",
          fontFamily: "monospace",
          fontSize: "1.2rem",
          whiteSpace: "nowrap",
        }}
      >
        Loading Map Data: {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

function PointCloud({ url }) {
  const pcd = useLoader(PCDLoader, url);

  useMemo(() => {
    pcd.geometry.center();
  }, [pcd]);

  return (
    <points>
      <primitive object={pcd.geometry} attach="geometry" />
      <pointsMaterial
        attach="material"
        size={0.02}
        color={0x00ffcc}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function Map3DView() {
  return (
    <Box sx={{ width: "100%", height: "100%", backgroundColor: "#050505" }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        {/* Subtle lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <Suspense fallback={<Loader />}>
          <PointCloud url="/assets/map.pcd" />
        </Suspense>

        {/* OrbitControls allow the user to drag to rotate and scroll to zoom */}
        <OrbitControls enableDamping autoRotate autoRotateSpeed={0.5} />

        {/* Subtle grid floor for better spatial context */}
        <gridHelper
          args={[50, 50, "#222222", "#111111"]}
          position={[0, -2, 0]}
        />
      </Canvas>
    </Box>
  );
}
