import React from 'react';
import { Row, Col, Divider, notification, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import * as api from './api/api'
import SearchForm from './components/SearchForm'
import { useSelector, useDispatch, DefaultRootState } from 'react-redux'
import * as actions from "./redux/actions"
import { RegionType, DepartmentType, NotificationDetails } from './type'
import DepartmentList from './components/DepartmentList';

interface DefaultState extends DefaultRootState {
  regionList: RegionType[],
  departmentList: DepartmentType[],
  currentRegion: RegionType
}

function App() {
  const dispatch = useDispatch()
  const regionList = useSelector((state: DefaultState) => state.regionList)
  const departmentList = useSelector((state: DefaultState) => state.departmentList)

  const [formLoadIndicator, setFormLoadIndicator] = React.useState(true)
  const [searchLoadIndicator, setSearchLoadIndicator] = React.useState(false)

  React.useEffect(() => {
    api.getRegionList().then(response => {
      dispatch(actions.setRegionList(response.data))
      setFormLoadIndicator(false)
    })
  }, [])

  const onSearch = (regionCode: string, departmentCode: string) => {
    setSearchLoadIndicator(true)
    if (departmentCode) {
      api.getDepartmentInfo(departmentCode)
      .then(departmentInfoResponse => {
        dispatch(actions.setDepartmentList([departmentInfoResponse.data]))
        setSearchLoadIndicator(false)
      }).catch(error => {
        const description = 
          error.response.status === 404 ? 
            'Given code does not match any department, please try another one!' :
            'Something went wrong, please try again in a bit!'
        const details: NotificationDetails = {
          message: 'Error!',
          description
        }
        notification.error(details)
        setSearchLoadIndicator(false)
      })
    } else if (regionCode) {
      api.getDepartmentList(regionCode)
      .then(departmentListResponse => {
        dispatch(actions.setDepartmentList(departmentListResponse.data))
        setSearchLoadIndicator(false)
      }).catch(() => {
        const details: NotificationDetails = {
          message: 'Error!',
          description: 'Something went wrong, please try again!'
        }
        notification.error(details)
        setSearchLoadIndicator(false)
      })
    }
  }

  const clearResults = () => {
    dispatch(actions.setDepartmentList([]))
  }

  return (
    <div className="App">
      <h2>Information about France:</h2>
      <p>You must either select a Region or enter a valid Department code.</p>
      <Row>
        <Col
          span={6}
        >
          {!formLoadIndicator ? 
            <SearchForm
              regions={regionList}
              search={onSearch}
              clearResults={clearResults}
            />
          :
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 56 }} spin />}
              className="spinner"
            />
          }
        </Col>
      </Row>
      {departmentList.length > 0 && 
        <>
          <Divider />
          <Row>
            <Col span={24}>
              <DepartmentList
                departments={departmentList}
              />
            </Col>
          </Row>
        </>
      }
      {searchLoadIndicator &&
        <Spin
          indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
          className="spinner"
        />
      }
    </div>
  );
}

export default App;
