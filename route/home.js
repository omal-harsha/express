import express from 'express'
const router = express.Router()

router.get("/", async (req,res) =>{
    return res.status(200).json({
        title: "express testing",
        message : "The app is working properly!"
    })
})

export {router}