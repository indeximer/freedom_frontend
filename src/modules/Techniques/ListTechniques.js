import React, { Component } from 'react'
import { connect } from "react-redux"
import escapeRegEx from 'escape-string-regexp'
import sortBy from 'sort-by'
import { getTechniquesAsync } from '../../redux/actions/techniquesActions'

//component
import { Section, Preloader } from 'react-materialize'
import Main from '../../components/layout/Main'
import SearchBar from '../../components/common/SearchBar'
import ColumnList from '../../components/common/ColumnList'
import ColumnListItem from '../../components/common/ColumnListItem'


class Index extends Component {

  state = {
    query:''
  }

  componentDidMount(){
    this.props.dispatch(getTechniquesAsync())
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
              subTitle={technique.skill.name}
              value={technique.difficulty}
            />
          )}
        </ColumnList>

        <Section className='text-center'>
          <Preloader flashing/>
        </Section>

        
      </Main>
    )
  }
}
  
const mapStateToProps = (store) => {
  return { techniques: store.techniquesReducer.techniques }
}

export default connect(mapStateToProps)(Index);