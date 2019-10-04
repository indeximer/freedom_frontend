import escapeRegEx from 'escape-string-regexp'
import { resolveObjectPath } from './helpers'

export const filterCollection = (query, collection, attr = 'name') => {
    let filteredCollection = collection
    let match
    if(query && Array.isArray(query)){
        filteredCollection = query.map(item => {
            match = new RegExp(escapeRegEx(item.term),'i')
            filteredCollection = filteredCollection.filter((row) => match.test(resolveObjectPath(item.attr,row)))
            return filteredCollection
        }).reduce((a, b) => a.filter(c => b.includes(c)))        
    }else if(query && typeof query === 'string'){
        match = new RegExp(escapeRegEx(query),'i')
        filteredCollection = filteredCollection.filter((row) => match.test(resolveObjectPath(attr,row)))
        return filteredCollection
    }
    return filteredCollection
}