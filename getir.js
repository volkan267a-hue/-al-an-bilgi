export default async function handler(request, response) {
  const REDIS_URL = process.env.REDIS_URL;

  try {
    const res = await fetch(`${REDIS_URL}/get/ortak_liste`);
    const data = await res.json();

    return response.status(200).json({ veri: data.result });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}