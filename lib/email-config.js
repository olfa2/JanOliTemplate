const emailConfig = {
    workshopName: process.env.WORKSHOP_NAME || "Ihre Werkstatt",
    notificationEmail: process.env.NOTIFICATION_EMAIL || "werkstatt@beispiel.at",
    sendCustomerConfirmation: process.env.SEND_CUSTOMER_CONFIRMATION !== "false",
    responseSlaHours: Number(process.env.RESPONSE_SLA_HOURS || 24),
    maxRequestsPerHour: Number(process.env.RATE_LIMIT_MAX || 5)
};

export default emailConfig;
