import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Background from '../image/projects.png';
import "../css/About.css";
import '../css/Intro.css';
import '../css/Projects.css';
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = () => {
	useEffect(() => {
		Aos.init({duration: 2000});
	}, [])
	const [imageLoaded1, setImageLoaded1] = React.useState(false);
	const setImage1True = React.useCallback(() => setImageLoaded1(true),[],);
	const [project, setProject] = React.useState(0);
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
	const projectContent = function() {
		switch(project) {
		case 0:
			return (
				<div style={{fontSize:'2.5vh', lineHeight:'4vh'}}>
					<h1>Quick-Pick | 2020</h1>
					<ul>
						<u><b>Project Overview</b></u>
						<li>Quick-Pick is a job portal website made for those who need a second job,
							are unable to work on a fixed schedule, or simply have a limit on their availability.</li>
						<li>The project was developed using an agile workflow during a 12 week period with 5 sprints.</li>
						<li>The group consisted of three members where I developed in both the frontend and backend.</li>
						<br/>
						<u><b>Technologies</b></u>
						<li>Frontend: React</li>
						<li>Backend: Spring Boot</li>
						<li>Deployment: Heroku</li>
					</ul>
					<a target="_blank" rel="noreferrer" className="githubLink" href='https://github.com/Arjunbhavsar/Quick-Pick/'>
						Quick-Pick Repository
						<GitHubIcon id="githubIcon"/>
					</a>
				</div>
			)
		case 1:
			return (
				<div style={{fontSize:'2.5vh', lineHeight:'4vh'}}>
					<h1>Gomoku AI | 2018</h1>
					<ul>
						<u><b>Project Overview</b></u>
						<li>Developed and trained an AI to play the traditional Japanese boardgame "Gomoku" or "Five in a Row"
							through linear regression training while utilizing alpha-beta pruning.</li>
						<li>The project was developed during a 2 week period.</li>
						<li>The group consisted of three members where I developed the game logic and trained the AI.</li>
						<br/>
						<u><b>Technologies</b></u>
						<li>Python</li>
					</ul>
					<a target="_blank" rel="noreferrer" className="githubLink" href='https://github.com/byun-sungwoo/GomokuAI'>
						Gomoku AI Repository
						<GitHubIcon id="githubIcon"/>
					</a>
				</div>
			)
		case 2:
			return (
				<div style={{fontSize:'2.5vh', lineHeight:'4vh'}}>
					<h1>Library System | 2017</h1>
					<ul>
						<u><b>Project Overview</b></u>
						<li>Developed a simulation of how a library system may store and load information</li>
						<li>The project was developed during a 2 week period.</li>
						<li>The group consisted of four members where I developed the user management and book storage system.</li>
						<br/>
						<u><b>Technologies</b></u>
						<li>Java</li>
					</ul>
					<a target="_blank" rel="noreferrer" className="githubLink" href='https://github.com/byun-sungwoo/LibrarySystem'>
						Library System Repository
						<GitHubIcon id="githubIcon"/>
					</a>
				</div>
			)
		default:
			return (
				<div style={{fontSize:'2vh', lineHeight:'3vh'}}>
					<h3 style={{display: 'inline-block', marginRight:'2vh'}}>Bytris | 2019</h3>
					<div style={{display: 'inline-block', float:'right'}}>
						<a target="_blank" rel="noreferrer" className="githubLink2" href='https://github.com/byun-sungwoo/Bytris'>
							<GitHubIcon id="githubIcon2"/>
							Bytris Repository
						</a>
					</div>
					<ul>
						<li>Bytris is modern Tetris developed in C with ncurses that runs in unix terminals.</li>
						<li>The project was developed by myself during a 2.5 week period.</li>
						<li>Complete with SRS rotation, lock delay, holding, and a 7 bag system.</li>
					</ul>
					<hr/>
					<h3 style={{display: 'inline-block', marginRight:'2vh'}}>Lineclear | 2020</h3>
					<div style={{display: 'inline-block', float:'right'}}>
						<a target="_blank" rel="noreferrer" className="githubLink2" href='https://github.com/byun-sungwoo/Lineclear'>
							<GitHubIcon id="githubIcon2"/>
							Lineclear Repository
						</a>
					</div>
					<ul>
						<li>Lineclear is a platformer developed in C# with Unity.</li>
						<li>The project was developed by myself during a 4 week period.</li>
						<li>This was my first shot at game development.</li>
						<li>The game is available on itch.io, try it out!</li>
					</ul>
					<hr/>
					<h3 style={{display: 'inline-block', marginRight:'2vh'}}>Portfolio | 2020</h3>
					<div style={{display: 'inline-block', float:'right'}}>
						<a target="_blank" rel="noreferrer" className="githubLink2" href='https://github.com/byun-sungwoo/byun-sungwoo-portfolio'>
							<GitHubIcon id="githubIcon2"/>
							Portfolio Repository
						</a>
					</div>
					<ul>
						<li>The website you are currently on was developed in React.</li>
						<li>The project was developed by myself during a 2 week period.</li>
					</ul>
					<hr/>
					<h3 style={{display: 'inline-block', marginRight:'2vh'}}>Others</h3>
					<ul>
						<li>I have many more smaller projects that I enjoy working on.</li>
						<li>Learning new things and creating is something I enjoy very much.</li>
					</ul>
				</div>
			)
		}
	}
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
			<div>
				<div
				style={{
					marginLeft: '10vw',
					marginTop:'1em',
					fontSize: '8vh',
					fontWeight: 'bold',
				}}
				>
					<div data-aos="fade-in" data-aos-easing="ease-out" data-aos-duration="5000">
						Projects<br/>
					</div>
				</div>
			</div>
			<div
			style={{
				width:'100%',
				position: 'absolute',
			}}>
				<div className='projects'>
					<div className='project' data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-duration={delay+0}>
						<div onClick={() => setProject(0)} className='title' id={project === 0 ? 'selected' : ''}>Quick-Pick</div>
					</div>
					<div className='project' data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-duration={delay+500}>
						<div onClick={() => setProject(1)} className='title' id={project === 1 ? 'selected' : ''}>Gomoku AI</div>
					</div>
					<div className='project' data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-duration={delay+1000}>
						<div onClick={() => setProject(2)} className='title' id={project === 2 ? 'selected' : ''}>Library System</div>
					</div>
					<div className='project' data-aos="fade-right" data-aos-easing="ease-out-sine" data-aos-duration={delay+1500}>
						<div onClick={() => setProject(3)} className='title' id={project === 3 ? 'selected' : ''}>Passion Projects</div>
					</div>
				</div>
				<div className='projectContent' data-aos="fade-in" data-aos-easing="ease-out-sine" data-aos-duration={delay+1000}>
					{projectContent()}
				</div>
			</div>
		</div>
	)
}
export default Projects;