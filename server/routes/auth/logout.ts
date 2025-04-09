import * as client from 'openid-client'

export default defineEventHandler(async (event) => {
	console.log('logout!')
	return sendRedirect(event, 'https://qwant.com')
})
