// import application mixins for lodash
import '@core/helpers/mixin'

// import theme styles
import '@core/styles/application.styl'

// import modules
import translate from '@core/helpers/translate'
import router from '@core/router'
import config from '@core/config'
import app from '@core/app'

// configure translation module
translate.configure(config.translate);

// search and clean root node
const root = document.querySelector(config.root);
root.innerHTML = '';

// render the app
app.setup().boot().render(router(), root);
