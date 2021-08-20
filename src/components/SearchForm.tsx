import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import { RegionType } from '../type'
const { Option } = Select

function SearchForm(props: {
    regions: RegionType[],
    search:(regionCode: string, departmentCode: string) => void
}) {
    const [regionInactive, setRegionInactive] = React.useState(false)
    const [regionCode, setRegionCode] = React.useState("")
    const [departmentCode, setDepartmentCode] = React.useState("")

    const onDepartmentChange = (departmentCode: string) => {
        if (departmentCode === "") {
            setRegionInactive(false)
        } else {
            setRegionInactive(true)
        }

        setDepartmentCode(departmentCode)
    }

    const onRegionChange = (regionCode: any) => {
        setRegionCode(regionCode)
    }

    const buildSelectOptions = (regions: RegionType[]) => {
        return regions.map(region => {
            return <Option key={region.code} value={region.code}>{region.nom}</Option>
        })
    }

    return (
        <Form
            name="basic"
        >
            <Form.Item
                label="Region"
                name="Region"
            >
                <Select
                    placeholder="Please select a Region"
                    disabled={regionInactive}
                    onChange={value => onRegionChange(value)}
                >
                    {buildSelectOptions(props.regions)}
                </Select>
            </Form.Item>

            <Form.Item
                label="Department Code"
                name="Department Code"
            >
                <Input
                    onChange={event => onDepartmentChange(event.target.value)}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => props.search(regionCode, departmentCode)}
                >
                    Search
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SearchForm