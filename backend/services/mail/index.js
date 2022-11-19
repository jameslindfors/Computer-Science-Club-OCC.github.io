import SibApiV3Sdk from "sib-api-v3-sdk"

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
    process.env.SENDINBLUE_API_KEY

const sendEmail = async ({ subject, to, templateId, params }) => {
    try {
        return new SibApiV3Sdk.TransactionalEmailsApi().sendTransacEmail({
            subject,
            sender: {
                email: "api@sendinblue.com",
                name: "Testing Email Sender",
            },
            replyTo: { email: "apit@sendinblue.com", name: "No Reply" },
            to: [{ name: "Recipient Name", email: to }],
            templateId,
            params: {
                callback_uri: params.cb_uri,
            },
        })
    } catch {
        throw new Error("Error sending email")
    }
}

module.exports = sendEmail
