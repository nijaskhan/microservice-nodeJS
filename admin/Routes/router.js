const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({message : "I am admin_service"});
});

module.exports = router;