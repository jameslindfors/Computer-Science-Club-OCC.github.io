const MagicLoginStrategy = require("passport-magic-login")
const { sendEmail } = require("../services/mail/index")
const { mailConfig } = require("../services/mail/index")

const magicLogin = new MagicLoginStrategy({
    secret: process.env.MAGIC_LINK_SECRET,
    callbackUrl: "/auth/magiclogin/callback",
    sendMagicLink: async (destination, uri) => {
        await sendEmail({
            subject: mailConfig.subject,
            to: destination,
            templateId: mailConfig.templateId,
            params: { cb_uri: uri },
        }).then((data) => {
            return data
        })
    },
    verify: (_payload, _callback) => {
        // user model upsert user
    },
})

module.exports = magicLogin
