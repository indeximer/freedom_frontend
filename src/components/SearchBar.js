import React from 'react';
import {Section, Container, Card, Input} from 'react-materialize';
import PropTypes from 'prop-types';

SearchBar.PropTypes = {
    query: PropTypes.string.isRequired,
    onUpdateQuery: PropTypes.func.isRequired
}

function SearchBar(props){
    return(
        <Section>
            <Container>
                <Card className="search-wrapper mb-0">
                    <Input
                      value={props.query}
                      onChange={(event) => props.onUpdateQuery(event.target.value)}
                      placeholder='Procurar...'
                    />
                    <i className="material-icons">search</i>
                </Card>
            </Container>
        </Section>
    );
}

export default SearchBar;