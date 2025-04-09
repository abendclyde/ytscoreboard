import type { EventHandlerRequest, H3Event } from 'h3'

const { sessionPassword } = useRuntimeConfig()

interface LoginVerifier {
  codeVerifier?: string
  state?: string
}

export const useLoginSession = (
  event: H3Event<EventHandlerRequest>,
) => {
  return useSession<LoginVerifier>(event, {
    name: 'login',
    password: sessionPassword,
    maxAge: 60 * 30, // 30 minutes
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  })
}
