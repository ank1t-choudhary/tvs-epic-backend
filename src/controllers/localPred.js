const express = require("express");

const router = express.Router();

// req.body: joiningBatch, currentBatch, semester, studentsNotToInclude, feeStructure{}, dueDate, remarks
router.post("/local", async (req, res) => {
    try {
        // if (
        //     !(
        //         req.body.bounced_in_first_emi &&
        //         req.body.twelve_month_bounce_history &&
        //         req.body.maximum_mob &&
        //         req.body.bounced_while_repaying &&
        //         req.body.emi &&
        //         req.body.loan_amount &&
        //         req.body.tenure &&
        //         req.body.advance_emi_paid &&
        //         req.body.roi &&
        //         req.body.age &&
        //         req.body.total_secured_loans &&
        //         req.body.maximum_loan_sanctioned
        //     )
        // )
        console.log(req.body);

        res.status(200).json({
            success: true,
            result: 45,
            interest: 7,
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: e.toString(),
        });
        return;
    }
});

module.exports = router;
