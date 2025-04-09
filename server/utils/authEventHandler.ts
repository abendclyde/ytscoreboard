import type { EventHandler, EventHandlerRequest } from 'h3'

export const defineAuthEventHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    console.log('auth')
    try {
      return await handler(event)
    }
    catch (err) {
      // Error handling
      return err
    }
  })
