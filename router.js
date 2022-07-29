import express from 'express';
import {Bot} from './db.js'

const router = express.Router();

router.get('/:botId/:userId', (req, res, next) => {
    const botId = req.params.botId
    const userId = req.params.userId
    Bot.findOne({ botId })
        .then(bot => {
            if (!bot) {
                res.status(404).json({message: "봇의 아이디가 알맞지 않습니다"})
            } else {
                if (bot.heartUsers.includes(userId)) {
                    res.status(200).json({message: true})
                } else {
                    res.status(200).json({message: false})
                }
            }
    })
})

router.put('/addHeart/:userId', (req, res, next) => {
    const userId = req.params.userId;
    const botId = req.body.botId;
    Bot.findOne({ botId })
        .then(bot => {
            if (bot.heartUsers.includes(userId)) {
            res.status(200).json({message : "이미 하트를 누른 유저입니다"})
            } else {
                bot.heartUsers = [...bot.heartUsers, userId]
            }
    })
});

export default router;