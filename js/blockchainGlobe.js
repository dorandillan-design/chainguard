/* ================= 3D BLOCKCHAIN GLOBE ================= */

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("globeContainer");

    if (!container) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);

    container.appendChild(renderer.domElement);

    /* globe */

    const geometry = new THREE.SphereGeometry(2, 32, 32);

    const material = new THREE.MeshBasicMaterial({

        color: 0x4fd1ff,
        wireframe: true,
        transparent: true,
        opacity: 0.7

    });

    const globe = new THREE.Mesh(geometry, material);

    scene.add(globe);

    camera.position.z = 5;

    /* blockchain nodes */

    const nodeGeometry = new THREE.SphereGeometry(0.05, 8, 8);

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffa3 });

    for (let i = 0; i < 40; i++) {

        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);

        const phi = Math.acos((Math.random() * 2) - 1);
        const theta = Math.random() * Math.PI * 2;

        node.position.set(
            2 * Math.sin(phi) * Math.cos(theta),
            2 * Math.sin(phi) * Math.sin(theta),
            2 * Math.cos(phi)
        );

        scene.add(node);

    }

    /* animation */

    function animate() {

        requestAnimationFrame(animate);

        globe.rotation.y += 0.002;
        globe.rotation.x += 0.0008;

        scene.rotation.y += 0.0006;

        renderer.render(scene, camera);

    }

    animate();

});