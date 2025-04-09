import type { EventHandlerRequest, H3Event } from 'h3'

const { sessionPassword } = useRuntimeConfig()

interface Token {
  accessToken: string
  refreshToken: string
  idToken: string
  expiresIn: number
}

export const useAuthSession = (
  event: H3Event<EventHandlerRequest>,
) => {
  return useSession<Token>(event, {
    name: 'auth',
    password: sessionPassword,
    maxAge: 60 * 60 * 24 * 365, // 1 year
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    },
  })
}
