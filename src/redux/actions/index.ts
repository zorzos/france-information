import {
    RegionType,
    DepartmentType 
} from '../../type'

const setRegionList = (regions: RegionType[]) => {
    return {
        type: "REGION_LIST",
        payload: regions
    }
}

const setDepartmentList = (departments: DepartmentType[]) => {
    return {
        type: "DEPARTMENT_LIST",
        payload: departments
    }
}

export {
    setRegionList,
    setDepartmentList
}