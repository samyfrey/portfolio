
import './App.css';

function App() {
  return (
		<div className='App'>
			<h1>hi i'm samy 👋</h1>
			<p>react. mongoDB. express. node.JS </p>
			<div className='header-block'>
				<img className='profilephoto' src='./images/samy3.png' alt='' />
				<div className='header-links'>
					<h2 className='linkedin'>
						<span>🤝🏼</span>
						<span>
							<a
								href='https://www.linkedin.com/in/samyfrey/'
								target='_blank'
								rel='noopener noreferrer'>
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
					<h2 className='github'>
						<span>➡️ </span>
						<span>
							<a
								href='https://github.com/samyfrey'
								target='_blank'
								rel='noopener noreferrer'>
								github
							</a>
						</span>
					</h2>
				</div>
			</div>
			<h1>bio 📘</h1>
			<p>French-American software developer based in New York City 🗽</p>
			<p>
				Strong of 10 years of experience in investment & corporate banking, I
				have grown a passion for solving problems and getting complex projects
				across the finish line which I love applying to software engineering.
			</p>
			<p>
				🌎 Fun fact: I have lived in 5 cities in 4 different continents and
				speak 3 languages 😄
			</p>
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
			<a id='projects-section' />
			<img
				className='project-thumbnails'
				src='./images/frame-teablog.png'
				alt=''
			/>
			<div className='divider'></div>
			<h1>reach out 💬</h1>
		</div>
	)
}

export default App;
