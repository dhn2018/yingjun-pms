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
  Radio
} from 'antd';
// import { getTimeDistance } from '../../utils/utils';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

@connect(({ loading }) => ({
  submitting: loading.effects['form/submitRegularForm'],
}))
@Form.create()
export default class BasicForms extends Component {
  state = {
    addVisible: false,
    value: 1,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'chart/fetch',
    });
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  resetValue = () => {
    // form.resetFields();
    console.log(this.props);
  };

  showAdd  = () => {
    this.setState({
      addVisible: true,
    });
  };

  handleAdd = () => {
    this.setState({
      addVisible: false,
    });
    this.resetValue();
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
        title: '身份证号',
        dataIndex: 'id',
        render: (text) => {
          return <a href="">{text}</a>;
        },
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '性别',
        dataIndex: 'sex',
      },
      {
        title: '年龄',
        dataIndex: 'age',
      },
      {
        title: '入住房间号',
        dataIndex: 'roomNo',
      },
      {
        title: '入住天数',
        dataIndex: 'days',
      },
      {
        title: '操作',
        render: () => (
          <Fragment>
            <a onClick={this.showAdd}>修改</a>
            <Divider type="vertical" />
            <a onClick={this.showAdd}>删除</a>
          </Fragment>
        ),
      },
    ];

    return (
      <PageHeaderLayout title="住客信息">
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
            data={data}
          />
        </Card>
        <Modal
          visible={addVisible}
          title="添加住客"
          onOk={this.handleAdd}
          onCancel={this.cancelAdd}
          width={500}
        >
          <Form
            layout="inline"
          >
            <FormItem
              label="身份证号"
            >
              <Input
                style={{width: 180}}
              />
            </FormItem>
            <FormItem
              label="姓名"
            >
              <Input style={{width: 100}} />
            </FormItem>
            <FormItem
              label="性别"
            >
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem
              label="年龄"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
            <FormItem
              label="入住房间号"
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
