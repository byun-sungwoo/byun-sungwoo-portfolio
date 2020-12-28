import React, { Component } from 'react';
import * as THREE from 'three';
import { Expo, TimelineMax } from "gsap";

export default class Board extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: props.color !== undefined && props.color !== null ? props.color : '#0f1011',
			colorStart: props.colorStart !== undefined && props.colorStart !== null ? hexToRgb(props.colorStart) : '15,16,17',
			colorEnd: props.colorEnd !== undefined && props.colorEnd !== null ? hexToRgb(props.colorEnd) : '15,16,17',
			action: props.action !== undefined && props.action !== null ? props.action : 'flip',
		}
	}

	componentDidMount() {
		const action = this.state.action;

		// Setup
		const width = this.mount.clientWidth;
		const height = this.mount.clientHeight;
		var scene = new THREE.Scene();
		var camera = new THREE.PerspectiveCamera(
			75,
			width/height,
			0.1,
			1000
		);
		camera.position.z = 5;
		var renderer = new THREE.WebGLRenderer({antialias: true});
		renderer.setClearColor(this.state.color);
		renderer.setSize(width, height);

		this.mount.appendChild(renderer.domElement);

		function onWindowResize() {
			camera.aspect = width/height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		}

		let blocks = [];
		let raycaster = new THREE.Raycaster();
		let mouse = new THREE.Vector2();

		// Adding Cube
		let geometry = new THREE.BoxGeometry(1.1, 1, 1);
		for (let i = -20; i <= 20; i++) {
			let material;
			let mesh;
			let blockCount = 7;
			let colorArray = interpolateColors(`rgb(${this.state.colorStart})`, `rgb(${this.state.colorEnd})`, (blockCount*2)+1);
			for (let j = -blockCount; j <= blockCount; j++) {
				material = new THREE.MeshLambertMaterial({color: colorArray[(blockCount*2)-(blockCount+j)]});
				// material = new THREE.MeshBasicMaterial({color: colorArray[(blockCount*2)-(blockCount+j)]});
				mesh = new THREE.Mesh(geometry, material);
				mesh.position.y = j*1;
				mesh.position.x = i*1;
				mesh.position.z = -5;
				blocks.push(mesh);
				scene.add(mesh);
			}
		}

		// // Adding Light
		let light = new THREE.PointLight(0xFFFFFF, 1, 100);
		// light.position.set(0,0,0);
		// scene.add(light);

		light = new THREE.PointLight(0xFFFFFF, 1.5, 100);
		light.position.set(0,0,25);
		scene.add(light);

		function drawScene() {
			requestAnimationFrame(drawScene);
			renderer.render(scene, camera);
		}

		function onMouseMove(event) {
			event.preventDefault();
			mouse.x = (event.clientX / width) * 2 - 1;
			mouse.y = - (event.clientY / height) * 2 + 1;
			raycaster.setFromCamera(mouse, camera);
			let intersects = raycaster.intersectObjects(scene.children, true);
			for(let i = 0; i < intersects.length; i++) {
				// intersects[i].object.material.color.set('#1ED760');
				let tl1 = new TimelineMax();
				if(action !== undefined && action !== null && action === 'pull') {
					tl1.to(intersects[i].object.position, 1, {z: -4.5, ease: Expo.easeOut});
					tl1.to(intersects[i].object.position, 1, {z: -5, ease: Expo.easeOut});
				} else if(action !== undefined && action !== null && action === 'push') {
					tl1.to(intersects[i].object.position, 1, {z: -5.5, ease: Expo.easeOut});
					tl1.to(intersects[i].object.position, 1, {z: -5, ease: Expo.easeOut});
				} else if(action !== undefined && action !== null && action === 'flip-right') {
					tl1.to(intersects[i].object.rotation, 1.5, {y: Math.PI*.5, ease: Expo.easeOut});
					tl1.to(intersects[i].object.rotation, 0, {y: 0, ease: Expo.easeOut});
				} else if(action !== undefined && action !== null && action === 'random') {
					switch(Math.floor(Math.random()*4)) {
					case 0:
						tl1.to(intersects[i].object.rotation, 1.5, {y: Math.PI*.5, ease: Expo.easeOut});
						tl1.to(intersects[i].object.rotation, 0, {y: 0, ease: Expo.easeOut});
						break;
					case 1:
						tl1.to(intersects[i].object.rotation, 1.5, {y: -Math.PI*.5, ease: Expo.easeOut});
						tl1.to(intersects[i].object.rotation, 0, {y: 0, ease: Expo.easeOut});
						break;
					case 2:
						tl1.to(intersects[i].object.rotation, 1.5, {x: Math.PI*.5, ease: Expo.easeOut});
						tl1.to(intersects[i].object.rotation, 0, {x: 0, ease: Expo.easeOut});
						break;
					default:
						tl1.to(intersects[i].object.rotation, 1.5, {x: -Math.PI*.5, ease: Expo.easeOut});
						tl1.to(intersects[i].object.rotation, 0, {x: 0, ease: Expo.easeOut});
						break;
					}
				} else {
					tl1.to(intersects[i].object.rotation, 1.5, {x: Math.PI*.5, ease: Expo.easeOut});
					tl1.to(intersects[i].object.rotation, 0, {x: 0, ease: Expo.easeOut});
					// tl1.to(intersects[i].object.rotation, 1, {x: Math.PI*.5, ease: Expo.easeOut}, '=-.1');
					// tl1.to(intersects[i].object.rotation, 0, {x: 0, ease: Expo.easeOut});
				}
				// tl1.to(intersects[i].object.position, .5, {x: intersects[i].object.position-, ease: Expo.easeOut});
			}
		}
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('resize', onWindowResize);
		drawScene();
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.onMouseMove);
		window.removeEventListener('resize', this.onWindowResize);
	}

	render() {
		return (
			<div
				style={{
					overflow: 'hidden',
					margin: '0',
					height: '100vh'
				}}
				ref={mount => { this.mount = mount}}
			/>
		)
	}
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
	?	[	parseInt(result[1], 16),
			parseInt(result[2], 16),
			parseInt(result[3], 16)]
	: null;
}

function interpolateColor(color1, color2, factor) {
	if (arguments.length < 3) { 
		factor = 0.5; 
	}
	var result = color1.slice();
	for (var i = 0; i < 3; i++) {
		result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
	}
	return result;
};

function interpolateColors(color1, color2, steps) {
	var stepFactor = 1 / (steps - 1),
		interpolatedColorArray = [];

	color1 = color1.match(/\d+/g).map(Number);
	color2 = color2.match(/\d+/g).map(Number);

	for(var i = 0; i < steps; i++) {
		let arr = interpolateColor(color1, color2, stepFactor * i);
		let r = arr[0];
		let g = arr[1];
		let b = arr[2];
		interpolatedColorArray.push("#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
	}

	return interpolatedColorArray;
}