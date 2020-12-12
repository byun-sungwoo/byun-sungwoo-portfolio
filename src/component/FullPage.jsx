import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Board from './Board';
export default class FullPage extends Component {
	constructor() {
		super();
		this.state = {
			sectionsColor: ['#0f1011', '#0f1011', '#0f1011'],
		}
	}

	render() {
		console.log(window.innerWidth, window.innerHeight);
		return (
			<ReactFullpage
			scrollingSpeed = {1000}
			navigation={true}
			sectionsColor={this.state.sectionsColor}
			width={window.innerWidth}
			height={window.innerHeight}

			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
					<div className="section">
						<div style={{position: 'relative'}}>
							<div style={{right: '5%', top: '2.5%', position:'absolute', color:'#101011', fontSize:'50px'}}>Push</div>
							<Board width={window.innerWidth} action="push" style={{position:'absolute'}}/>
						</div>
					</div>
					<div className="section">
						<div style={{position: 'relative'}}>
							<div style={{right: '5%', top: '2.5%', position:'absolute', color:'#101011', fontSize:'50px'}}>Pull</div>
							<Board action="pull" style={{position:'absolute'}}/>
						</div>
					</div>
					<div className="section">
						<div style={{position: 'relative'}}>
							<div style={{right: '5%', top: '2.5%', position:'absolute', color:'#101011', fontSize:'50px'}}>Flip</div>
							<Board action="flip" style={{position:'absolute'}}/>
						</div>
					</div>
					</ReactFullpage.Wrapper>
				);
			}}
			/>
		)
	}
}