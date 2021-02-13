/* eslint-disabled */
import React from 'react';
import './styles.less';
import { Layout, Typography, Space, Image, Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import useAuth from '../../../hooks/useAuth';
import { LogoutOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

const DefaultLayout = ({ title, children }) => {
  const { user, logout } = useAuth();
  return (
    <Layout className='layout'>
      <Header className='header'>
        <Row align='middle' className='full-height'>
          <Col flex='auto'>
            <Title className='primary-text no-margin' level={4}>
              {title}
            </Title>
          </Col>
          <Col flex={1} align='right'>
            <Text className='primary-text'>{`${user.first_name} ${user.last_name}`}</Text>
            <Button
              type='primary'
              shape='circle'
              icon={<LogoutOutlined />}
              onClick={logout}
            />
          </Col>
        </Row>
      </Header>
      <Content className='content'>{children}</Content>
      <Footer className='footer'>
        <Space>
          <Image
            src='https://www.arteneo.com/wp-content/uploads/2016/06/copyright-737x643.png'
            width={30}
            preview={false}
          />
          <Text style={{ color: 'white' }}>All rights reserved</Text>
        </Space>
      </Footer>
    </Layout>
  );
};

DefaultLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default DefaultLayout;
