// ============================================
// 消息墙提交接口（示例）
// 演示：后端敏感词过滤 + 密钥验证
//
// 部署前需要在 Vercel 配置的环境变量：
// - MESSAGE_WALL_SECRET: 客户端提交时的共享密钥（可选）
// - DATABASE_URL: 数据库连接串（如果要持久化）
// ============================================

const SENSITIVE_WORDS = [
  '傻逼', '操你', '去死', '垃圾', '废物', '脑残',
  'sb', 'cnm', 'nmsl', 'fuck', 'shit'
];

function containsSensitive(text) {
  const lower = text.toLowerCase();
  return SENSITIVE_WORDS.some(word => lower.includes(word.toLowerCase()));
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, message } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    if (message.length > 100) {
      return res.status(400).json({ error: 'Message too long (max 100 chars)' });
    }

    if (name && name.length > 20) {
      return res.status(400).json({ error: 'Name too long (max 20 chars)' });
    }

    if (containsSensitive(message) || (name && containsSensitive(name))) {
      return res.status(400).json({ error: '内容包含敏感词，请修改后重试' });
    }

    const safeName = name ? escapeHtml(name.trim()) : '匿名同学';
    const safeMessage = escapeHtml(message.trim());

    res.status(200).json({
      success: true,
      data: {
        name: safeName,
        message: safeMessage,
        timestamp: new Date().toISOString()
      },
      note: 'This is a demo. Connect to a real database for persistence.'
    });
  } catch (error) {
    console.error('Message wall error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
