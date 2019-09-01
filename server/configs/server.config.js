const config = {};

config.baseUrl = process.env.PRUONE_BASE_URL || 'http://localhost:10000';
config.password = process.env.PRUONE_PASSWORD || 'PRUone Web';
config.port = process.env.PRUONE_WEB_PORT || 10001;

config.proxy = process.env.PRUONE_PROXY || 'http://10.172.34.41:8080';

module.exports = config;