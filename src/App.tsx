import React from 'react';
import { Row, Col, Divider } from 'antd'
import * as api from './api/api'
import SearchForm from './components/SearchForm'
import { useSelector, useDispatch, DefaultRootState } from 'react-redux'
import * as actions from "./redux/actions"
import {
  RegionType, 
  DepartmentType
} from './type'
import DepartmentList from './components/DepartmentList';

interface DefaultState extends DefaultRootState {
  regionList: RegionType[],
  departmentList: DepartmentType[],
  currentRegion: RegionType
}

function App() {
  const dispatch = useDispatch()
  const [localRegion, setLocalRegion] = React.useState({
    code: ""
  })
  const regionList = useSelector((state: DefaultState) => state.regionList)
  const departmentList = useSelector((state: DefaultState) => state.departmentList)
  const currentRegion = useSelector((state: DefaultState) => state.regionList.filter(region => {return region.code === localRegion?.code}))

  // const [department, setDepartment] = React.useState("")

  React.useEffect(() => {
    api.getRegionList().then(response => {
      dispatch(actions.setRegionList(response.data))
    })
  }, [])

  const onSearch = (regionCode: string, departmentCode: string) => {
    regionCode && api.getDepartmentList(regionCode).then(departmentListResponse => {
      dispatch(actions.setDepartmentList(departmentListResponse.data))
    })
  }

  return (
    <div className="App">
      <Row>
        <Col span={6}>
          <SearchForm
            regions={regionList}
            search={onSearch}
          />
          </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <DepartmentList
            departments={departmentList}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
