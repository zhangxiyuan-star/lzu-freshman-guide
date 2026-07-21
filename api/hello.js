// ============================================
// Vercel Serverless Function 示例
// 演示如何安全使用环境变量中的密钥
//
// 重要：
// - 这里的 process.env.XXX 只能在服务端访问
// - 密钥永远不会发送到浏览器
// - 在 Vercel 后台的 Project Settings → Environment Variables 中配置
// ============================================

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.API_SECRET_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'Server configuration missing',
        hint: 'Set API_SECRET_KEY in Vercel environment variables'
      });
    }

    res.status(200).json({
      message: 'Serverless function is working',
      hasApiKey: !!apiKey,
      keyPrefix: apiKey.substring(0, 4) + '...',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
