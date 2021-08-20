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

const setRegionInfo = (region: RegionType) => {
    return {
        type: "REGION_INFO",
        payload: region
    }
}

const setDepartmentList = (departments: DepartmentType[]) => {
    return {
        type: "DEPARTMENT_LIST",
        payload: departments
    }
}

const setDepartmentInfo = (department: DepartmentType) => {
    return {
        type: "REGION_INFO",
        payload: department
    }
}

export {
    setRegionList,
    setRegionInfo,
    setDepartmentList,
    setDepartmentInfo
}