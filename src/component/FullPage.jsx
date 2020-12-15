import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Board from './Board';
import Intro from './Intro';

export default class FullPage extends Component {
	constructor() {
		super();
		this.state = {
			sectionsColor: ['#0f1011', '#0f1011', '#0f1011', '#0f1011']
		}
		this.pageTwo = React.createRef();
	}

	render() {
		let colorRange = [
			'#1D1F21',
			'#1D1F21',
			'#1D1F21',
			'#1D1F21',
			'#1D1F21',
		]
		// let colorRange = [
		// 	'#FBF6C6',
		// 	'#D0F3FF',
		// 	'#FFDDD1',
		// 	'#D1FFDD',
		// 	'#DDD1FF',
		// ]
		// let colorRange = [
		// 	'#F0EEC0',
		// 	'#EEF0D5',
		// 	'#F4F2DB',
		// 	'#F5F6ED',
		// 	'#F6F6F6',
		// ]
		return (
			<ReactFullpage
			scrollingSpeed = {1000}
			anchors={['intro', 'section1', 'section2', 'section3']}
			navigation={true}
			sectionsColor={this.state.sectionsColor}
			width={window.innerWidth}
			height={window.innerHeight}

			render={({ state, fullpageApi }) => {
				// this.setState({activeSlide: fullpageApi && fullpageApi.getActiveSection().index});
				return (
					<ReactFullpage.Wrapper>
					<div data-anchor="intro" className="section">
						<div style={{position: 'relative'}}>
							<Intro slideIndex={0} moveTo={(page) => fullpageApi.moveTo(page)}/>
							<Board
							colorStart={colorRange[0]}
							colorEnd={colorRange[1]}
							action="flip-right" style={{position:'absolute'}}/>
						</div>
					</div>
					<div data-anchor="section1" id='section2' className="section" ref={this.pageTwo}>
						<div style={{position: 'relative'}}>
							{/* <div style={{right: '1em', top: '1em', position:'absolute', color:'#101011', fontSize:'50px'}}>Push</div> */}
							<Board
							colorStart={colorRange[1]}
							colorEnd={colorRange[2]}
							action="push"
							style={{position:'absolute'}}/>
						</div>
					</div>
					<div data-anchor="section2" className="section">
						<div style={{position: 'relative'}}>
							{/* <div style={{right: '1em', top: '1em', position:'absolute', color:'#101011', fontSize:'50px'}}>Pull</div> */}
							<Board
							colorStart={colorRange[2]}
							colorEnd={colorRange[3]}
							action="flip"
							style={{position:'absolute'}}/>
						</div>
					</div>
					<div data-anchor="section3" className="section">
						<div style={{position: 'relative'}}>
							{/* <div style={{right: '1em', top: '1em', position:'absolute', color:'#101011', fontSize:'50px'}}>Flip-Down</div> */}
							<Board
							colorStart={colorRange[3]}
							colorEnd={colorRange[4]}
							action="pull"
							style={{position:'absolute'}}/>
						</div>
					</div>
					</ReactFullpage.Wrapper>
				);
			}}
			/>
		)
	}
}