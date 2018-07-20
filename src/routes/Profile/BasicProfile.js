import React, { Component, Fragment } from 'react';

import { connect } from 'dva';
import {
  Card,
  Table,
  Divider,
  Button,
  Modal,
  Form,
  Input,
  Select,
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const { Option } = Select;
const FormItem = Form.Item;

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))

export default class Analysis extends Component {
  state = {
    addVisible: false,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'profile/fetchAdvanced',
    });
  }

  showAdd  = () => {
    this.setState({
      addVisible: true,
    });
  };

  handleAdd = () => {
    this.setState({
      addVisible: false,
    });
  };

  cancelAdd = () => {
    this.setState({
      addVisible: false,
    });
  };

  render() {
    const { loading, data } = this.props;
    const  { addVisible } = this.state;

    const columns = [
      {
        title: '房间类型',
        dataIndex: 'roomType',
      },
      {
        title: '房间总数',
        dataIndex: 'roomSum',
      },
      {
        title: '出租数',
        dataIndex: 'rentNum',
      },
      {
        title: '出租率',
        dataIndex: 'rentRate',
        align: 'right',
      },
      {
        title: '操作',
        render: () => (
          <Fragment>
            <a href="">修改</a>
            <Divider type="vertical" />
            <a href="">删除</a>
          </Fragment>
        ),
      },
    ];

    return (
      <PageHeaderLayout title="客房出租率报表">
        <Card>
          <Button
            type="primary"
            htmlType="submit"
            style={{marginBottom: "20px"}}
            onClick={this.showAdd}
          >
            添加
          </Button>
          <Table
            style={{ marginBottom: 24 }}
            pagination={false}
            loading={loading}
            dataSource={data}
            columns={columns}
            rowKey="id"
          />
        </Card>
        <Modal
          visible={addVisible}
          title="添加客房出租信息"
          onOk={this.handleAdd}
          onCancel={this.cancelAdd}
          width={500}
        >
          <Form
            layout="inline"
          >
            <FormItem
              label="房间类别"
            >
              <Select defaultValue="标准双人间" style={{width: 130}}>
                <Option value="1">标准双人间</Option>
                <Option value="2">单人间</Option>
              </Select>
            </FormItem>
            <FormItem
              label="房间总数"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
            <FormItem
              label="出租数"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
            <FormItem
              label="出租率"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
          </Form>
        </Modal>
      </PageHeaderLayout>
    );
  }
}
