import React, { useState, useEffect } from 'react'
import Page from '../layouts/Page'
import { Card, Statistic, Row, Col, Divider, Tabs, Radio, Space, Select, DatePicker, Table } from 'antd'
const { RangePicker } = DatePicker;
const { TabPane } = Tabs;
const { Option, OptGroup } = Select;
import dynamic from 'next/dynamic'
const Area = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Area) as any,
  { ssr: false }
)

const Index: React.FC = () => {

  var data = [
    {
      time: '12pm',
      value: 95,
    },
    {
      time: '1pm',
      value: 93,
    },
    {
      time: '2pm',
      value: 90,
    },
    {
      time: '3pm',
      value: 85,
    },
    {
      time: '4pm',
      value: 90,
    },
    {
      time: '5pm',
      value: 80,
    },
    {
      time: '6pm',
      value: 55,
    },
    {
      time: '7pm',
      value: 30,
    },
    {
      time: '8pm',
      value: 25,
    },
    {
      time: '9pm',
      value: 72,
    },
    {
      time: '10pm',
      value: 89,
    },
    {
      time: '11pm',
      value: 95,
    },
    {
      time: '12am',
      value: 90,
    }
  ];
  var config = {
    data: data,
    xField: 'time',
    yField: 'value',
    label: {},
    point: {
      size: 2,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    // isPercent: true,
    tooltip: { showMarkers: false },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
    areaStyle: { fillOpacity: 0.7 },
    // appendPadding: 10,
    // yAxis: {
    //   // label: {
    //   //   formatter: function formatter(value: number) {
    //   //     return value * 100;
    //   //   },
    //   // },
    // },
    meta: {
      value: {
        min: 0,
        max: 100,
      },
    },
    state: {
      active: {
        style: {
          shadowColor: 'yellow',
          shadowBlur: 4,
          stroke: 'transparent',
          fill: 'red',
        },
      },
    },
    theme: {
      geometries: {
        point: {
          diamond: {
            active: {
              style: {
                shadowColor: '#FCEBB9',
                shadowBlur: 2,
                stroke: '#F6BD16',
              },
            },
          },
        },
      },
    },
    interactions: [{ type: 'marker-active' }],
    style: {
      width: '100%'
    }
  };

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
          <Option value="l6h">Last 6 hourse</Option>
          <Option value="l12h">Last 12 hourse</Option>
          <Option value="l24">Last 24 hourse</Option>
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
    <Row>
        <Area {...config} />
    </Row>

    <Divider />

      <Tabs tabPosition="left">
        <TabPane tab="Device Type" key="device_type">

        </TabPane>
        <TabPane tab="Browser" key="browser">
          <Table columns={tableColumns} dataSource={tableData} pagination={false} />
        </TabPane>
        <TabPane tab="Operation System" key="os"></TabPane>
        <TabPane tab="Source Host" key="sourse_host"></TabPane>
        <TabPane tab="Video Type" key="video_type"></TabPane>
        <TabPane tab="Video Id" key="video_id"></TabPane>
        <TabPane tab="Video Title" key="video_title"></TabPane>
      </Tabs>

    </Card>
  </Page>)

}

export default Index;

