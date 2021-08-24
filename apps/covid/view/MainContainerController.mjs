import ComponentController from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Covid.view.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends ComponentController {
    static getConfig() {return {
        /**
         * @member {String} className='Covid.view.MainContainerController'
         * @private
         */
        className: 'Covid.view.MainContainerController'
    }}

    onConstructed() {
        super.onConstructed();
        console.log('Covid.view.MainContainerController: onConstructed()')
    }
}

Neo.applyClassConfig(MainContainerController);

export {MainContainerController as default};
