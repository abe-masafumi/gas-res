

export default async (req, res) => {
  try {
    res.status(200).json({ result: `${JSON.parse(req.body)}` });
    // 
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};