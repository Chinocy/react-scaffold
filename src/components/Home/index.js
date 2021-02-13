import React from 'react';
import useAuth from '../../hooks/useAuth';
import './styles.css';
import {
  Col,
  Layout,
  Row,
  Button,
  Image,
  Space,
  Typography,
  Divider,
} from 'antd';

const { Header, Footer, Content } = Layout;

const TestList = () => {
  const { user, logout } = useAuth();

  return (
    <Layout className='layout'>
      <Header className='header'>
        <Row align='middle' style={{ height: '100%' }}>
          <Col>
            <Typography.Title level={3} style={{ color: 'white', margin: 0 }}>
              SCAFFOLD
            </Typography.Title>
          </Col>
        </Row>
      </Header>
      <Content className='content'>
        <Row justify='center' align='middle' style={{ height: '100%' }}>
          <Col>
            <Typography.Text>{`Hello, ${user.first_name} ${user.last_name}`}</Typography.Text>
            <Divider />
            <Button type='primary' onClick={logout}>
              LOGOUT
            </Button>
          </Col>
        </Row>
      </Content>
      <Footer className='footer'>
        <Space>
          <Image
            src='https://www.arteneo.com/wp-content/uploads/2016/06/copyright-737x643.png'
            width={30}
            preview={false}
          />
          <Typography.Text style={{ color: 'white' }}>
            All rights reserved
          </Typography.Text>
        </Space>
      </Footer>
    </Layout>
  );
};

export default TestList;
