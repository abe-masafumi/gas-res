

export default async (req, res) => {
  try {
    res.status(200).json({ result: `www` });
    // 
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};