import screenTea from './images/screen-tea.png'
import recordtry from './images/recordtry.gif'

export const projects = [
	{
		id: 1,
		img: `${recordtry}`,
		link: '',
		title: 'Passbook ',
		description: 'transaction management tool that allows bankers to manage their client portfolio.',
		text: 'solution to issues faced as an analyst in investment banking: automate repetitive tasks and provide instant snapshot of business metrics avoiding manual work done through excel. also integrate NewsAPI to speed up news summary. ',
		tech: '⚙️ react, mongoDB, mongoose, express, node, axios, react-router-dom, recharts, react-select ',
		linkGithub: 'https://github.com/samyfrey/teashop-client',
		linkDemo: '',
	},
	{
		id: 2,
		img: `${screenTea}`,
		link: '',
		title: 'Cho Cho Tea',
		text: 'MongoDB is a document-oriented database manager designed for storing high volumes of data. It saves data in binary JSON format and implements the concept of collection and documentation. MongoDB is a cross-platform, NoSQL database equipped with high performance, high scalability, and flexibility that allow for seamless querying and indexing.',
		tech: 'react, mongoDB, express.JS, node.JS, axios ',
		linkGithub: 'https://github.com/samyfrey/teashop-client',
		linkDemo: '',
	},
	{
		id: 3,
		img: '',
		link: 'http://lama.dev',
	},
]
