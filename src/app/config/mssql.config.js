module.exports = {
    server: "LAPTOP-8I1L1P2L\\SQLEXPRESS",
    driver: "msnodesqlv8",
    database: "QLDH",
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
}