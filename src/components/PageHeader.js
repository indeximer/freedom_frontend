import React from 'react';
import {Section, Container} from 'react-materialize';
import PropTypes from 'prop-types';

PageHeader.PropTypes = {
    title: PropTypes.string.isRequired
}

function PageHeader(props){
    return(
        <Section className="teal darken-2 white-text z-depth-1">
          <Container>
            <h1>{props.title}</h1>
          </Container>
        </Section>
    );
}

export default PageHeader;