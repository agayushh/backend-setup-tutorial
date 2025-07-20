import {asyncHandler} from '../utils/asyncHandler'


const registerUser = asyncHandler(async(req, res)=>{
    res.status(200).json({
        message: "ok"
    })
})