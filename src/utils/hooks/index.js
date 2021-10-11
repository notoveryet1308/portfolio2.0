import { useEffect, useState } from 'react'

const useScreenSize = () => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)
	const [screenHeight, setScreenHeight] = useState(window.innerHeight)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setScreenWidth(window.innerWidth)
			setScreenHeight(window.innerHeight)
		})
	})

	return { screenWidth, screenHeight }
}

export { useScreenSize }
