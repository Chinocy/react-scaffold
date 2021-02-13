import React from 'react';
import DefaultLayout from '../Layouts/DefaultLayout';
import { List, Avatar } from 'antd';
import { useHistory } from 'react-router-dom';
import './styles.less';
import paths from '../../config/paths';
const Home = () => {
  let history = useHistory();
  return (
    <DefaultLayout title='Home'>
      <List
        itemLayout='horizontal'
        dataSource={[
          {
            title: 'Patient Search',
            onClick: () => history.push(paths.patientList),
          },
          { title: 'Order Test', onClick: () => history.push(paths.testList) },
        ]}
        renderItem={(item) => (
          <List.Item onClick={item.onClick} className='list-item'>
            <List.Item.Meta
              avatar={
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              }
              title={item.title}
            />
          </List.Item>
        )}
      />
    </DefaultLayout>
  );
};

export default Home;
