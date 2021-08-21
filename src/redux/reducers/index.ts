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

const rootReducer = combineReducers({
    regionList,
    departmentList
})

export default rootReducer
