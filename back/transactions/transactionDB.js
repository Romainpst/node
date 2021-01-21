let pgPool;

module.exports = (injectedPgPool) => {
    pgPool = injectedPgPool;

    return {
        getTransactions: getTransactions,
        addTransaction: addTransaction,
    };
};

function getTransactions(cbFunc) {

    const getTransactionsQuery = "SELECT * FROM transactions";


    pgPool.query(getTransactionsQuery, (response) => {

        cbFunc(
            response.results
        );
    });
}

function addTransaction(transaction, solde, cbFunc) {

    const newSolde = parseInt(solde) + parseInt(transaction);
    const addTransactionQuery = `INSERT INTO transactions (transaction, solde) VALUES (${transaction}, ${newSolde})`;

    pgPool.query(addTransactionQuery, cbFunc);
}

