import React, { Component } from 'react';
import Resize from './component/Resize';
import './App.css';
import InfoIcon from '@material-ui/icons/Info';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			intro: true
		}
	}

	render() {
		let intro = this.state.intro;
		const textlink = (text, link, pos, nowhere=true) => {return (
			<h1 className={`hoverAnimation${pos}`} align="center">
				{!nowhere
				? <a target="_blank" rel="noreferrer" className="underline" href={link}>
					{text}
					<GitHubIcon id="underlineIcon"/>
				</a>
				: <a rel="noreferrer" className="underline">
					{text}
					<GitHubIcon id="underlineIcon"/>
				</a>
				}
			</h1>
		)}
		const links = () => {return (
			<div style={{position: 'fixed', whiteSpace: 'nowrap', bottom: '0'}}>
				{textlink("github", "https://github.com/byun-sungwoo", 1, false)}
				{/* {textlink("contact", '', 2)} */}
				<div className='infoIcon'>
					<InfoIcon style={{fontSize:'3vh'}}/>
					<div className="infoText">Created with React using FullPage and Three.<br/>Hosted by GitHub pages.</div>
				</div>
			</div>
		)}

		const animation = () => {
			return (
				<div
				style={{margin: '0', height: '100vh', overflow: 'hidden', backgroundColor: 'red'}}
				onClick={() => {this.setState({intro: !intro})}}
				>
					{links()}
				</div>
			)
		}
		return (
			<div style={{width:"100%", height:"100%"}}>
				{!intro
				? animation()
				: <Resize />
				}
				{links()}
			</div>
		);
	}
}