

export default async (body, res) => {
  try {
    const test = JSON.parse(body)
    res.status(200).json({ result: `${test}` });
    // 
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};