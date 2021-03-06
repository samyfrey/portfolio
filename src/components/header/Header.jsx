import samyphoto from '../../images/samy3.png'
import './header.scss'
import { Github } from 'react-bootstrap-icons';

export const Header = () => {
  return (
    <>
			<div className='header'>
			<h1>hi i'm samy 👋</h1>
			<p>MERN web dev. software engineering graduate @General Assembly </p>
			<div className='header-block'>
				<img className='profilephoto' src={samyphoto} alt='' />
				<div className='header-links'>
					<h2 className='linkedin'>
						<span>🤝🏼 </span>
						<span>
							<a
								href='https://www.linkedin.com/in/samyfrey'
								target='_blank'
								rel='noopener noreferrer'>
								connect on Linkedin
							</a>
						</span>
					</h2>
					{/* <h2 className='resume'>
						<span>📄 </span>
						<span>
							<a
								href='https://drive.google.com/file/d/1VfPHE26vZ_7RuTSL0moU_BS8vphFPKD-/view?usp=sharing'
								target='_blank'
								rel='noopener noreferrer'>
								see my resume
							</a>
						</span>
					</h2> */}
					<h2 className='recent-projects'>
						<span>🔦 </span>
						<span>
							<a href='#projects-section'>recent projects</a>
						</span>
					</h2>

					<h2 className='github'>
						<span><Github /> </span>
						<span>
							<a
								href='https://github.com/samyfrey'
								target='_blank'
								rel='noopener noreferrer'>
								github
							</a>
						</span>
					</h2>
					<h2 className='reach-out'>
						<span>💬 </span>
						<span>
							<a
								href='#reach-out-section'
								>
								reach out
							</a>
						</span>
					</h2>
				</div>
			</div>
	</div>
    </>
  )
}
