// Placeholder for any additional business logic related to apps
export const validateAppData = (data) => {
  if (!data.name || !data.category || !data.rating || !data.image) {
    throw new Error('Missing required fields');
  }
};
