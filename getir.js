const { kv } = require('@vercel/kv');

module.exports = async (req, res) => {
  // CORS ayarları (Tarayıcı engellerini kaldırmak için)
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const data = await kv.get('portal_verileri');
    return res.status(200).json(data || { veri: null });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
