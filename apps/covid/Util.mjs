import Base from '../../node_modules/neo.mjs/src/core/Base.mjs';

/**
 * Static utility class
 * @class Covid.Util
 * @extends Neo.core.Base
 */
class Util extends Base {
    static getStaticConfig() {return {
        /**
         * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
         * Change this config to enforce a county specific formatting (e.g. 'de-DE')
         * @member {String} locales='default'
         * @protected
         * @static
         */
        locales: 'default'
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Covid.Util'
         * @protected
         */
        className: 'Covid.Util'
    }}

    /**
     * This method will get used as a grid renderer, so the 2nd param is an overload (would be {Object} record)
     * @param {Object} data
     * @param {Number} data.value
     * @param {String} [color]
     * @returns {String}
     */
    static formatNumber(data, color) {
        let value = data.value;

        if (!Neo.isNumber(value)) {
            return value || 'N/A';
        }

        value = value.toLocaleString(Util.locales);

        return typeof color !== 'string' ? value : `<span style="color:${color};">${value}</span>`;
    }
}

Neo.applyClassConfig(Util);

export default Util;
