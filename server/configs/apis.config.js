const baseUrl = 'https://epos-uat.prulifeuk.com.ph/api';
module.exports = {
    login: {
        url: process.env.PRUONE_LOGIN || 'https://epos-uat.prulifeuk.com.ph/api/login'
    },
    getForms: {
        url: baseUrl + '/form'
    },

}