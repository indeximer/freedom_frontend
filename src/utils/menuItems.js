import { removeDuplicates, getEnv } from './helpers'

const menuItems = () => {
    const env = getEnv()
    let path = window.location.hash
    path = path.split('/')[1]

    console.log(path)
    
    if(env === 'local-hti' || env === 'local-hg' || env === 'hti' || env === 'hg'){
        sessionStorage.setItem('user-roles', 'OD_PRD_MAINTENANCE_ADM,OD_PRD_OFFERING_ADM,OD_PRD_PROMOCODE_ADM')
    }

    let userPermissions = sessionStorage.getItem('user-roles')
    userPermissions = userPermissions.split(',')

    let menuItems = [
        {
            icon:'icon icon-whitelist',
            title:'Order',
            color: path === 'orders' ? 'red' : 'purple',
            path:'/orders'
        }
    ]

    userPermissions.map(permission =>{
        switch(permission){
            case "OD_PRD_MAINTENANCE_CONSULTA":
            case "OD_PRD_MAINTENANCE_ADM":
                menuItems.push({
                    icon:'icon icon-area',
                    title:'Controle de Erros',
                    color: path === 'maintenance' ? 'red' : 'purple',
                    path: '/maintenance'
                })
                break
            case "OD_PRD_OFFERING_CONSULTA":
            case "OD_PRD_OFFERING_ADM":
                menuItems.push({
                    icon:'icon icon-oferta',
                    title:'Ofertas',
                    color: path === 'offerings' ? 'red' : 'purple',
                    path:'/offerings'
                })
                break
            case "OD_PRD_PROMOCODE_CONSULTA":
            case "OD_PRD_PROMOCODE_ADM":
                menuItems.push({
                    text:'1234',
                    title:'Código Promocional',
                    color: path === 'codes' ? 'red' : 'purple',
                    path:'/codes'
                })
                break
        }
    })
    menuItems = removeDuplicates(menuItems, 'path')

    return menuItems
} 

export default menuItems