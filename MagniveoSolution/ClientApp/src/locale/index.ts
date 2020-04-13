import enus from './en-US/default';
import zhcn from './zh-CN/default';
import engb from './en-GB/default';
import ruru from './ru-RU/default';
import lodash from 'lodash';
import { defineMessages, FormattedMessage, MessageDescriptor } from 'react-intl';
import globalconfig from 'global.config';
import antdZhCN from 'antd/lib/locale-provider/zh_CN';
import antdEnUS from 'antd/lib/locale-provider/en_US';
import antdEnGB from 'antd/lib/locale-provider/en_GB';
import antdRuRU from 'antd/lib/locale-provider/ru_RU';
let locales = {
    'zh-CN': {
        ...zhcn,
    },
    'en-US': {
        ...enus,
    },
    'en-GB': {
        ...engb,
    }
    ,
    'ru-RU': {
        ...ruru,
    }
};
/**
 * 扩展 多语言 配置
 * @param key 
 * @param locales 
 */
export function mergeLocales(mergeLocales: { 'zh-CN'?: any, 'en-US'?: any, 'en-GB'?: any, 'ru-RU'?: any}) {
    // lodash.update(locales, key, loe => {
    //     return lodash.merge(loe, locales)
    // });
    lodash.merge(locales, mergeLocales);
    console.warn("TCL: mergeLocales -> locales", locales)
}
/**
 * 获取当前配置语言 的 value
 *
 * @export
 * @param {string} key 
 * @param {*} [defaultValue] 默认值
 * @returns
 */
export function getLocalesValue(key: string, defaultValue?) {
    return lodash.get(getLocales(), key, defaultValue)
}
/**
 *
 *获取当前配置语言 的 value 格式化模板 
 * @export
 * @param {*} key
 * @param {*} values
 * @param {*} [defaultValue]
 * @returns
 */
export function getLocalesTemplate(key, values, defaultValue?) {
    return lodash.template(getLocalesValue(key, defaultValue), { interpolate: /{([\s\S]+?)}/g })(values)
}
/**
 * 获取当前语言配置
 *
 * @export
 * @returns
 */
export function getLocales(language = globalconfig.language) {
    const define = lodash.get(locales, language);
    //if (language === 'ru-RU')
    //    //console.log(define);
    // defineMessages(lodash.mapValues(define, (value, key) => {
    //     console.log( {
    //         id: key,
    //         description: value
    //     })
    // }) as any)

    return define
}
export function getConfigProvider(language = globalconfig.language) {
    return lodash.get({
        'zh-CN': antdZhCN,
        'en-US': antdEnUS,
        'en-Gb': antdEnGB,
        'ru-RU': antdRuRU
    }, language, antdRuRU)
}
export default locales