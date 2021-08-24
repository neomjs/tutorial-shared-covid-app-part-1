import Viewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        className: 'Covid.view.MainContainer',
        layout   : {ntype: 'vbox', align: 'stretch'},

        items: [
            {ntype: 'component', style: {backgroundColor: 'black'}},
            {ntype: 'component', style: {backgroundColor: 'red'}},
            {ntype: 'component', style: {backgroundColor: 'yellow'}}
        ]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};
