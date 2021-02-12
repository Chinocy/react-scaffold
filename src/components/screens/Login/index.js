import React from 'react';
import useUser from '../../../hooks/useUser';
import './styles.css';
import {
  Col,
  Layout,
  Row,
  Form,
  Button,
  Input,
  Checkbox,
  Image,
  Space,
  Typography,
} from 'antd';

const { Header, Footer, Content } = Layout;

const Login = () => {
  const { login, fetching } = useUser();

  return (
    <Layout className='layout'>
      <Header className='header'>
        <Row align='middle' style={{ height: '100%' }}>
          <Col>
            <Typography.Title level={3} style={{ color: 'white', margin: 0 }}>
              1HEALTH
            </Typography.Title>
          </Col>
        </Row>
      </Header>
      <Content className='content'>
        <Row justify='center' align='middle' style={{ height: '100%' }}>
          <Col>
            <Form
              labelCol={{ span: 8 }}
              name='basic'
              initialValues={{ remember: true }}
              onFinish={login}
            >
              <Form.Item wrapperCol={{ offset: 8 }}>
                <Typography.Title level={4}>LOGIN</Typography.Title>
              </Form.Item>
              <Form.Item
                label='Username'
                name='username'
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                rules={[{ required: true }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{ offset: 8 }}
                name='remember'
                valuePropName='checked'
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8 }}>
                <Button type='primary' htmlType='submit' loading={fetching}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer className='footer'>
        <Space>
          <Image src='https://1health.dev.onpressidium.com/wp-content/uploads/2020/12/ico-1health-icon-light.svg' />
          <Typography.Text style={{ color: 'white' }}>
            Testing as a Service
          </Typography.Text>
        </Space>
      </Footer>
    </Layout>
  );
};

export default Login;
