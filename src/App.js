
import './App.css';

function App() {
  return (
		<div className='App'>
			<h1>hi i'm samy 👋</h1>
			{/* <img className='profilephoto' src="./images/profilephoto.png" alt="" /> */}
			<div className='header-links'>
				<h2 className='linkedin'>
					<span>🤝🏼</span>
					<span>
						<a href='https://www.linkedin.com/in/samyfrey/'>
							connect on Linkedin
						</a>
					</span>
				</h2>
				<h2 className='recent-projects'>
					<span>🔦</span>
					<span>
						<a href='#projects-section'>recent projects</a>
					</span>
				</h2>
				<h2 className='email'>
					<span>➡️ </span>
					<span>
						<a href=''>github</a>
					</span>
				</h2>
				<div className='divider'></div>
			</div>
			<h1>bio 📘</h1>
			<p>
				I am Samy Frey, a French-American software developer based in New York👨‍💻
				City. Strong of 10 years of experience in investment & corporate
				banking, I have grown a passion for solving problems and getting complex
				projects across the finish line which I love applying to software
				engineering. Feel free to reach out if you have any questions on my
				projects!
			</p>
			🌎
			<div className='divider'></div>
			<h1>philosophy 🧗‍♂️</h1>
			<p>
				Trilingual software developer with an extensive background in investment
				banking in multiple countries. I am experienced in MERN full-stack web
				development with a strong eye for user experience and hands-on practice
				with REST-based API services. I like to find creative solutions to solve
				client problems, with a thoughtful and organized approach. I am also
				particularly passionate about moving projects from conception to launch.
			</p>
			<div className='divider'></div>
			<h1>recent projects 🛠️</h1>
			<a id='projects-section'/>
        {/* <img className='project-thumbnails' src='./images/frame-teablog.png' alt=''/> */}
			<div className='divider'></div>
			<h1>reach out 💬</h1>
		</div>
	)
}

export default App;
