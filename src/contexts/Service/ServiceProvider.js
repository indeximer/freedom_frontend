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
      } catch (e) {
        return e
      }
    },
    post: '',
    put: '',
    delete: ''
  }

  return (
    <ServiceContext.Provider value={{ client }}>
      {children}
    </ServiceContext.Provider>
  )
}
