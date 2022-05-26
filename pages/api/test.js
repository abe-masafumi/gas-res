
/** リクエストに対して返却するデータ */

/** 想定されるリクエストパラメータ */

export default async (req, res) => {
  try {
    res.status(200).json({ result: `「${body?.message}」を受け取りました！` });
    
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};