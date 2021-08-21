import { Card } from 'antd'
import Department from './Department'
import {
    DepartmentType
} from '../type'

function DepartmentList(props: {
    departments: DepartmentType[]
}) {
    return (
        <Card>
            {props.departments.map(department => {
                return (
                    <Department 
                        code={department.code}
                        key={department.code}
                        name={department.nom}
                        regionCode={department.codeRegion}
                    />
                )
            })}
        </Card>
    )
}

export default DepartmentList