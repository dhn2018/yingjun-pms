import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
  Card,
  Input,
  Button,
  Table,
  Modal,
  Form,
  Divider,
} from 'antd';

import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;

@connect(({ list, loading }) => ({
  list,
  loading: loading.models.list,
}))
export default class BasicList extends PureComponent {
  state = {
    addVisible: false,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'list/fetch',
      payload: {
        count: 5,
      },
    });
  }

  columns = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      render: (text) => {
        return <a href="">{text}</a>;
      },
    },
    {
      title: '房间号',
      dataIndex: 'roomNo',
      render: (text) => {
        return <a href="">{text}</a>;
      },
    },
    {
      title: '租金',
      dataIndex: 'rentSum',
    },
  ];

  render() {
    const { addVisible } = this.state;
    const { list: {data}, loading } = this.props;

    return (
      <PageHeaderLayout title="账务详情">
        <Card>
          <Table
            loading={loading}
            columns={this.columns}
            data={data}
          />
        </Card>
      </PageHeaderLayout>
    );
  }
}
