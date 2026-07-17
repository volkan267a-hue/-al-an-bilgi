import { kv } from '@vercel/kv';
export default async function handler(req, res) {
  try {
    const data = await kv.get('portal_verileri');
    return res.status(200).json(data || { veri: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
