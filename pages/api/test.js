
/** リクエストに対して返却するデータ */

/** 想定されるリクエストパラメータ */

export default async (body, res) => {
  console.log("ssssss");
  console.log(req);
  console.log(body);
  try {
    res.status(200).json({ result: `「${body?.message}」を受け取りました！` });
  console.log("ssssss")
    
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  console.log("ssssss")

  }
};