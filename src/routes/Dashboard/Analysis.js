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
import request from '../../utils/request';

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
    console.log('request');
    request('/api/system/menus',{method: 'GET'})
      .then(res => {
        console.log(123456, res);
      })
      .catch(err => {
        console.log(err);
        alert('出错了！');
      })

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
        title: '房间号',
        dataIndex: 'roomNo',
        render: (text) => {
          return <a href="">{text}</a>;
        },
      },
      {
        title: '房间类别',
        dataIndex: 'roomType',
      },
      {
        title: '房间状态',
        dataIndex: 'roomStatus',
      },
      {
        title: '租金',
        dataIndex: 'rent',
      },
      {
        title: '住客姓名',
        dataIndex: 'name',
      },
      {
        title: '入住天数',
        dataIndex: 'days',
      },
      {
        title: '操作',
        render: () => (
          <Fragment>
            <a
              onClick={() => {
              }}
            >
              修改
            </a>
            <Divider type="vertical" />
            <a>删除</a>
          </Fragment>
        ),
      },
    ];

    return (
      <PageHeaderLayout title="客房信息">
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
            loading={loading}
            columns={columns}
            dataSource={data}
          />
        </Card>
        <Modal
          visible={addVisible}
          title="添加客房"
          onOk={this.handleAdd}
          onCancel={this.cancelAdd}
          width={500}
        >
          <Form
            layout="inline"
          >
            <FormItem
              label="房间号"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
            <FormItem
              label="房间类别"
            >
              <Select defaultValue="标准双人间" style={{width: 130}}>
                <Option value="1">标准双人间</Option>
                <Option value="2">单人间</Option>
              </Select>
            </FormItem>
            <FormItem
              label="房间状态"
            >
              <Select defaultValue="空房" style={{width: 130}}>
                <Option value="1">空房</Option>
                <Option value="2">在住</Option>
              </Select>
            </FormItem>
            <FormItem
              label="租金"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
            <FormItem
              label="住客姓名"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
            <FormItem
              label="入住天数"
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
