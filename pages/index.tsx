import React, { useEffect } from 'react'
import { votApi, useVotApi } from "../hooks/api"
import Page from '../layouts/Page'
import FilterComponent from '../components/filter'
import LineChartComponent from '../components/line_chart'
import { ChartData } from '../hooks/api/h'
import {Card, Statistic, Row, Col, Divider, Tabs, Space, Select, DatePicker, Table, PageHeader} from 'antd'
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const { Option, OptGroup } = Select;

const IndexPage: React.FC = (props) => {
  const data = useVotApi('errors_chart', () => votApi.getErrorsChart());
  const chartData: ChartData = {
    id: 'Errors', data: (!data.isError ? data.value?.chart : [])
  }

  const tableColumns = [
    {
      title: 'Browser',
      dataIndex: 'browser',
      key: 'browser',
    },
    {
      title: '% errors',
      dataIndex: 'perc_errors',
      key: 'perc_errors',
    },
    {
      title: 'Total errors',
      dataIndex: 'total_errors',
      key: 'total_errors',
    },
    {
      title: '% views',
      dataIndex: 'perc_views',
      key: 'perc_views',
    },
    {
      title: 'Total views',
      dataIndex: 'total_views',
      key: 'total_views',
    }
  ];

  const tableData = [
    {
      browser: 'Chrome',
      perc_errors: 85,
      total_errors: '285,087',
      perc_views: 15,
      total_views: '90,756',
    },
    {
      browser: 'Firefox',
      perc_errors: 3,
      total_errors: '1,200',
      perc_views: 97,
      total_views: '23,894',
    },
    {
      browser: 'Safari',
      perc_errors: 0,
      total_errors: 0,
      perc_views: 100,
      total_views: 998,
    }
  ]

  useEffect(() => { }, [])

  const rowSelection = {
    selectedRowKeys: [],
    // onChange: this.onSelectChange,
  }

  return (<Page>

    <PageHeader
      title="Errors Chart"
      subTitle="bla bla bla description"
      onBack={() => null}
    />

    <FilterComponent />

    <Card
      // className={styles.listCard}
      bordered={false}
      style={{ paddingTop: 24 }}
      bodyStyle={{ padding: '0 32px 40px 32px' }}
      loading={false}
    >

    <Row>
      <Col span={24}>
        <Select defaultValue="l12h" size='large' style={{ width: 200 }}>
          <Option value="l60m">Last 60 minutes</Option>
          <Option value="l6h">Last 6 hours</Option>
          <Option value="l12h">Last 12 hours</Option>
          <Option value="l24">Last 24 hours</Option>
          <Option value="l3e">Last 3 days</Option>
          <OptGroup label="Custom">
            <Option value="datepicker">
                <Space direction="vertical" size={12}>
                  <RangePicker />
                </Space>
            </Option>
          </OptGroup>
        </Select>

        <Statistic style={{ float: 'right' }} title="Total video views" value={1201025} />
        <Statistic style={{ float: 'right', marginRight: 21 }} title="Playback Errors Score" value={93} suffix="/ 100" />
      </Col>
    </Row>

    <Divider />

    <Row style={{height: 500}}>
      <LineChartComponent chartData={[chartData]} />
    </Row>

    <Divider />

    <Tabs tabPosition="left" activeKey={'browser'}>
      <TabPane tab="Device Type" key="device_type">

      </TabPane>
      <TabPane tab="Browser" key="browser">
        <Table
          rowSelection={rowSelection}
          columns={tableColumns}
          dataSource={tableData}
          pagination={false}
        />
      </TabPane>
      <TabPane tab="Operation System" key="os"></TabPane>
      <TabPane tab="Source Host" key="source_host"></TabPane>
      <TabPane tab="Video Type" key="video_type"></TabPane>
      <TabPane tab="Video Id" key="video_id"></TabPane>
      <TabPane tab="Video Title" key="video_title"></TabPane>
    </Tabs>

    </Card>
  </Page>)

}

export default IndexPage;
