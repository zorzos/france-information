import React from 'react'
import { Card } from 'antd'
import * as api from '../api/api'

function Department(props: {
    code: string
}) {
    const [departmentName, setDepartmentName] = React.useState("")

    React.useEffect(() => {
        api.getDepartmentInfo(props.code).then(response => {
            setDepartmentName(response.data.nom)
        })
    }, [])

    return (
        <Card.Grid
            className="card-grid"
            hoverable={false}
        >
            <p>Name: {departmentName}</p>
            <p>Code: {props.code}</p>
        </Card.Grid>
    )
}

export default Department