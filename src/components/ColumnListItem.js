import React from 'react';
import {CardPanel, Badge, Button} from 'react-materialize';
import PropTypes from 'prop-types';
import If from './If';

ColumnListItem.PropTypes = {
    item : PropTypes.object.isRequired,
    title : PropTypes.string.isRequired,
    subTitle : PropTypes.string,
    value : PropTypes.number
}

function ColumnListItem(props){
    return(
        <li className="col s12 m6">
            <CardPanel  className="teal">
                <span className="nome">
                    {props.title}<br/>

                    <If test={props.subTitle}>
                        <span className="category">{props.subTitle}</span>
                    </If>
                </span>

                <If test={props.value}>
                    <Badge className="red darken-3 white-text">{props.value}</Badge>
                </If>
                
                <Button fab='horizontal' icon='more_vert' flat small>
                    <Button floating icon='delete' className='red'/>
                    <Button floating icon='edit' className='yellow darken-1'/>
                </Button>
            </CardPanel>
        </li>
    );
}

export default ColumnListItem;