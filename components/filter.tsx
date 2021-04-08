import {Button, Card, Col, Divider, Row, Select, Space, Form, Input} from "antd";
const { Option, OptGroup } = Select;
import {MinusCircleOutlined, PlusOutlined, UpOutlined, DownOutlined} from "@ant-design/icons";
import React, { useState } from "react";
import { FormInstance } from 'antd/lib/form';
import {addRule, Filters, toQueryString, Operators, fromArray} from "@barhamon/filters";

const FilterComponent: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const formRef = React.createRef<FormInstance>();

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


        <Form name="filter_form_item" ref={formRef}>
          <Form.List
            name="names"
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={['onChange', 'onBlur']}
                      rules={[ ]}
                      noStyle
                    >

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
                            style={{ width: '80%', marginLeft: 12 }}
                            placeholder="Please select"
                            defaultValue={['Ukraine', 'Spain', 'London']}
                          >
                          </Select>

                        </Col>
                        <Col span={1}>
                          {fields.length > 1 ? (
                            <MinusCircleOutlined
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                              style={{marginTop: 9, marginLeft: 9}}
                            />
                          ) : null}
                        </Col>
                      </Row>
                    </Form.Item>
                  </Form.Item>
                ))}
                <Form.Item>
                  <Row>
                    <Button
                      type="dashed"
                      block
                      icon={<PlusOutlined />}
                      style={{marginTop: 12}}
                      onClick={() => add()}
                    >Add field</Button>
                  </Row>

                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Divider plain>
              <Space>
                <Button onClick={() => { formRef.current!.resetFields() }}>Clear</Button>
                <Button type={'primary'} htmlType="submit">Search</Button>
              </Space>
            </Divider>
          </Form.Item>
        </Form>

      </div>
    </Card>
  )
}

export default FilterComponent;