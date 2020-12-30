import { createContext, useContext } from 'react'

export const MessageEmitterContext = createContext()
export const useMessageEmitter = () => useContext(MessageEmitterContext)
