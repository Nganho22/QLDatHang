module.exports = {
    server: "ABC1",
    driver: "msnodesqlv8",
    database: "QLyDatHang",
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: '123456'  //update me
        }
    },
    options: {
        trustedConnection: true,
    },
};