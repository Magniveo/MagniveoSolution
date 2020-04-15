import { Card, Col, Row } from 'antd';
import Github from 'components/other/githubStar';
import 'echarts';
import globalConfig from 'global.config';
import * as React from 'react';
import Colendar from './colendar';
import Antv1 from './echarts/link';
import Antv2 from './echarts/lunar';
import Antv3 from './echarts/pie';
export default class IApp extends React.Component<any, any> {
    public render() {
        return (
            <div>
                {globalConfig.development && <Row type="flex" gutter={16}>
                    <Col span={24} >
                        <div style={{
                            textAlign: "center",
                            fontSize: 18
                        }}>
                            <a href="http://wtmdoc.walkingtec.cn" target="_block" style={{ fontSize: 24 }}>WTM адрес</a><br />
                            WTM - это чистый фреймворк с открытым исходным кодом, если хотите, приходите на GitHub, чтобы поставить звезду!!!
                              <Github />
                        </div>
                    </Col>
                </Row>}
                <Row type="flex" gutter={16}>
                    <Col span={24} >
                        <Card bordered={false}>
                            <Colendar />
                        </Card>
                    </Col>
                </Row>
                <Row type="flex" gutter={16}>
                    <Col span={12} >
                        <Card bordered={false}>  <Antv1 /></Card>
                    </Col>
                    <Col span={12} >
                        <Card bordered={false}>  <Antv3 /></Card>

                    </Col>
                </Row>
                <Row type="flex" gutter={16}>
                    <Col span={24} >
                        <Card bordered={false}>    <Antv2 /></Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
