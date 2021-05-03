const express=require("express")
const router=express.Router()
const{createResults, getAllResults,getSingleResult,updateResult,deleteResult}=require("../controllers/resultsController")
const protect=require("../middlewares/authMiddleware")

router.route("/")
.post(createResults)
.get(getAllResults)

//get singleResult and delete singleResult
router.route("/:_id")
.get(getSingleResult)
.put(protect,updateResult)
.delete(protect,deleteResult)

module.exports=router;