import React, { Component, Fragment } from 'react';
import { Button, Card, Table, Modal, Form, Input, Select, Divider } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import request from "../../utils/request";

const Option = Select.Option;
const FormItem = Form.Item;

@Form.create()
export default class Analysis extends Component {
  state = {
    addVisible: false,
    updateVisible: false,
    data: [],
    recordData: {},
  };

  componentDidMount() {
    console.log('request');
    request('/api/system/role',{method: 'GET'})
      .then(res => {
        this.setState({
          data: res,
        });
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
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('添加的数据', values);
        request('/api/system/roles', {body: values, method: 'POST'})
          .then(res => {
            this.setState({
              data: res,
            });
          })
          .finally(() => {
            this.setState({
              addVisible: false,
            });
          })
      }
    });
  };

  handleUpdate = () => {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('修改后的数据', values);
        request('/api/system/roles', {body: values, method: 'PUT'})
          .then(res => {
            console.log(7777, res);
            this.setState({
              data: res,
            });
          })
          .finally(() => {
            this.setState({
              updateVisible: false,
            });
          })
      }
    });
  };

  cancelAdd = () => {
    this.setState({
      addVisible: false,
      updateVisible: false,
    });
  };

  showUpdate  = () => {
    console.log(99999999999);
    this.setState({
      updateVisible: true,
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const { data, recordData } = this.state;
    const { loading, form: {getFieldDecorator} } = this.props;
    const  { addVisible, updateVisible } = this.state;

    const columns = [
      {
        title: '角色名',
        dataIndex: 'role',
      },
      {
        title: '角色权限',
        dataIndex: 'roleRight',
      },
      {
        title: '用户名',
        dataIndex: 'username',
      },
      {
        title: '密码',
        dataIndex: 'password',
      },
      {
        title: '操作',
        render: (record) => (
          <Fragment>
            <a onClick={() => {
              this.showUpdate();
              this.setState({
                recordData: record,
            });
            }}
            >
              修改
            </a>
            <Divider type="vertical" />
            <a href="">删除</a>
          </Fragment>
        ),
      },
    ];

    return (
      <PageHeaderLayout title="角色信息">
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
            rowKey="username"
            pagination={false}
          />
        </Card>
        <Modal
          visible={addVisible}
          title="添加角色"
          onOk={this.handleAdd}
          onCancel={this.cancelAdd}
          width={500}
        >
          <Form
            layout="inline"
          >
            <FormItem
              label="角色名"
            >
              {getFieldDecorator('role', {
                rules: [
                  {required: true, message: '请输入角色名'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
            <FormItem
              label="角色权限"
            >
              {getFieldDecorator('roleRight', {
                rules: [
                  {required: true, message: '请输入角色权限'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
            <FormItem
              label="用户名"
            >
              {getFieldDecorator('username', {
                rules: [
                  {required: true, message: '请输入用户名'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
            <FormItem
              label="密码"
            >
              {getFieldDecorator('password', {
                rules: [
                  {required: true, message: '请输入密码'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
          </Form>
        </Modal>
        <Modal
          visible={updateVisible}
          title="修改角色"
          onOk={this.handleUpdate}
          onCancel={this.cancelAdd}
          width={500}
        >
          <Form
            layout="inline"
          >
            <FormItem
              label="角色名"
            >
              {getFieldDecorator('role', {
                initialValue: recordData.role,
                rules: [
                  {required: true, message: '请输入角色名'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
            <FormItem
              label="角色权限"
            >
              {getFieldDecorator('roleRight', {
                initialValue: recordData.roleRight,
                rules: [
                  {required: true, message: '请输入角色权限'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
            <FormItem
              label="用户名"
            >
              {getFieldDecorator('username', {
                initialValue: recordData.username,
                rules: [
                  {required: true, message: '请输入用户名'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
            <FormItem
              label="密码"
            >
              {getFieldDecorator('password', {
                initialValue: recordData.password,
                rules: [
                  {required: true, message: '请输入密码'},
                ],
              })(
                <Input
                  style={{width: 130}}
                />
              )}
            </FormItem>
          </Form>
        </Modal>
      </PageHeaderLayout>
    );
  }
}
