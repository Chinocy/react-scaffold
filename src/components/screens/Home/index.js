import React from 'react';
import useUser from '../../../hooks/useUser';
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

const Home = () => {
  const { user, logout } = useUser();

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
          <Image src='https://1health.dev.onpressidium.com/wp-content/uploads/2020/12/ico-1health-icon-light.svg' />
          <Typography.Text style={{ color: 'white' }}>
            Testing as a Service
          </Typography.Text>
        </Space>
      </Footer>
    </Layout>
  );
};

export default Home;
