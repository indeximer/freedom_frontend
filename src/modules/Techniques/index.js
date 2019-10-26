import React, { Component } from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import sortBy from 'sort-by'

//search
import { filterCollection } from '../../utils/search'

//actions
import { getTechniquesAsync, deleteTechniquesAsync } from '../../redux/actions/techniquesActions'
import { handleModal } from '../../redux/actions/modalActions'

// components
import Main from '../../components/layout/Main'
import SearchBar from '../../components/common/SearchContainer/SearchBar'
import ResponseModal from '../../components/common/Popup/ResponseModal'
import ConfirmationModal from '../../components/common/Popup/ConfirmationModal'
import ContentLoader from '../../components/common/loader/ContentLoader'
import ModalLoader from '../../components/common/loader/ModalLoader'
import {
    AvatarCount,
    Button,
    Fab,
    List,
    CollapsibleList,
    SimpleListItem,
    Typography
} from 'rmwc'
import '@rmwc/list/collapsible-list.css'
import '@rmwc/avatar/avatar.css';


class ListTechniques extends Component {

    state = {
        query: '',
        readOnly: false
    }

    updateQuery = (newQuery) => {
        this.setState({query : newQuery })
    }

    componentDidMount(){
        // const userRoles = sessionStorage.getItem('user-roles').split(',')
        // let readOnly = !userRoles.includes('OD_PRD_OFFERING_ADM')
        // if(readOnly){
        //     this.setState({readOnly})
        // }

        this.props.dispatch(getTechniquesAsync())
    }

    render(){
        let { techniques, isFetching, isSaving } = this.props
        const { query } = this.state
        techniques = filterCollection(query, techniques)
    
        return (
            <Main showSidebar={true}>
                <SearchBar handleChange={this.updateQuery} query={query} />
                
                <List twoLine avatarList>
                    {techniques.map(technique =>(
                        
                            <CollapsibleList
                                key={technique.id}
                                handle={
                                    <SimpleListItem                                        
                                        graphic={<AvatarCount size="large" value={technique.difficulty} />}
                                        text={technique.name}
                                        secondaryText={technique.skills.name}
                                        metaIcon="chevron_right"
                                    />
                                }
                            >
                                <div className="btn-wrapper">
                                    <Button label="Excluir" icon="delete_forever" danger unelevated />
                                    <Link to={`/techniques/edit/${technique.id}`}>
                                        <Button label="Editar" icon="edit" unelevated />
                                    </Link>
                                </div>                                
                                <Typography className="list-description" use="subtitle1">
                                    subtitle1 subtitle1 subtitle1 subtitle1 subtitle1
                                </Typography>
                                <SimpleListItem
                                    metaIcon={<AvatarCount size="medium" value={technique.power} />}
                                    text="Poder"
                                />
                                <SimpleListItem
                                    metaIcon={<AvatarCount size="medium" value={technique.form} />}
                                    text="Forma"
                                />
                                <SimpleListItem
                                    metaIcon={<AvatarCount size="medium" value={technique.area} />}
                                    text="Área"
                                />
                                <SimpleListItem
                                    metaIcon={<AvatarCount size="medium" value={technique.duration} />}
                                    text="Duração"
                                />
                                <SimpleListItem
                                    metaIcon={<AvatarCount size="medium" value={technique.execution} />}
                                    text="Execução"
                                />
                                <SimpleListItem
                                    metaIcon={<AvatarCount size="medium" value={technique.restriction} />}
                                    text="Restrição"
                                />
                            </CollapsibleList>
                        ))
                    }
                </List>

                <Link className="floating-btn" to="/techniques/add">
                    <Fab icon="add" />
                </Link>

                {isFetching &&
                    <ContentLoader/>
                }

                <ConfirmationModal />
                <ResponseModal />
                {isSaving &&
                    <ModalLoader/>
                }
            </Main>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        techniques: store.techniquesStore.techniques,
        isFetching: store.loadingStore.isFetching,
        isSaving: store.loadingStore.isSaving
    }
}

export default connect(mapStateToProps)(ListTechniques)