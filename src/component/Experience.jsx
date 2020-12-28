import React, { useEffect } from 'react';
import Aos from "aos";
import Background from '../image/experience.png';
import "../css/About.css";
import "../css/Experience.css"
import '../css/Intro.css';
// import "aos/dist/aos.css";

const Experience = () => {
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
	const [imageLoaded1, setImageLoaded1] = React.useState(false);
	const setImage1True = React.useCallback(() => setImageLoaded1(true),[],);
	const image2 = () => (
		<img
		alt='profile'
		onLoad={setImage1True}
		style={{
			position: 'absolute',
			objectFit: 'cover',
			width: '100%',
			bottom: '0',
		}}
		src={Background}
		/>
	)
	if(!imageLoaded1) {return (
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
			fontFamily: 'Dosis, sans-serif'
		}}>
			{image2()}
			<div style={{marginLeft: '2.25em', marginTop: '10vh'}}>
				<div
				style={{
					marginLeft: '10vw',
					marginTop:'1em',
					fontSize: '8vh',
					fontWeight: 'bold',
				}}
				>
					<div data-aos="fade-in" data-aos-easing="ease-out" data-aos-duration="5000">
						Experience<br/>
					</div>
					<div style={{marginLeft: '0vw', marginTop: '2em', fontSize: '0.25em', fontWeight: 'bold', lineHeight: '1.5em'}}>
						<div data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+600}>
						Aug 2019 - Present<br/>Undergraduate Instructor at Indiana University Bloomington
						<ul>
							<li>Lead groups of students during labs and provide assistance with assignments/projects.</li>
							<li>Evaluate and grade students’ assignments and provide 1:1 feedback during office hours.</li>
							<li>Cover lectures in absence of professor.</li>
						</ul>
						</div><br/>
						<div style={{marginLeft:'2vh', lineHeight:'.75vh'}}>
						<div className='timeline'>
							<div className='button' data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+200}>
								<div className='text'>
								{'>'} Operating system interfaces and modern object-oriented programming using Java.
								</div>
								<div className='title'>
								Aug 2019 – Dec 2019 | Software Systems
								</div>
							</div>
							<div className='button' data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+400}>
								<div className='text'>
								{'>'} Operating system interfaces and modern object-oriented programming using Java.
								</div>
								<div className='title'>
								Jan 2020 – May 2020 | Software Systems Honors
								</div>
							</div>
							<div className='button' data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+600}>
								<div className='text'>
								{'>'} Maintain a fully functional website primarily using HTML, Perl, Apache, and MySQL.
								</div>
								<div className='title'>
								Jan 2020 - May 2020 | Mastering the World Wide Web
								</div>
							</div>
							<div className='button' data-aos="fade-left" data-aos-easing="ease-out-sine" data-aos-duration={delay+800}>
								<div className='text'>
								{'>'} Operating system interfaces and modern object-oriented programming using Java.
								</div>
								<div className='title'>
								Aug 2020 – Present | Software Systems
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Experience;