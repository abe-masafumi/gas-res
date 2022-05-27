export async function getServerSideProps(context) {
  const response = await fetch(
    // 1iayuC-1ZvvJ3loMtgW6Lpnh7_DzS_fc4_eAcLiEvn2s
    'https://sheets.googleapis.com/v4/spreadsheets/1iayuC-1ZvvJ3loMtgW6Lpnh7_DzS_fc4_eAcLiEvn2s/values/%E3%82%B7%E3%83%BC%E3%83%881?key=AIzaSyArmCbf1YItXgxUXpDkUb6s1LXxfQOoimc'  )
  const postList = await response.json()
  return{
    props: {
      initPostList: postList
    }
  }
};

const phone = (props) => {
  console.log(props);
  return (
    <div>
      test
    </div>
  );
}
export default phone;