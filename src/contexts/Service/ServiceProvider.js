import React from 'react'
import { ServiceContext } from './ServiceContext'
import firebase from '@/config/firebase'
import 'firebase/firestore'
import { mapDocs, parseDoc, checkUrlPath, handleParams } from './utils'

export function ServiceProvider({ children }) {
  const db = firebase.firestore()

  const client = {
    get: async (url, options = false) => {
      try {
        if (checkUrlPath(url)) {
          const [baseUrl, id] = checkUrlPath(url)
          const response = await db.collection(baseUrl).doc(id).get()
          return parseDoc(response)
        }
        const query = handleParams(db.collection(url), options)
        const response = await query.get()
        return mapDocs(response.docs)
      } catch (error) {
        return error
      }
    },
    post: async (url, payload) => {
      try {
        const response = await db.collection(url).doc().set(payload)
        return response
      } catch (error) {
        return error
      }
    },
    put: async (url, payload) => {
      try {
        const [baseUrl, id] = checkUrlPath(url)
        const response = await db.collection(baseUrl).doc(id).update(payload)
        return response
      } catch (error) {
        return error
      }
    },
    delete: async url => {
      try {
        const [baseUrl, id] = checkUrlPath(url)
        const response = await db.collection(baseUrl).doc(id).delete()
        return response
      } catch (error) {
        return error
      }
    }
  }

  return (
    <ServiceContext.Provider value={{ client }}>
      {children}
    </ServiceContext.Provider>
  )
}
