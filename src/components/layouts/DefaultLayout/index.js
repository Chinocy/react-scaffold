import React from 'react';
import './styles.less';
import { Layout, Typography, Space, Image } from 'antd';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;
const DefaultLayout = () => {
  return (
    <Layout className='layout'>
      <Header className='header'></Header>
      <Content className='content'></Content>
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

export default DefaultLayout;
