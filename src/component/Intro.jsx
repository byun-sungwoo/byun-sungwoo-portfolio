import React, { Component } from 'react';
import MountainJPG from '../image/intro.png';
import '../css/Intro.css';

export default class Intro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image1Loaded: false
		}
		this.handleImageLoaded = this.handleImageLoaded.bind(this);
	}

	handleImageLoaded() {
		this.setState({image1Loaded : true})
	}

	render() {
		const image1 = () => (
			<img
			className='mountain'
			alt='mountain'
			onLoad={this.handleImageLoaded}
			style={{
				position: 'absolute',
				objectFit: 'cover',
				width: '100%',
				top: '0',
			}}
			src={MountainJPG}
			/>
		)
		if(!this.state.image1Loaded) {return (
			<div
			style= {{
				width: '100%',
				height: '100%',
				backgroundColor: '#1A1C1E',
				position: 'absolute',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
			}}
			>
				<div className='loader'>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div hidden={true}>{image1()}</div>
			</div>
		)}
		return (
			<div style={{position:"absolute", width:'100%', height:'100%', overflow:'hidden'}}>
				{image1()}
				<div style={{color:'white', position:'absolute'}}>
					<div
					style={{
						marginLeft: '5vh',
						marginTop: '55vh',
						fontSize:'8vh',
						fontFamily: "sans-serif",
						fontWeight: 'bold',
					}}>
						<div className='introText'>
							Hi,<br/>I'm Daniel Byun<br/>
							<div style={{textAlign:'right', fontSize:'.5em'}}>software engineer</div><br/>
						</div>
					</div>
					<div style={{marginLeft:'5vh', marginTop:'-6vh'}}>
						<button className="navButton" onClick={() => this.props.moveTo(2)}>
							ABOUT ME
						</button>
						<button className="navButton" onClick={() => this.props.moveTo(4)}>
							PROJECTS
						</button>
					</div>
				</div>
			</div>
		)
	}
}