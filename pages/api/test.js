

export default async (req, res) => {
  try {
    const test = JSON.parse(req.body)
    res.status(200).json({ result: `${test?.values}` });
    // 
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};