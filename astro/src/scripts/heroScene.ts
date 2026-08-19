import * as THREE from "three";

/**
 * Encapsulates the Three.js scene used in the hero section.
 * Kept framework-agnostic so it can be unit-tested or reused
 * outside of Astro if needed.
 */
export class HeroScene {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private mesh: THREE.Mesh;
  private clock: THREE.Clock;
  private frameId: number | null = null;
  private resizeObserver: ResizeObserver;

  constructor(private container: HTMLElement) {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    this.camera.position.z = 4;

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    this.mesh = this.createMesh();
    this.scene.add(this.mesh);
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.6));
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(2, 2, 2);
    this.scene.add(dirLight);

    this.clock = new THREE.Clock();

    // Keep the canvas sized to its container rather than the window,
    // so the hero can be resized independently of the viewport.
    this.resizeObserver = new ResizeObserver(() => this.handleResize());
    this.resizeObserver.observe(container);
  }

  private createMesh(): THREE.Mesh {
    const geometry = new THREE.IcosahedronGeometry(1.4, 0);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7f77dd,
      wireframe: false,
      flatShading: true,
    });
    return new THREE.Mesh(geometry, material);
  }

  private handleResize(): void {
    const { clientWidth, clientHeight } = this.container;
    if (clientWidth === 0 || clientHeight === 0) return;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight);
  }

  private animate = (): void => {
    const elapsed = this.clock.getElapsedTime();
    this.mesh.rotation.x = elapsed * 0.15;
    this.mesh.rotation.y = elapsed * 0.2;
    this.renderer.render(this.scene, this.camera);
    this.frameId = requestAnimationFrame(this.animate);
  };

  start(): void {
    if (this.frameId === null) {
      this.animate();
    }
  }

  stop(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }

  dispose(): void {
    this.stop();
    this.resizeObserver.disconnect();
    this.mesh.geometry.dispose();
    (this.mesh.material as THREE.Material).dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
