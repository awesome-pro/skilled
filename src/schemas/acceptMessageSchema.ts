import * as z from "zod"

export const isAcceptingMessageSchema = z.object({
    isAcceptingMessages: z.boolean()
})