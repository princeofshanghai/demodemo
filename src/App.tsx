import React from 'react';
import { Layout, Typography, Space, Card, Row, Col, Button } from 'antd';
import { DatabaseOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{ 
        background: '#0077b5', 
        display: 'flex', 
        alignItems: 'center',
        padding: '0 24px'
      }}>
        <Space>
          <DatabaseOutlined style={{ fontSize: '24px', color: 'white' }} />
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            PCC - Product Catalog Control
          </Title>
        </Space>
      </Header>

      <Layout>
        {/* Sidebar */}
        <Sider width={250} style={{ background: '#f5f5f5' }}>
          <div style={{ padding: '24px 16px' }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card size="small" title="Navigation">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Text strong>📦 Products</Text>
                  <Text>📊 Analytics</Text>
                  <Text>⚙️ Settings</Text>
                  <Text>👥 Users</Text>
                </Space>
              </Card>
              
              <Card size="small" title="Quick Stats">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Text>Total Products: 1,234</Text>
                  <Text>Active Users: 89</Text>
                  <Text>Last Updated: 2 hours ago</Text>
                </Space>
              </Card>
            </Space>
          </div>
        </Sider>

        {/* Main Content */}
        <Content style={{ padding: '24px', background: 'white' }}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Card title="Welcome to PCC" size="default">
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <Text>
                    This is your Product Catalog Control dashboard. Here you can manage LinkedIn's internal product catalog, 
                    track product information, and oversee catalog operations.
                  </Text>
                  <Button type="primary" size="large" style={{ backgroundColor: '#0077b5', borderColor: '#0077b5' }}>
                    ➕ Add New Product
                  </Button>
                </Space>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card title="Products" size="default">
                <Text>Manage product listings, categories, and metadata</Text>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card title="Analytics" size="default">
                <Text>View usage statistics and performance metrics</Text>
              </Card>
            </Col>
            
            <Col span={8}>
              <Card title="Settings" size="default">
                <Text>Configure system preferences and user permissions</Text>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
