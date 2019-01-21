/**
 * 容器组件（类组件）：
 * 处理业务逻辑
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { userConfig } from '@/actions/commonAction';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import axios from 'axios';

class LoginForm extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        let { form, history, userConfig } = this.props;
        form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // username=laoxie&password=1234567

                let res = await axios.post('http://localhost:4008/login', values);

                res = res.data;

                if (res.code === 200 && res.token) {
                    // 更新redux数据，并存入本地存储
                    userConfig({ token: res.token, name: values.username });
                    localStorage.setItem('token', res.token);

                    // 返回上次页面
                    history.goBack();
                }
            }
        });
    }

    async componentWillMount() {
        let { token, userConfig, history} = this.props;

        if (!token) {
            token = localStorage.getItem('token');
        }

        if (token) {
            // 发起ajax请求验证token
            let res = await axios.get('http://localhost:4008/verifytoken', {
                headers: {
                    token
                }
            });
            res = res.data;

            if (res.code === 200) {
                userConfig({ token });

                // 如token还未失效，则调到我的页面，否则保留当前登录页面
                history.push('/mine');
            }
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <h1>用户登录</h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {
                            getFieldDecorator('username', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )
                        }
                    </Form.Item>
                    <Form.Item>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>下次免登陆</Checkbox>)
                        }

                        <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                        <div className="help content-justify"><a href="">免费注册</a><a className="login-form-forgot" href="">忘记密码?</a></div>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}


LoginForm = Form.create({ name: 'loginForm' })(LoginForm);

const mapStateToProps = state => {

    return ({
        username: state.common.user.name,
        token: state.common.user.token
    });
}

const mapDispatchToProps = dispatch => ({
    userConfig(config) {
        dispatch(userConfig(config));
    },
});

LoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginForm;