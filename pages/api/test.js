

export default async (req, res) => {
  try {
    res.status(200).json({ result: `${JSON.parse(req)}` });
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};