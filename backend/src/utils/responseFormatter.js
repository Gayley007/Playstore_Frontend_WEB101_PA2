exports.formatSuccess = (data) => ({ success: true, data });
exports.formatError = (message) => ({ success: false, message });
