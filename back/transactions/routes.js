module.exports = (router, app, transactions) => {
    router.get("/", transactions.getTransactions);
    router.post("/", transactions.addTransaction);
    return router;
};