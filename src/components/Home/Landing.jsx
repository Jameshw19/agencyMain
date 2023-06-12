import React, { useEffect } from "react";
import * as THREE from "three";

const Landing = () => {
  useEffect(() => {
    const canvas = document.querySelector("canvas.webgl");

    const scene = new THREE.Scene();

    let mouseX = 0,
      mouseY = 0,
      windowHalfX = window.innerWidth / 2,
      windowHalfY = window.innerHeight / 2;
    const spheres = [];

    document.addEventListener("mousemove", onDocumentMouseMove);

    const geometry = new THREE.TetrahedronGeometry(3);
    const material = new THREE.MeshPhongMaterial({
      specular: 0x333333,
      shininess: 100,
      combine: THREE.MixOperation,
      reflectivity: 0.4,
    });

    var light1 = new THREE.DirectionalLight(0xe9204f, 1.5);
    light1.position.set(100, 0, 0);
    scene.add(light1);

    var light2 = new THREE.DirectionalLight(0xac1135, 1.5);
    light2.position.set(-100, 0, 0);
    scene.add(light2);

    const meshT = {
      triangles: 70,
    };

    for (let i = 0; i < meshT.triangles; i++) {
      const meshScale = Math.random() * 0.35 * 0.7;
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.x = Math.random();
      mesh.position.y = Math.random();
      mesh.position.z = Math.random() * 50;
      mesh.scale.set(meshScale, meshScale, meshScale);

      scene.add(mesh);

      spheres.push(mesh);
    }

    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    window.addEventListener("resize", () => {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;

      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new THREE.PerspectiveCamera(
      60,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 25;
    scene.add(camera);

    function onDocumentMouseMove(event) {
      mouseX = (event.clientX - windowHalfX) / 100;
      mouseY = (event.clientY - windowHalfY) / 100;
    }

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const clock = new THREE.Clock();

    const tick = () => {
      const timer = 0.0001 * Date.now();

      camera.position.x += (mouseX - camera.position.x) * 0.1;
      camera.position.y += (-mouseY - camera.position.y) * 0.1;

      camera.lookAt(scene.position);

      for (let i = 0, il = spheres.length; i < il; i++) {
        const sphere = spheres[i];

        sphere.position.x = 10 * Math.cos(timer + i);
        sphere.position.y = 5 * Math.sin(timer + i * 1.1);

        sphere.rotation.x = 5 * Math.cos(timer + i);
        sphere.rotation.y = 5 * Math.sin(timer + i * 1.1);
      }

      renderer.render(scene, camera);

      window.requestAnimationFrame(tick);
    };

    tick();
  }, []);
  return (
    <>
      <canvas className="webgl"></canvas>

      <section id="landing__page">
        <header className="container">
          <div className="bg-overlay"></div>
          <div className="header__display--table">
            <div className="header__display--tabel-cell">
              <div className="container">
                <div className="row">
                  <div className="header__content">
                    <span className="break__line"></span>
                    <h1 className="header__title">
                      We&apos;re a digital agency.
                    </h1>
                    <a href="#services">
                      <button className="header__button">
                        Getting Started
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </section>
    </>
  );
};

export default Landing;
