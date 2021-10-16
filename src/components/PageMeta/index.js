import metaCover from '../../assets/portfolio-cover.png'

const PageMeta = {
	render: () => `
    <meta charset='UTF-8' />
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossorigin></link>
    <meta property='og:title' content='Frontend Engineer | Portfolio' />
    <meta
      property='og:description'
      content='My name is Rahul Raj. I am self taught frontend engineer. Love working on JavaScript, Css and Reactjs'
    />
    <meta property='og:image' content="${metaCover}" />
    <meta property='og:url' content='https://irahulportfolio.netlify.app/' />
    <link
      href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap'
      rel='stylesheet'
    />
    `,
}

export default PageMeta
