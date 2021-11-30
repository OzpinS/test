import { Button, Row, Col, Input, Form, Menu, Dropdown, Checkbox } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import config from '../../config'
import styles from './index.module.css'

const FormItem = Form.Item

const Login = () => {
  const handleOk = () => { }

  const langMenu = (
    <Menu>
      <Menu.Item key="0">
        <span>English</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Chinease</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img alt="logo" src={config.logoPath} />
      </div>
      <div className={styles.form}>
        <Row justify="space-between" className={styles.menu}>
          <Col>
            <span style={{fontWeight: 'bold'}}>Login</span>
          </Col>
          <Col>
            <Dropdown overlay={langMenu}>
              <a href="/" onClick={e => e.preventDefault()} style={{color: 'gray'}}>
                English <DownOutlined />
              </a>
            </Dropdown>
          </Col>
        </Row>
        <Form
          onFinish={handleOk}
          >
          <FormItem name="email" 
            rules={[{ required: true }]} hasFeedback>
              <Input
                placeholder={`Email`}
              />
          </FormItem>
          <FormItem name="password"
            rules={[{ required: true }]} hasFeedback>
              <Input
                type="password"
                placeholder={`Password`}
              />
          </FormItem>
          <div>
            <Row justify="space-between">
              <Col>
                <a href="/">Forgot Password?</a>
              </Col>
              <Col>
                <Checkbox>Remember me?</Checkbox>
              </Col>
            </Row>
            <Button
              type="primary"
              htmlType="submit"
              loading={false}
            >
              LOGIN
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login