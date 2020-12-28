import React, { useEffect } from 'react';
import Aos from "aos";
import Me from '../image/img1.png';
import Background from '../image/about.png';
import '../css/Intro.css';
import "../css/About.css";

const About = () => {
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
	const [imageLoaded1, setImageLoaded1] = React.useState(false);
	const setImage1True = React.useCallback(() => setImageLoaded1(true),[],);
	const [imageLoaded2, setImageLoaded2] = React.useState(false);
	const setImage2True = React.useCallback(() => setImageLoaded2(true),[],);
	const image1 = () => (
		<img
		alt='profile'
		onLoad={setImage1True}
		style={{
			marginLeft: '1vw',
			height: '35vh',
			borderRadius: '50%'
		}}
		src={Me}
		/>
	)
	const image2 = () => (
		<img
		alt='profile'
		onLoad={setImage2True}
		style={{
			position: 'absolute',
			objectFit: 'cover',
			width: '100%',
			bottom: '0',
		}}
		src={Background}
		/>
	)
	if(!(imageLoaded1 && imageLoaded2)) {return (
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
			<div hidden={true}>{image2()}</div>
		</div>
	)}
	let delay = 1000;
	return (
		<div
		style={{
			overflow:'hidden',
			position:"absolute",
			width:'100%',
			height:'100%',
			color: '#fff',
			fontSize: '1em',
			textDecoration: 'none',
			fontFamily: 'Dosis, sans-serif',
		}}>
			{image2()}
			<div style={{marginLeft: '2.25em', marginTop: '5%'}}>
				<div
				data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1000"
				style={{marginTop: '2.25em', position: 'absolute'}}
				>
					{image1()}
				</div>
				<div
				style={{
					marginLeft: '20vw',
					marginTop:'1em',
					fontSize: '8vh',
					fontWeight: 'bold',
				}}
				>
					<div data-aos="fade-in" data-aos-easing="ease-out" data-aos-duration="5000">
						About Me<br/>
					</div>
					<div style={{opacity:'.9', marginLeft: '4vw', marginTop: '2em', fontSize: '0.25em', fontWeight: 'bold', lineHeight: '1.5em'}}>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+600}>
							Major GPA: 3.68 | Cumulative GPA: 3.54
						</div><br/>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+300}>
							Senior at Indiana University Bloomington pursuing a B.S. in Computer Science.<br/>
							Specializing in Software Engineering and graduating in May 2021.
						</div><br/>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+0}>
							Passionate about coding, designing, and learning more efficient ways to solve problems.
						</div><br/>
					</div>
				</div>
			</div>
			<div
			style={{
				width:'100%',
				position: 'absolute',
				marginTop:'1em',
				fontSize: '8vh',
			}}>
				<div style={{fontSize: '.5em'}}>
					<table style={{opacity:'.9', marginLeft: 'auto', marginRight: 'auto'}} data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration={delay+500}>
						<thead style={{margin:'1em', fontWeight: 'bold'}}>
							<tr>
								<th>Languages</th>
								<th>Frameworks</th>
								<th>Databases</th>
							</tr>
						</thead>
						<tr><td>Java</td>		<td>React</td>		<td>PostgreSQL</td>	</tr>
						<tr><td>JavaScript</td>	<td>Spring</td>		<td>MySQL</td>		</tr>
						<tr><td>Ruby</td>		<td>Rails</td>		<td id="noCursor"/>	</tr>
						<tr><td>C</td>			<td>ASP.NET</td>	<td id="noCursor"/>	</tr>
						<tr><td>Python</td>		<td id="noCursor"/>	<td id="noCursor"/>	</tr>
						<tr><td>C#</td>			<td id="noCursor"/>	<td id="noCursor"/>	</tr>
						<tr><td>C++</td>		<td id="noCursor"/>	<td id="noCursor"/>	</tr>
					</table>
				</div>
			</div>
		</div>
	)
}
export default About;