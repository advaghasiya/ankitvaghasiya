export const getBlogPosts = async () => {
  const mediumUrl = process.env.MEDIUM_URL;
  
  if (!mediumUrl) {
    throw new Error('MEDIUM_URL is not defined in the environment variables');
  }

  const response = await fetch(mediumUrl, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}