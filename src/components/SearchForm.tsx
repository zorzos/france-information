import React from 'react'
import { Form, Input, Button, Select } from 'antd'
import { RegionType } from '../type'
const { Option } = Select

function SearchForm(props: {
    regions: RegionType[],
    search:(regionCode: string, departmentCode: string) => void,
    clearResults:() => void
}) {
    const [regionCode, setRegionCode] = React.useState("")
    const [departmentCode, setDepartmentCode] = React.useState("")
    const [regionInactive, setRegionInactive] = React.useState(false)
    const [searchInactive, setSearchInactive] = React.useState(true)
    const [clearInactive, setClearInactive] = React.useState(true)

    const [form] = Form.useForm()

    const buildSelectOptions = () => {
        return props.regions.map(region => {
            return <Option key={region.code} value={region.code}>{region.nom}</Option>
        })
    }

    const onClear = () => {
        setRegionInactive(false)
        setClearInactive(true)
        setSearchInactive(true)
        setDepartmentCode("")
        setRegionCode("")
        form.resetFields([ 'departmentCode' ])
        form.setFieldsValue({
            regionCode: undefined
        })
        props.clearResults()
    }

    const onSearchClicked = () => {
        setClearInactive(false)
        props.search(regionCode, departmentCode)
    }

    React.useEffect(() => {
        if (regionCode === "" && departmentCode === "") {
            setSearchInactive(true)
        } else if (regionCode !== "" || departmentCode !== "") {
            if (departmentCode !== "") {
                setRegionInactive(true)
            } else {
                setRegionInactive(false)
            }
            setSearchInactive(false)
        }
    }, [regionCode, departmentCode])

    return (
        <Form form={form} name="basic" initialValues={{ departmentCode: "" }}>
            <Form.Item label="Region" name="regionCode">
                <Select
                    placeholder="Please select a Region"
                    disabled={regionInactive}
                    onChange={selection => setRegionCode(selection)}
                    value={regionCode}
                >
                    {buildSelectOptions()}
                </Select>
            </Form.Item>

            <Form.Item label="Department Code" name="departmentCode">
                <Input
                    onChange={event => setDepartmentCode(event.target.value)}
                    value={departmentCode}
                />
            </Form.Item>

            <Form.Item>
                <Button
                    className="search-button"
                    type="primary"
                    htmlType="submit"
                    disabled={searchInactive}
                    onClick={() => onSearchClicked()}
                >
                    Search
                </Button>
                <Button
                    className="clear-button"
                    type="default"
                    disabled={clearInactive}
                    onClick={() => onClear()}
                >
                    Clear results
                </Button>
            </Form.Item>
        </Form>
    )
}

export default SearchForm