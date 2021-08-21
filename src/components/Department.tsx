import React from 'react'
import { Card } from 'antd'
import * as api from '../api/api'

function Department(props: {
    code: string,
    name: string,
    regionCode: string
}) {
    const [departmentRegion, setDepartmentRegion] = React.useState("")
    
    React.useEffect(() => {
        api.getRegionInfo(props.regionCode).then(regionInfoResponse => {
            setDepartmentRegion(regionInfoResponse.data.nom)
        })
    }, [props.regionCode])

    return (
        <Card.Grid
            className="card-grid"
            hoverable={false}
        >
            <p>Name: {props.name}</p>
            <p>Code: {props.code}</p>
            <p>Region Name: {departmentRegion}</p>
        </Card.Grid>
    )
}

export default Department