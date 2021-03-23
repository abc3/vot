import React, { useState, useEffect } from 'react'
import { votApi, useVotApi } from "../hooks/api"
import Page from '../layouts/Page'
import { Card, Statistic, Row, Col, Divider, Tabs, Radio, Space, Select, DatePicker, Table } from 'antd'
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const { Option, OptGroup } = Select;
// import dynamic from 'next/dynamic'
// const Area = dynamic(
//   () => import("@ant-design/charts").then((mod) => mod.Area) as any,
//   { ssr: false }
// )

import { ResponsiveLine } from '@nivo/line'

const Index: React.FC = (props) => {

  const data = useVotApi('errors_chart', () => votApi.getErrorsChart());

  let d: any = [
        {
          "id": "germany",
          "color": "hsl(56, 70%, 50%)",
          "data": []
        }
      ]

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

  return (<Page>
    <Card
      // className={styles.listCard}
      bordered={false}
      // title="qweqwe"
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
      <ResponsiveLine
          data={d}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
          }}
          // pointSize={10}
          // pointColor={{ theme: 'background' }}
          // pointBorderWidth={2}
          // pointBorderColor={{ from: 'serieColor' }}
          // pointLabelYOffset={-12}
          enableArea={true}
          useMesh={true}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
      />
        {/*<Area {...config} />*/}
    </Row>

    <Divider />

      <Tabs tabPosition="left" activeKey={'browser'}>
        <TabPane tab="Device Type" key="device_type">

        </TabPane>
        <TabPane tab="Browser" key="browser">
          <Table columns={tableColumns} dataSource={tableData} pagination={false} />
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

export default Index;

