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
                    />
                )
            })}
        </Card>
    )
}

export default DepartmentList