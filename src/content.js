import screenTea from './images/screen-tea.png'
import passbook from './images/passbook1.gif'
import getpassbook from './images/getpassbook.gif'
import fronthackathon from './images/frontendhackathon.gif'
import chatterbox from './images/chatterbox.gif'

export const projects = [
	{
		id: 1,
		img: `${passbook}`,
		title: 'Passbook ',
		description:
			'transaction management tool that allows bankers to manage their client portfolio.',
		text: 'solution to issues faced as an analyst in investment banking: automate repetitive tasks and provide instant snapshot of business metrics avoiding manual work done through excel. also integrates NewsAPI to speed up news summaries. ',
		tech: 'react, mongoDB, mongoose, express, node, axios, passport, react-router-dom, recharts, react-select, mui-icons, NewsAPI ',
		linkGithub: 'https://github.com/samyfrey/passbook',
		linkDemo: 'https://samyfrey.github.io/passbook/',
	},
	{
		id: 2,
		img: `${getpassbook}`,
		title: 'Getpassbook ',
		description: 'mockup business website marketing the passbook application.',
		text: 'responsive single page website to practice front end skills, focusing on user interface and styling. i use multiple react based libraries including emailJS for the contact form and react-styled-components for styling.',
		tech: 'react, emailJS, recharts, react-scroll, react-styled-components ',
		linkGithub: 'https://github.com/samyfrey/getpassbook',
		linkDemo: 'https://samyfrey.github.io/getpassbook/',
	},
	{
		id: 3,
		img: `${fronthackathon}`,
		title: 'Frontend Hackathon',
		text: 'responsive website built during a 2-day front end hackathon. given the time constraints, i identified various parts that could be reproduced using reusable styled components. my main objective was to standardize the code as much as possible and use a content file to feed the rendering components. in a short period of time, i learned how to use a new library (react styled components) and organize my code in a scalable and reusable way.',
		tech: 'react, react-styled-component ',
		linkGithub: 'https://github.com/samyfrey/frontendhackathon-ga',
		linkDemo: 'https://samyfrey.github.io/frontendhackathon-ga/',
	},

	{
		id: 4,
		img: `${chatterbox}`,
		title: 'Chatterbox',
		text: 'team project during bootcamp reproducing the live-chat MSN messenger. collaborated with a team of four software developers using scrum methodology, GitHub and pair-programming in a 3-week sprint. focused on front end and user interface. 🔐 login: admin@test.com pwd: admin',
		tech: 'socket.io, react, mongoDB, express.JS, node.JS, axios, passport ',
		linkGithub: 'https://github.com/The-Re-Actors',
		linkDemo: 'https://the-re-actors.github.io/Chatterbox-client/',
	},
]
