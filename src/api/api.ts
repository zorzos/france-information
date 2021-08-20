import axios from 'axios'

const baseURL = 'https://geo.api.gouv.fr/'

export const getRegionList = () => axios.get(`${baseURL}regions`)

export const getDepartmentList = (regionCode: string) => axios.get(`${baseURL}regions/${regionCode}/departements`)

export const getDepartmentInfo = (departmentCode: string) => axios.get(`${baseURL}departements/${departmentCode}`)

export const getRegionInfo = (regionCode: string) => axios.get(`${baseURL}regions/${regionCode}`)