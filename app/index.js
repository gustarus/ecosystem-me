// import application mixins for lodash
import '@helpers/mixin'

// import theme styles
import '@core/styles/application.styl'

// import modules
import Router from '@core/router'
import translate from '@helpers/translate'
import config from '@core/config/defaults'

// configure translation module
translate.configure(config.translate);

// search and clean root node
let root = document.querySelector(config.root);
root.innerHTML = '';

// render application
ReactDOM.render(Router, root);
