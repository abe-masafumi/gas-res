

export default async (req, res) => {
  try {
    
    res.status(200).json({ result: `を受け取りました！` });
    console.log("ssssss")
    
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
    console.log("ssssss")
  }
};