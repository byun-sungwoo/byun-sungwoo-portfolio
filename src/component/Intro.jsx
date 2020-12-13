import React, { Component } from 'react';
import MountainJPG from '../image/mountain2.png';
import './Intro.css';

export default class Intro extends Component {
	render() {
		return (
			<div style={{position:"absolute", width:'100%', height:'100%'}}>
				<img
				alt='mountain'
				style={{
					position: 'absolute',
					objectFit: 'cover',
					width: '100%',
					// height: '50%',
				}}
				src={MountainJPG}
				/>
				<div style={{color:'white', position:'absolute'}}>
					<div
					style={{
						marginLeft: '0.5em',
						marginTop: '2em',
						fontSize:'5em',
						fontFamily: "sans-serif",
						opacity: '80%',
						fontWeight: 'bold'
					}}>
						Hi,<br/>
						I'm Daniel,<br/>
						software engineer.<br/>
						<button id="navButton" onClick={() => this.props.moveTo(2)}>
							ABOUT ME
						</button>
						<button id="navButton" onClick={() => this.props.moveTo(4)}>
							PROJECTS
						</button>
					</div>
				</div>
			</div>
		)
	}
}