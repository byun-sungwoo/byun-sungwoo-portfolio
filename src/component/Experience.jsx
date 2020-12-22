import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Me from '../image/img2.jpg';
import "../css/About.css";

const Experience = () => {
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
						Experience<br/>
					</div>
					<div style={{marginLeft: '4vw', marginTop: '2em', fontSize: '0.25em', fontWeight: 'bold', lineHeight: '1.5em'}}>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+600}>
						According to all known laws of aviation,
						</div><br/>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+300}>
							there is no way a bee should be able to fly.<br/>
							Its wings are too small to get its fat little body off the ground.<br/>
						</div><br/>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+0}>
						The bee, of course, flies anyway because bees don't care<br/>
						what humans think is impossible.<br/>
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
								<th>1</th>
								<th>2</th>
								<th>3</th>
							</tr>
						</thead>
						<tr><td>Yellow</td><td>Black</td><td>Yellow</td></tr>
						<tr><td>Black</td><td>Yellow</td><td>Black</td></tr>
						<tr><td>Yellow</td><td>Black</td><td>Yellow</td></tr>
						<tr><td>Black</td><td>Yellow</td><td>Black</td></tr>
						<tr><td>Yellow</td><td>Black</td><td>Yellow</td></tr>
						<tr><td>Black</td><td>Yellow</td><td>Black</td></tr>
						<tr><td>Yellow</td><td>Black</td><td>Yellow</td></tr>
						<tr><td>Black</td><td>Yellow</td><td>Black</td></tr>
					</table>
				</div>
			</div>
		</div>
	)
}
export default Experience;