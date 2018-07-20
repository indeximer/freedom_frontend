import React from 'react';
import {Section, Container} from 'react-materialize';

function ColumnList(props){
    return(
        <Section>
            <Container>
              <ul className="list-items row mt-0 white-text">
                {props.children}
              </ul>
            </Container>
        </Section>
    );
}

export default ColumnList;