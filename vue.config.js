const path = require('path');
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },

    chainWebpack: (config) => {
        config.resolve.alias 
            .set('components', resolve('./src/components'))
            .set('assets', resolve('./src/assets'))
            .set('common', resolve('./src/common'))
            .set('network', resolve('./src/network'))
            .set('views', resolve('./src/views'))
    },
}
