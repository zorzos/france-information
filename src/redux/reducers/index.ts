import { combineReducers } from "redux"

const regionList = (state = [], action: any) => {
    const payload = action?.payload
    switch (action?.type) {
        case "REGION_LIST":
            return payload
        default:
            return state
    }
}

const departmentList = (state = [], action: any) => {
    const payload = action?.payload
    switch (action?.type) {
        case "DEPARTMENT_LIST":
            return payload
        default:
            return state
    }
}

const regionInfo = (state = {}, action: any) => {
    const payload = action?.payload
    switch (action?.type) {
        case "REGION_INFO":
            return payload
        default:
            return state
    }
}

const departmentInfo = (state = {}, action: any) => {
    const payload = action?.payload
    switch (action?.type) {
        case "DEPARTMENT_INFO":
            return payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    regionList,
    regionInfo,
    departmentList,
    departmentInfo
})

export default rootReducer
