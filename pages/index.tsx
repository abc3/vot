import React, { useState, useEffect } from 'react'
import Page from '../layouts/Page'
import { Card, Statistic, Row, Col, Divider } from 'antd'
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
      <Col span={12}>
        <Statistic title="Playback Success Score" value={93} suffix="/ 100" />
      </Col>

      <Col span={12}>
          <Statistic style={{ float: 'right' }} title="Total video views" value={1201025} />
      </Col>
    </Row>

      <Divider />
    <Row>
        <Area {...config} />
    </Row>


    </Card>
  </Page>)

}

export default Index;

