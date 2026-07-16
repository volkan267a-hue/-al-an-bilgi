export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Sadece POST istekleri kabul edilir' });
  }

  const { veri } = request.body;
  const REDIS_URL = process.env.REDIS_URL; 

  try {
    const res = await fetch(`${REDIS_URL}/set/ortak_liste`, {
      method: 'POST',
      body: JSON.stringify(veri)
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}