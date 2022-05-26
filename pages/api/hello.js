// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


/** リクエストに対して返却するデータ */

export default async (req, res) => {
  console.log("リクエスト",req);
  try {
    res.status(200).json({ result: `Next.jsから送信されました!` });
    console.log("aaaaaaa")
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};

/** GASのWEBアプリケーションURL */

// const getDataFromGAS = async() => {

// };