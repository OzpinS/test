import { Button, Row, Col, Input, Form } from 'antd'
import { useRequest } from 'ahooks'
import config from '../../config'
import styles from './index.module.css'

const FormItem = Form.Item

const Login = () => {
  const handleOk = () => { }


  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img alt="logo" src={config.logoPath} />
      </div>
      <div className={styles.form}>
        <Row >
          <Col>Login</Col>
          <Col>English</Col>
        </Row>
        <Form
          onFinish={handleOk}
          >
          <FormItem name="username" 
            rules={[{ required: true }]} hasFeedback>
              <Input
                placeholder={`Username`}
              />
          </FormItem>
          <FormItem name="password"
            rules={[{ required: true }]} hasFeedback>
              <Input
                type="password"
                placeholder={`Password`}
              />
          </FormItem>
          <Row>
            <Button
              type="primary"
              htmlType="submit"
              loading={false}
            >
              LOGIN
            </Button>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default Login