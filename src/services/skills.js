import firebase from '../firebase'

const db = firebase.ref('/skills')

export const getSkills = () => db

export const createSkill = payload => db.push(payload)

export const updateSkill = (payload, id) => db.child(id).update(payload)

export const removeSkill = id => db.child(id).remove()

export const removeAllSkills = () => db.remove()
