import React, { useEffect } from 'react';
import Aos from "aos";
import Background from '../image/contact.png';
import SvgIcon from '@material-ui/core/SvgIcon';
import EmailIcon from '@material-ui/icons/Email';
import "../css/About.css";
import "../css/Contact.css";
import '../css/Intro.css';

function HomeIcon(props) {
	return (
		<SvgIcon {...props}>
		<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	);
}

const textlink = (text, link, pos, nowhere=true) => {return (
	<h1 className={`hoverAnimation${pos}`} align="center">
		{!nowhere
		? <a target="_blank" rel="noreferrer" className="underline" href={link}>
			{text}
			<EmailIcon id="underlineIcon"/>
		</a>
		: <a rel="noreferrer" className="underline">
			{text}
			<EmailIcon id="underlineIcon"/>
		</a>
		}
	</h1>
)}

const Ending = (props) => {
	const links = () => {return (
		<div style={{position: 'fixed', whiteSpace: 'nowrap', bottom: '0'}} onClick={() => props.moveTo(5)}>
			{textlink("contact", '', 2)}
		</div>
	)}
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
	const [imageLoaded1, setImageLoaded1] = React.useState(false);
	const setImage1True = React.useCallback(() => setImageLoaded1(true),[],);
	const image1 = () => (
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
			<div style={{position: 'fixed', whiteSpace: 'nowrap', top: '2em', right:'2em'}}>
				<div className='homeIcon' onClick={() => props.moveTo(1)}>
					<HomeIcon className='iconImage' style={{color: 'white', fontSize:'4vh', padding:'1vh'}}/>
				</div>
			</div>
			<div className='loader'>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div hidden={true}>{image1()}</div>
			<div style={{position:'absolute', left:'0', margin: '0', height: '100vh', overflow: 'hidden'}}>
				{links()}
			</div>
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
			{image1()}
			<div style={{position: 'fixed', whiteSpace: 'nowrap', top: '2em', right:'2em'}}>
				<div className='homeIcon' onClick={() => props.moveTo(1)}>
					<HomeIcon className='iconImage' style={{color: 'white', fontSize:'4vh', padding:'1vh'}}/>
				</div>
			</div>
			<div style={{marginLeft: '2.25em', marginTop: '5%'}}>
				<div
				style={{
					marginLeft: '14vw',
					marginTop:'1em',
					fontSize: '8vh',
					fontWeight: 'bold',
				}}
				>
					<div style={{textAlign: 'center', marginRight:'79.5vh', marginTop: '20vh'}} data-aos="fade-in" data-aos-easing="ease-out" data-aos-duration="5000">
						Contact Me<br/>
					</div>
					<div style={{opacity:'80%', textAlign: 'center', marginRight: '40vh', marginTop: '2em', fontSize: '0.25em', fontWeight: 'bold', lineHeight: '1.5em'}}>
						<form action="mailto:dsbyun813@gmail.com" method="GET">
							<div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration={delay+0}>
								<input className="formInput" name="subject" placeholder="subject..." type="text" required/>
							</div><br/>
							<div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration={delay+500}>
								<textarea className="formBody" name="body" placeholder="body..."  required/>
							</div><br/>
							<div data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-duration={delay+1000}>
								<input className="formSubmit" type="submit" value="Send" />
							</div><br/>
						</form>
					</div>
				</div>
			</div>
			<div style={{margin: '0', height: '100vh', overflow: 'hidden'}}>
				{links()}
			</div>
		</div>
	)
}
export default Ending;