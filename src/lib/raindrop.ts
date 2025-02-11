export const getBookmarks = async (url: string): Promise<any> => {
  const raindropToken = process.env.RAINDROP_TOKEN;

  if (!raindropToken) {
    throw new Error('RAINDROP_TOKEN is not defined in the environment variables');
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${raindropToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}