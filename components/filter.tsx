import {Button, Card, Col, Divider, Row, Select, Space} from "antd";
const { Option, OptGroup } = Select;
import {MinusCircleOutlined, PlusOutlined, UpOutlined, DownOutlined} from "@ant-design/icons";
import React, { useState } from "react";
import Page from "../layouts/Page";

const FilterComponent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Card
      bordered={false}
      title="Filters"
      size="small"
      extra={<a onClick={() => {
        setVisible(!visible);
      }}>{visible ? <UpOutlined /> : <DownOutlined />}</a>} // DownOutlined
      style={{ marginBottom: 24 }}
      // bodyStyle={{ padding: '0 32px 40px 32px' }}
    >
      <div style={{display: visible ? 'block' : 'none'}}>
      <Row style={{marginTop: 12}} justify={'start'}>
        <Col span={3}>
          <Select defaultValue={'geo'} style={{width: '90%'}}>
            <Option value={'geo'}>Geo</Option>
          </Select>
        </Col>
        <Col span={2}>
          <Select defaultValue={'in'}>
            <Option value={'in'}>IN</Option>
          </Select>
        </Col>
        <Col span={18}>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['Ukraine', 'Spain', 'London']}
          >
          </Select>

        </Col>
        <Col span={1}>
          <MinusCircleOutlined style={{marginTop: 9, marginLeft: 9}} />
        </Col>
      </Row>

      <Row>
        <Button type="dashed" block icon={<PlusOutlined />} style={{marginTop: 12}}>Add field</Button>
      </Row>
      <Divider plain>
        <Space>
          <Button>Clear</Button>
          <Button type={'primary'}>Search</Button>
        </Space>
      </Divider>
      </div>
    </Card>
  )
}

export default FilterComponent;