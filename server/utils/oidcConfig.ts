import * as client from 'openid-client'

const { server, clientId, clientSecret } = useRuntimeConfig().oidc

// discover the server metadata
const config = client.discovery(
  new URL(server),
  clientId,
  clientSecret,
)

export const useOIDCConfig = async () => {
  return config
}
