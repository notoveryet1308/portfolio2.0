import zinggSS from '../../assets/project-ss/zingg-mob.png'
import twitter from '../../assets/project-ss/twitterui.png'
import tastyroma from '../../assets/project-ss/tastyroma.png'

const projectData = [
	{
		name: 'Zingg',
		imgUrl: zinggSS,
		description:
			'E-commerce single page web app made using vanilla Javascript.',
		techStack: [
			'JavaScript',
			'HTML5',
			'SASS',
			'Node.js',
			'MongoDB',
			'Api',
			'Auth-JWT',
			'Webpack',
		],
		liveUrl: 'https://infinite-peak-84010.herokuapp.com/',
		codeUrl: 'https://github.com/notoveryet1308/ecom',
	},
	{
		name: 'Twitter UI - Clone',
		imgUrl: twitter,
		description:
			'Twiiter UI, single page web app made using vanilla Javascript.',
		techStack: ['JavaScript', 'HTML5', 'SASS', 'Webpack'],
		liveUrl: 'cloneui-twitter.netlify.app',
		codeUrl: 'https://github.com/notoveryet1308/twitter-ui',
	},
	{
		name: 'Tastyroma',
		imgUrl: tastyroma,
		description: 'Tastyroma is food ordering app made using React.js.',
		techStack: ['React.js', 'SASS', 'Redux'],
		liveUrl: 'https://tastyroma.netlify.app/',
		codeUrl: 'https://github.com/notoveryet1308/tastyroma-new-design',
	},
]

export default projectData
