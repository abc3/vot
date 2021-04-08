import React, { useState, useEffect } from "react";
import { Radio, Spin } from "antd";
import { ResponsiveLine } from "@nivo/line";
import { ChartData } from '../hooks/api/h'

const LineChartComponent: React.FC<{ chartData: ChartData[] }> = ({ chartData }) => {
  const [view, setView] = useState('#')
  const [points, setPoints] = useState([{x: '', y: 0}])

  useEffect(() => {
    setPoints(chartData[0].data)
  }, [chartData])

  if (chartData[0].data.length === 0)
    return (<Spin tip="Loading..."/>)

  return (<>
    <Radio.Group defaultValue={view}>
      <Radio.Button value="#" onClick={() => {
        setPoints(chartData[0].data)
      }}>#</Radio.Button>
      <Radio.Button value="%" onClick={() => {
        const max = Math.max.apply(Math, chartData[0].data.map(e => e.y ))
        let newData = chartData[0].data.map(e => {
          return {
            x: e.x,
            y: Math.round(e.y * 100 / max)
          }
        })
        setPoints(newData)
      }}>%</Radio.Button>
    </Radio.Group>

    <ResponsiveLine
      colors={{ scheme: 'category10' }}
      data={ [{id: chartData[0].id, data: points}] }
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      yScale={{ type: 'linear', min: 0, max: 'auto', stacked: true, reverse: false }}
      yFormat=" >-.2f"
      // xScale={{ type: 'point' }}
      xScale={{
        type: "time",
          format: "%Y-%m-%d %H:%M",
          precision: "minute"
      }}
      xFormat="time:%Hh"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
          format: "%H:%M",
          // legend: "time",
          legendOffset: 36,
          legendPosition: "middle"
        // orient: 'bottom',
        // tickSize: 5,
        // tickPadding: 5,
        // tickRotation: 0,
        // legend: 'transportation',
        // legendOffset: 36,
        // legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: 'count',
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
  </>)
}

export default LineChartComponent;