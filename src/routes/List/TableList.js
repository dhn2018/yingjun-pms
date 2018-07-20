import React, { PureComponent, Fragment } from 'react';
import { connect } from 'dva';
import {
  Card,
  Form,
  Input,
  Select,
  Button,
  Modal,
  Divider,
  Table,
} from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const FormItem = Form.Item;
const { Option } = Select;

@connect(({ rule, loading }) => ({
  rule,
  loading: loading.models.rule,
}))
@Form.create()
export default class TableList extends PureComponent {
  state = {
    addVisible: false,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'rule/fetch',
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
    this.resetValue();
  };

  cancelAdd = () => {
    this.setState({
      addVisible: false,
    });
  };

  render() {
    const { addVisible } = this.state;
    const { rule: { data }, loading } = this.props;

    const columns = [
      {
        title: '订单号',
        dataIndex: 'orderNo',
      },
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
        title: '住客姓名',
        dataIndex: 'name',
      },
      {
        title: '租金',
        dataIndex: 'rentSum',
      },
      {
        title: '入住天数',
        dataIndex: 'days',
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
      <PageHeaderLayout title="订单信息">
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
          title="添加客房"
          onOk={this.handleAdd}
          onCancel={this.cancelAdd}
          width={500}
        >
          <Form
            layout="inline"
          >
            <FormItem
              label="订单号"
            >
              <Input
                style={{width: 130}}
              />
            </FormItem>
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
