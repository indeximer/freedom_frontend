import React from 'react'

//components
import Popup from '../../components/common/Popup'
import Button from '../../components/common/Button'
import { TableBuilder } from '../../components/common/table'

const CodesResponseModal = ({ show, responseDetails, handleClick }) => {
    const tableData = {
        thead : ['código', 'detalhes'],
        tbody: responseDetails
    }
    return(
        <Popup show={show}>
            <div className="response-modal codes-modal">
                <TableBuilder tableData={tableData}>
                    {tableData.tbody.map((row, index) => (
                            <tr key={index}>
                                <td>{row.promo_code}</td>
                                <td>{row.status_message}</td>
                            </tr>
                        ))
                    }
                </TableBuilder>
                <Button classList='btn btn-red mb-3' onClick={handleClick}>OK</Button>
            </div>
        </Popup>
    )
}
export default CodesResponseModal