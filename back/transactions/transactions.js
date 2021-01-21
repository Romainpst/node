let transactionDB;

module.exports = (injectedtransactionDB) => {
    transactionDB = injectedtransactionDB;

    return {
        getTransactions: getTransactions,
        addTransaction: addTransaction,
    };
};

function getTransactions(req, res) {
    transactionDB.getTransactions((response) => {
        if (response) {
            const message = JSON.stringify(response)
            sendResponse(res, message);

            return;
        }
    });
}

function addTransaction(req, res) {
    transactionDB.addTransaction(req.body.transaction, req.body.solde, (response) => {
        if (response) {
            const message = JSON.stringify(response)
            sendResponse(res, message);

            return;
        }
    });
}

function sendResponse(res, message, error) {
    res.status(error !== undefined ? 400 : 200).json({
        message: message,
        error: error,
    });
}