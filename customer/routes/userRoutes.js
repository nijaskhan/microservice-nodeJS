const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({message : "I am customer_service"});
});

module.exports = router;