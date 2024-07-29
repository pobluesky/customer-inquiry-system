// CircleChart.js
import React from 'react';
import { Engine, Scene, useScene } from 'react-babylonjs';
import { ArcRotateCamera, Vector3, HemisphericLight, MeshBuilder, StandardMaterial, Color3 } from '@babylonjs/core';

const CircleChart = ({ percentage }) => {
  const scene = useScene();

  React.useEffect(() => {
    if (scene) {
      // 카메라 설정
      const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);
      camera.attachControl(scene.getEngine().getRenderingCanvas(), true);

      // 조명 설정
      new HemisphericLight("light", new Vector3(1, 1, 0), scene);

      // 원형 그래프 생성 함수
      const createCircle = (percentage) => {
        const color = new Color3(0, 0, 1);
        const fullCircle = MeshBuilder.CreateDisc("fullCircle", { radius: 1, tessellation: 100 }, scene);
        fullCircle.isVisible = false;

        const halfCircle = MeshBuilder.CreateDisc("halfCircle", { radius: 1, tessellation: 100 }, scene);
        halfCircle.rotation.z = -Math.PI / 2;
        halfCircle.scaling.x = percentage;
        const material = new StandardMaterial("material", scene);
        material.diffuseColor = color;
        halfCircle.material = material;

        return [fullCircle, halfCircle];
      };

      createCircle(percentage);
    }
  }, [scene, percentage]);

  return null;
};

const CircleChartComponent = ({ percentage }) => (
  <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
    <Scene>
      <CircleChart percentage={percentage} />
    </Scene>
  </Engine>
);

export default CircleChartComponent;
