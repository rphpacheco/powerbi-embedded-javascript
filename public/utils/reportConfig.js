export const reportConfig = (models, token) => {
    return {
        type: 'report',
        id: '<report_id>',
        embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=<report_id>&groupId=<group_id>',
        tokenType: models.TokenType.Embed,
        accessToken: token
    }
}