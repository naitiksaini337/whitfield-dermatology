"use client";

import React, { useEffect, useRef } from "react";

// Optimized WebGL Liquid Silk & Pearlescent Ambient Shader
// Lightweight, low-overhead fragment shader tuned for 60-120fps UI fluidity
export function AmbientShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check if user prefers reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });

    if (!gl) return;

    let animationFrameId: number;
    let lastRenderTime = 0;
    const fpsLimit = 36; // Capped for low GPU utilization, freeing up compositor for UI
    const frameInterval = 1000 / fpsLimit;

    let mouse = { x: 0.5, y: 0.5 };
    let targetMouse = { x: 0.5, y: 0.5 };

    const onPointerMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener("mousemove", onPointerMove, { passive: true });

    const vsSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fast, lightweight harmonic silk wave shader (zero loop iterations, ultra-efficient)
    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;
      uniform float u_scroll;

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 uv = (st - 0.5) * vec2(aspect, 1.0);

        float t = u_time * 0.22;
        vec2 m = (u_mouse - 0.5) * 0.25;
        uv += m;

        // Harmonic organic wave superposition
        float v1 = sin(uv.x * 2.8 + t + u_scroll * 1.5);
        float v2 = sin(uv.y * 3.2 - t * 0.8);
        float v3 = sin((uv.x + uv.y) * 2.4 + t * 1.2);
        float v4 = sin(length(uv + vec2(v1 * 0.2, v2 * 0.2)) * 3.5 - t);

        float pattern = (v1 + v2 + v3 + v4) * 0.25 + 0.5;

        // High-end clinic palette:
        // Cream: #FBF7F2
        // Blush: #F7EDE8
        // Rose Gold: #B76E79
        // Champagne: #F0DACB
        vec3 colCream = vec3(0.984, 0.968, 0.949);
        vec3 colBlush = vec3(0.968, 0.929, 0.909);
        vec3 colChampagne = vec3(0.941, 0.854, 0.796);
        vec3 colRoseGold = vec3(0.717, 0.431, 0.474);

        vec3 col = mix(colCream, colBlush, smoothstep(0.1, 0.6, pattern));
        col = mix(col, colChampagne, smoothstep(0.4, 0.85, pattern) * 0.7);
        col = mix(col, colRoseGold, smoothstep(0.75, 1.0, pattern) * 0.28);

        // Soft cursor spotlight
        float dist = length(st - u_mouse);
        col += colChampagne * (smoothstep(0.4, 0.0, dist) * 0.08);

        gl_FragColor = vec4(col, 0.65);
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, "a_position");
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uScroll = gl.getUniformLocation(program, "u_scroll");

    // Rendering at 0.5x resolution for silky soft blur with 4x less GPU workload
    const resize = () => {
      if (!canvas) return;
      const scale = 0.5;
      canvas.width = Math.floor(window.innerWidth * scale);
      canvas.height = Math.floor(window.innerHeight * scale);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize, { passive: true });
    resize();

    const startTime = performance.now();

    const render = (now: number) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = now - lastRenderTime;
      if (elapsed < frameInterval) return;
      lastRenderTime = now - (elapsed % frameInterval);

      mouse.x += (targetMouse.x - mouse.x) * 0.08;
      mouse.y += (targetMouse.y - mouse.y) * 0.08;

      const scrollNorm = (window.scrollY || 0) / (document.documentElement.scrollHeight || 1);

      gl.useProgram(program);

      gl.enableVertexAttribArray(posAttr);
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (now - startTime) * 0.001);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uScroll, scrollNorm);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover opacity-80 blur-xl scale-105"
      />
      {/* Editorial fine grain */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-color-burn"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}
