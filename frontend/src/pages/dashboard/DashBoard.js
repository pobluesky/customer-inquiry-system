import React from 'react';
import { Engine, Scene, useScene } from 'react-babylonjs';
import { ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3 } from '@babylonjs/core';

const DonutGraph = () => {
    const scene = useScene();

    React.useEffect(() => {
        if (scene) {
            // Camera
            const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 5, Vector3.Zero(), scene);
            camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

            // Light
            new HemisphericLight("light", new Vector3(1, 1, 0), scene);

            // Donut base
            const donut = MeshBuilder.CreateTorus("donut", { diameter: 3, thickness: 0.5, tessellation: 64 }, scene);

            const material = new StandardMaterial("donutMaterial", scene);
            material.diffuseColor = new Color3(0.8, 0.8, 0.8); // Light grey color for the donut base
            donut.material = material;

            // Donut segment
            const segment = MeshBuilder.CreateTorus("segment", { diameter: 3, thickness: 0.5, tessellation: 64, arc: 0.8 }, scene); // 80% segment

            const segmentMaterial = new StandardMaterial("segmentMaterial", scene);
            segmentMaterial.diffuseColor = new Color3(1, 0, 0); // Red color for the 80% segment
            segment.material = segmentMaterial;
        }
    }, [scene]);

    return null;
}

const DashBoard = () => (
    <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene>
            <DonutGraph />
        </Scene>
    </Engine>
);

export default DashBoard;


// const DashBoard = () => {
//   return (
//     <div style={{ width: '400px', height: '400px' }}>
//       <CircleChartComponent percentage={0.8} />
//     </div>
//   );
// };

// export default DashBoard;
