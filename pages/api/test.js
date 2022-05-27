

export default async (body, res) => {
  try {
    res.status(200).json({ result: `${body}` });
    // 
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};