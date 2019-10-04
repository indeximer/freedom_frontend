import React, {Component} from 'react'
import { connect } from "react-redux"

//actions
import { getProductsAsync } from '../../redux/actions/productsActions'

//search
import { filterCollection } from '../../utils/search'

//components
import { TableBuilder } from '../../components/common/table'
import { CheckboxField } from '../../components/common/form'
import SearchBar from '../../components/common/SearchContainer/SearchBar'
import ContentLoader from '../../components/common/loader/ContentLoader'
import { SelectField } from '../../components/common/form'

class ProductList extends Component{

    state = {
        query: [
            {
                term:'',
                attr:'name',
            }
        ]
    }

    componentDidMount(){
        this.props.dispatch(getProductsAsync());
    }

    updateQuery = (term, attr, products) => {
        let newState = {
            ...this.state,
            query: [...this.state.query]
        }

        newState.query = newState.query.filter((item) => item.attr !== attr && term !== '')
        newState.query.push({term,attr})

        this.setState(newState)
    }

    handleChange = (event, input, row, cbFunc) => {
        const newValue = [...input.value]
        if(event.target.checked) {
            newValue.push(row)
        } else {
            newValue.splice(newValue.indexOf(row), 1)
        }
        cbFunc()
        return input.onChange(newValue)
    }

    isChecked = (value, rowId) => {
        const match = value.filter(item => item.product.id === rowId)
        let checked = match.length > 0? true : false
        return checked
    }

    filterActiveProducts = (products) => {
        const activeProducts = products.filter(product => (
            product.situation.status === 'active' && product.product_type !== 'voucher' && product.product_type !== 'acquirer'
        ))
        return activeProducts
    }

    translatePricingType = (pricingType) => {
        switch(pricingType){
            case 'fixed_price': return 'Venda'
            case 'monthly_rent': return 'Aluguel'
            default: return 'N/A'
        }
    }

    createTypesOptions = (products) => {
        const typesOptions = products.reduce((prev,next) =>{
            return prev.concat(next.product_type)
        },[]).filter((item,index,array) => {
            return array.indexOf(item) === index
        }).map(item =>{
            return {
                value:item,
                text:item
            }
        })

        return typesOptions
    }

    render(){
        const {handleChangeProduct, currentProduct, handleModal, input, products, isFetching} = this.props

        const tableDataObj = {
            thead : ['Selecionar', 'Imagem', 'Produto', 'Tipo', 'Tipo de transação', 'Precificação', 'Descrição'],
            tbody: this.filterActiveProducts(products)
        }

        let productTypesOptions = [{value:'',text:'Tipo de Produto'}] 
        productTypesOptions = productTypesOptions.concat(this.createTypesOptions(tableDataObj.tbody))

        const searchFilters = {
            productTypes: productTypesOptions,
            pricingType: [
                {value:'',text:'Venda e aluguel'},
                {value:'fixed_price',text:'Venda'},
                {value:'monthly_rent',text:'Aluguel'}
            ]
        }

        const query = this.state.query
        const showingData = Object.assign({}, tableDataObj)
        showingData.tbody = filterCollection(query, showingData.tbody)

        return(
            <div className="select-products-list">
                <div className="row mx-0 align-items-center">
                    <SearchBar handleChange={this.updateQuery} />
                    <div className="col-auto">
                        <i className="icon icon-exclude color-red btn-close-modal" onClick={handleModal}></i>
                    </div>
                </div>
                <div className="row mx-0 align-items-center mb-4">
                    <div className="col-3">
                        <SelectField 
                            name='filter-product'
                            options={searchFilters.productTypes}
                            callBack={(event) => this.updateQuery(event.target.value, 'product_type')}
                        />
                    </div>
                    <div className="col-3">
                        <SelectField
                            name='filter-pricing'
                            options={searchFilters.pricingType}
                            callBack={(event) => this.updateQuery(event.target.value, 'pricing_model.pricing_type')}
                        />
                    </div>
                </div>
                {}
                <TableBuilder tableData={tableDataObj}>
                    {showingData.tbody.map((row,index) => (
                        <tr key={index}>
                            <td className="checkbox-fix">
                                <CheckboxField
                                    id={row.id}
                                    name={row.id}
                                    value={row}
                                    checked={this.isChecked(input.value, row.id)}
                                    handleChange={(event) => handleChangeProduct(row, currentProduct, input, event)}
                                />
                            </td>
                            <td><img src={row.image} alt="" /></td>
                            <td>{row.name}</td>
                            <td>{row[`${row.product_type}_type`]}</td>
                            <td>{row.transaction_channel_type || 'N/A'}</td>
                            <td>{row.pricing_model && this.translatePricingType(row.pricing_model.pricing_type)}</td>
                            <td dangerouslySetInnerHTML={{__html: row.description}}></td>
                        </tr>
                    ))}
                </TableBuilder>
                {isFetching &&
                    <ContentLoader />
                }  
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return { 
        products: store.productsStore.products,
        isFetching: store.loadingStore.isFetching
    }
}

export default connect(mapStateToProps)(ProductList)