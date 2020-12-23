import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Me from '../image/img4.jpg';
import "../css/About.css";

const About = () => {
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
	const image1 = () => (
		<img
		alt='profile'
		style={{
			width: '20vw',
			borderRadius: '50%'
		}}
		src={Me}
		/>
	)
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
			fontFamily: 'Dosis, sans-serif'
		}}>
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
					// fontSize: '5em',
					fontWeight: 'bold',
					opacity: '80%'
				}}
				>
					<div data-aos="fade-in" data-aos-easing="ease-out" data-aos-duration="5000">
						About Me<br/>
					</div>
					<div style={{marginLeft: '4vw', marginTop: '2em', fontSize: '0.25em', fontWeight: 'bold', lineHeight: '1.5em'}}>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+600}>
							Cumulative GPA: 3.54 | Major GPA: 3.68
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
				opacity: '80%'
			}}>
				<div style={{fontSize: '.5em'}}>
					<table style={{marginLeft: 'auto', marginRight: 'auto'}} data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration={delay+500}>
						<thead style={{margin:'1em', fontWeight: 'bold'}}>
							<tr>
								<th>Languages</th>
								<th>Frameworks</th>
								<th>Databases</th>
							</tr>
						</thead>
						<tr><td>Java</td>		<td>React</td>		<td>PostgreSQL</td>	</tr>
						<tr><td>JavaScript</td>	<td>ASP.NET</td>	<td>MySQL</td>		</tr>
						<tr><td>C</td>			<td>Spring</td>		<td id="noCursor"/>	</tr>
						<tr><td>Ruby</td>		<td>Rails</td>		<td id="noCursor"/>	</tr>
						<tr><td>Python</td>		<td id="noCursor"/>	<td id="noCursor"/>	</tr>
						<tr><td>C#</td>			<td id="noCursor"/>	<td id="noCursor"/>	</tr>
						<tr><td>C++</td>		<td id="noCursor"/>	<td id="noCursor"/>	</tr>
						<tr><td>Shell</td>		<td id="noCursor"/>	<td id="noCursor"/>	</tr>
						<tr><td>R</td>			<td id="noCursor"/>	<td id="noCursor"/>	</tr>
					</table>
				</div>
			</div>
		</div>
	)
}
export default About;