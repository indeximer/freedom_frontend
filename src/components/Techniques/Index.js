import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegEx from 'escape-string-regexp';
import sortBy from 'sort-by';
import PageHeader from '../PageHeader';
import SearchBar from '../SearchBar';
import ColumnList from '../ColumnList';
import ColumnListItem from '../ColumnListItem';


class Index extends Component {
    static propTypes = {
      techniques : PropTypes.array.isRequired
    }

    state = {
      query:''
    }

    updateQuery = (newQuery) => {
        this.setState({query : newQuery });
    }

    clearQuery = () => {
        this.setState({query : '' });
    }

    render() {
      const {techniques} = this.props;
      const {query}  = this.state;

      let showingTechniques = techniques;

      if(query){
        const match = new RegExp(escapeRegEx(query),'i');
        showingTechniques = techniques.filter((technique) => match.test(technique.name));
        if(showingTechniques.length === 0){
          showingTechniques = techniques.filter((technique) => match.test(technique.difficulty));
        }
      }

      showingTechniques.sort(sortBy('name'));

      return (
        <main>
          <PageHeader title="Técnicas"/>

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

        </main>
      );
    }
  }
  
  export default Index;