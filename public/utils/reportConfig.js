export const reportConfig = (models, user, report, token) => {

    return {
        type: 'report',
        id: `${report.id}`,
        embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${report.id}&groupId=${report.group_id}`,
        tokenType: models.TokenType.Embed,
        accessToken: token
    }
}