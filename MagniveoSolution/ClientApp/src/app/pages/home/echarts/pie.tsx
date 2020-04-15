import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react'
/**
 * https://echarts.baidu.com/examples/editor.html?c=pie-nest&theme=light
 */
export default class Lunar extends PureComponent {
    getOption = () => {
        return {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['Плакаты', 'Реклама', 'Поисковая система', 'Email маркетинг', 'Партнерская реклама', 'Видеообъявление', 'Baidu', 'Google', 'Bing', 'И т.д.']
            },
            series: [
                {
                    name: 'Посещение источников',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        { value: 335, name: 'Бюджет', selected: true },
                        { value: 679, name: 'Реклама' },
                        { value: 1548, name: 'Поисковая система' }
                    ]
                },
                {
                    name: 'Посещение источников',
                    type: 'pie',
                    radius: ['40%', '55%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: [
                        { value: 335, name: 'Бюджет' },
                        { value: 310, name: 'Email маркетинг' },
                        { value: 234, name: 'Партнерская реклама' },
                        { value: 135, name: 'Видеообъявление' },
                        { value: 1048, name: 'Baidu' },
                        { value: 251, name: 'Google' },
                        { value: 147, name: 'Bing' },
                        { value: 102, name: 'И т.д.' }
                    ]
                }
            ]
        };
    };
    render() {
        return (
            <div className='examples'>
                <div className='parent'>
                    <label> render a lunar calendar chart. </label>
                    <ReactEcharts
                        theme="light"
                        option={this.getOption()}
                        style={{ height: '800px', width: '100%' }}
                    />
                </div>
            </div>
        );
    }
}
