

export default async (req, res) => {
  try {
    // const test = JSON.parse(req.body)
    // res.status(200).json({ result: `wwwww` });
    const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1iayuC-1ZvvJ3loMtgW6Lpnh7_DzS_fc4_eAcLiEvn2s/values/%E3%82%B7%E3%83%BC%E3%83%881?key=AIzaSyArmCbf1YItXgxUXpDkUb6s1LXxfQOoimc')
    const postList = await response.json()
    console.log(postList)
    console.log("aaaaaaassssss")
  
    // 
  } catch (e) {
    res.status(500).json({ result: `エラー！` });
  }
};