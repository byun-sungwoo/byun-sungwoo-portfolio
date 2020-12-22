import React, { Component } from 'react';
import Resize from './component/Resize';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			intro: true
		}
	}

	render() {
		let intro = this.state.intro;
		const textlink = (text, link='', pos) => {return (
			<h1 className={`githubio${pos}`} align="center">
				<a
				target="_blank"
				rel="noreferrer"
				className="underline"
				href={link}>
					{text}
				</a>
			</h1>
		)}
		const links = () => {return (
			<div style={{position: 'fixed', whiteSpace: 'nowrap', bottom: '0'}}>
				{textlink("github/byun-sungwoo", "https://github.com/byun-sungwoo",1)}
			</div>
		)}

		const animation = () => {
			return (
				<div
				style={{margin: '0', height: '100vh', overflow: 'hidden', backgroundColor: 'red'}}
				onClick={() => {this.setState({intro: !intro})}}
				>
					<div>hi</div>
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