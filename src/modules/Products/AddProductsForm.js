import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Link} from 'react-router-dom'

//components
import SubHeader from '../../components/common/headers/SubHeader'
import Button from '../../components/common/Button'
import Tabs from '../../components/common/Tabs'
import ImageSelector from '../../components/common/ImageSelector'
import {InlineField, RitchTextEditor, UploadImage} from '../../components/common/form'

let AddProductsFrom = (props) => {

    const formFields = {
        tipo:{
            label:'Tipo',
            name:'product_type',
            type:'select',
            placeholder:'',
            options:[
                {value:'',text:'Selecione'},
                {value:'acquirer',text:'Aquirer'},
                {value:'terminal',text:'Terminal'},
                {value:'service',text:'Service'},
                {value:'voucher',text:'Voucher'},
                {value:'composite',text:'Composite'},
                {value:'ecommerce_service',text:'E-commerce Service'},
                {value:'device',text:'Device'}
            ]
        },
        nome:{
            label:'Nome',
            name:'name',
            type:'text',
            placeholder:'',
            options:null
        },
        suporte:{
            label:'Suporte',
            name:'phone_support_getnet_included',
            type:'select',
            placeholder:'',
            options:[
                {value:'',text:'Selecione'},
                {value:'true',text:'Sim'},
                {value:'false',text:'Não'}
            ]
        },
        transactionCurrency:{
            label:'Tipo',
            name:'transactionCurrency',
            type:'select',
            placeholder:'',
            options:[
                {value:'',text:'Selecione'},
                {value:'BRL',text:'Reais'},
                {value:'USD',text:'Dollar'},
            ]
        },
        brand:{
            label:'Brand',
            name:'brand',
            type:'select',
            placeholder:'',
            options:[
                {value:'',text:'Selecione'},
                {value:'visa',text:'Visa'},
                {value:'master',text:'Master'},
            ]
        },
        transactionChannelType:{
            label:'Canal',
            name:'transactionChannelType',
            type:'select',
            placeholder:'',
            options:[
                {value:'',text:'Selecione'},
                {value:'true',text:'Sim'},
                {value:'false',text:'Não'}
            ]
        },
        wifi:{
            label:'Conexão Wifi',
            name:'wifi',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        conexao3g:{
            label:'Conexão 3G',
            name:'conexao3g',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        conexao2g:{
            label:'Conexão 2G',
            name:'conexao2g',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        gprs:{
            label:'Conexão GPRS',
            name:'gprs',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        smartPos:{
            label:'Smart POS',
            name:'smartPos',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        posSemFio:{
            label:'Utiliza POS sem fio',
            name:'popSemFio',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        comprovante:{
            label:'Imprime comprovante',
            name:'comprovante',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        automacao:{
            label:'Trabalha com automação comercial',
            name:'comprovante',
            type:'checkbox',
            placeholder:'',
            options:null
        },
        canal:{
            label:'Canal credenciador',
            name:'canal-credenciador',
            type:'select',
            placeholder:'',
            options:[
                {value:'tipo_1',text:'Tipo 1'},
                {value:'tipo_2',text:'Tipo 2'},
                {value:'tipo_3',text:'Tipo 3'}
            ]
        },
        pessoa:{
            label:'Pessoa',
            name:'pessoa',
            type:'select',
            placeholder:'',
            options:[
                {value:'tipo_1',text:'Tipo 1'},
                {value:'tipo_2',text:'Tipo 2'},
                {value:'tipo_3',text:'Tipo 3'}
            ]
        },
        ramo:{
            label:'Ramo',
            name:'ramo',
            type:'select',
            placeholder:'',
            options:[
                {value:'tipo_1',text:'Tipo 1'},
                {value:'tipo_2',text:'Tipo 2'},
                {value:'tipo_3',text:'Tipo 3'}
            ]
        },
        plano:{
            label:'Plano',
            name:'plano',
            type:'select',
            placeholder:'',
            options:[
                {value:'tipo_1',text:'Tipo 1'},
                {value:'tipo_2',text:'Tipo 2'},
                {value:'tipo_3',text:'Tipo 3'}
            ]
        },
        faturamento:{
            label:'Faturamento',
            name:'faturamento',
            type:'select',
            placeholder:'',
            options:[
                {value:'tipo_1',text:'Tipo 1'},
                {value:'tipo_2',text:'Tipo 2'},
                {value:'tipo_3',text:'Tipo 3'}
            ]
        },
        valor:{
            label:'Valor',
            name:'valor',
            type:'text',
            placeholder:'',
            options:null
        },
    }

    return(
        <form className="form-inline row" onSubmit={props.handleSubmit}>
            <div className="col">
                <InlineField {...formFields.tipo} />
            </div>
            <div className="col">
                <InlineField {...formFields.nome} />
            </div>
            <div className="col">
                <InlineField {...formFields.suporte} />
            </div>

            <div className="col">
                <InlineField {...formFields.brand} />
            </div>
            <div className="col">
                <InlineField {...formFields.transactionChannelType} />
            </div>
            <div className="col">
                <InlineField {...formFields.transactionCurrency} />
            </div>

            <div className="col-12">
                <Field label="Insira informações sobre o produto" component={RitchTextEditor} name="description"/>
            </div>

            <div className="col-12">
                <SubHeader title="Inserir Imagem" />
            </div>

            <div className="col-12">
                <Tabs tabTitles={['Do arquivo', 'Do servidor']}>
                    <UploadImage />
                    <ImageSelector />
                </Tabs>
                <Field component="input" type="text" name="icon_url" value="https://credenciamentodigital.getnet.com.br/assets/img/machines/solucao-movel-3g.png"/>
            </div>

            {/* <div className="col-12">
                <SubHeader title="Funcionalidades" />
            </div> */}

            {/* <div className="col-12">
                <div className="row justify-content-between">
                    <div className="col-auto">
                        <InlineField {...formFields.wifi} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.conexao3g} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.conexao2g} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.gprs} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.smartPos} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.posSemFio} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.comprovante} />
                    </div>
                    <div className="col-auto">
                        <InlineField {...formFields.automacao} />
                    </div>
                </div>
            </div> */}

            {/* <div className="col-12 col-md-4">
                <InlineField {...formFields.canal} />
            </div>
            <div className="col-12 col-md-4">
                <InlineField {...formFields.pessoa} />
            </div>
            <div className="col-12 col-md-4">
                <InlineField {...formFields.ramo} />
            </div>
            <div className="col-12 col-md-4">
                <InlineField {...formFields.plano} />
            </div>
            <div className="col-12 col-md-4">
                <InlineField {...formFields.faturamento} />
            </div>
            <div className="col-12 col-md-4">
                <InlineField {...formFields.valor} />
            </div> */}

            <div className="col-12 text-right mt-4">
                <Link to="/products" className="btn btn-grey inverse mr-5">CANCELAR <i className="fa fa-times-circle"></i></Link>
                <Button classList="btn-purple inverse" icon="fa fa-check-circle">INCLUIR</Button>
            </div>
        </form>
    )

}

AddProductsFrom = reduxForm({
    form: 'addProductForm'
})(AddProductsFrom)

export default AddProductsFrom