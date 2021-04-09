import {Button, Card, Col, Divider, Row, Select, Space, Form, Input} from "antd";
const { Option } = Select;
import {MinusCircleOutlined, PlusOutlined, UpOutlined, DownOutlined} from "@ant-design/icons";
import React, { useEffect, useState} from "react";
import { FormInstance } from 'antd/lib/form';
import { operatorsAsArray } from "@barhamon/filters";

const FilterComponent: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [values, setValues] = useState<string[][]>([]);
  const formRef = React.createRef<FormInstance>();
  const filterFields = [
    {key: 'geo', name: 'Geo'},
    {key: 'browser', name: 'Browser', value: ['Chrome', 'Firefox', 'Safari']},
    {key: 'user_id', name: 'UserId', type: 'number'}
  ]

  const handleValueOptions = (index: number, key: string) => {
    let update = [...values]
    const field = filterFields.filter(e => e.key === key)[0]
    if (field.value) {
      update[index] = field.value
    } else {
      update[index] = []
    }
    setValues(update)
  }

  useEffect(() => { }, [])

  return (
    <Card
      bordered={false}
      title="Filters"
      size="small"
      extra={<a onClick={() => {
        setVisible(!visible);
      }}>{visible ? <UpOutlined /> : <DownOutlined />}</a>} // DownOutlined
      style={{ marginBottom: 24 }}
    >
      <div style={{display: visible ? 'block' : 'none'}}>

        <Form name="filter_form_item" ref={formRef}>
          <Form.List
            name="filters"
          >
            {(fields, { add, remove }, { errors }) => (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    required={false}
                    key={field.key}
                    style={{marginBottom: 0}}
                  >
                      <Row style={{marginTop: 12}} justify={'start'}>
                        <Col span={3}>
                          <Form.Item {...field}
                                     name={[field.name, 'field']}
                                     fieldKey={[field.fieldKey, 'field']}
                                     initialValue={'geo'}
                                     style={{marginBottom: 0}}
                                     rules={[{ required: true }]}>
                            <Select style={{width: '90%'}} onChange={(key) => {
                              handleValueOptions(index, key.toString())
                            }}>
                              {filterFields.map(e =>
                                <Option key={e.key} value={e.key}>{e.name}</Option>
                              )}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={2}>
                          <Form.Item {...field}
                                      name={[field.name, 'operator']}
                                      fieldKey={[field.fieldKey, 'operator']}
                                      initialValue={operatorsAsArray()[0].value}
                                      style={{marginBottom: 0}}
                                      rules={[{ required: true }]}>
                            <Select>
                              {operatorsAsArray().map(({value, content}) =>
                                <Option key={value} value={value}>{content}</Option>
                              )}
                            </Select>
                          </Form.Item>
                        </Col>
                        <Col span={18}>
                          <Form.Item {...field}
                                      name={[field.name, 'value']}
                                      fieldKey={[field.fieldKey, 'value']}
                                      style={{marginBottom: 0}}
                                      rules={[{ required: true }]}>
                            <Select
                              showSearch
                              style={{ width: '80%', marginLeft: 12 }}
                            >
                              {values[index] && values[index].map((e: string | number) =>
                                <Option key={e} value={e}>{e}</Option>
                              )}
                            </Select>
                          </Form.Item>

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