import React, { Component } from 'react'
import { connect } from "react-redux"
import escapeRegEx from 'escape-string-regexp'
import sortBy from 'sort-by'
import {getTechniquesAsync} from '../../redux/actions/techniquesActions'

//component
import Main from '../layout/Main'
import SearchBar from '../common/SearchBar'
import ColumnList from '../common/ColumnList'
import ColumnListItem from '../common/ColumnListItem'


class Index extends Component {

  state = {
    query:''
  }

  componentDidMount(){
    this.props.dispatch(getTechniquesAsync());
  }

  updateQuery = (newQuery) => {
      this.setState({query : newQuery })
  }

  clearQuery = () => {
      this.setState({query : '' })
  }

  render() {
    const {techniques} = this.props
    const {query}  = this.state

    let showingTechniques = techniques

    if(query){
      const match = new RegExp(escapeRegEx(query),'i')
      showingTechniques = techniques.filter((technique) => match.test(technique.name))
      if(showingTechniques.length === 0){
        showingTechniques = techniques.filter((technique) => match.test(technique.difficulty))
      }
    }

    showingTechniques.sort(sortBy('name'));

    return (
      <Main active="techniques" pageTitle="Lista de Téquinicas">
        <SearchBar 
          query={query}
          onUpdateQuery={this.updateQuery}
        />

        <ColumnList>
          {showingTechniques.map((technique) =>
            <ColumnListItem
              key={technique.id}
              item={technique}
              title={technique.name}
              subTitle={technique.category}
              value={technique.difficulty}
            />
          )}
        </ColumnList>
      </Main>
    )
  }
}
  
const mapStateToProps = (store) => {
  return { techniques: store.techniquesReducer.techniques }
}

export default connect(mapStateToProps)(Index);