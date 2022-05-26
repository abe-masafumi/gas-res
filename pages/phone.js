export async function getServerSideProps(context) {
  console.log(context);
  fetch('https://docs.google.com/spreadsheets/d/1iayuC-1ZvvJ3loMtgW6Lpnh7_DzS_fc4_eAcLiEvn2s/edit#gid=0', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      return {
        props: {
          props:json,
        },
      }
    // Do something...
    })
    .catch(err => console.log(err));
    return {
      props: {
        props:"aaa",
      },
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