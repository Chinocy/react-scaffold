import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './styles.less';
import { Col, Layout, Row, Form, Button, Input, Typography } from 'antd';

const { Content } = Layout;
const { Text, Title, Link } = Typography;
const Login = () => {
  const { login, fetching } = useAuth();

  return (
    <Layout className='layout'>
      <Content className='login-content'>
        <Row justify='center' align='middle' className='full-height'>
          <Col>
            <Form
              layout='vertical'
              name='basic'
              initialValues={{ remember: true }}
              onFinish={login}
            >
              <Title level={2}>Account Sign In</Title>
              <Form.Item
                label='Email'
                name='username'
                rules={[{ required: true }]}
              >
                <Input placeholder='Enter your email' />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true }]}
              >
                <Input.Password placeholder='Enter your password' />
              </Form.Item>
              <Link>Forgot Password</Link>
              <br />
              <br />

              <Row justify='center' align='middle'>
                <Button
                  type='primary'
                  htmlType='submit'
                  loading={fetching}
                  className='full-width'
                  shape='round'
                  size='large'
                >
                  Sign In
                </Button>
              </Row>
              <Row justify='center' align='middle'>
                <Text>- or -</Text>
              </Row>

              <Row justify='center' align='middle'>
                <Button
                  type='secondary'
                  className='full-width'
                  shape='round'
                  size='large'
                >
                  Create Account
                </Button>
              </Row>
            </Form>
            <br />
            <br />
            <Text>Having trouble logging in? Please email us at</Text>
            <br />
            <Link>portal@1health.io</Link>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Login;
