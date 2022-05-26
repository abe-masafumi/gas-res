

export default async (req, res) => {
  try {
    res.status(200).json({ result: `${req.text()}「${JSON.parse(JSON.stringify(res))}」を受け取りました！` });
  console.log("ssssss")
    
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  console.log("ssssss")

  }
};