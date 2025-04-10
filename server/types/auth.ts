export interface Claims {
	sub: string
	name?: string
	picture?: string
}

export interface Auth {
	accessToken: string
	refreshToken: string
	idToken: string
	expiresAt: number
	claims: Claims
}

export interface LoginVerifier {
	codeVerifier?: string
	state?: string
}
