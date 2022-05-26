export async function getServerSideProps(context) {
  console.log(context);
  fetch('https://www.jma.go.jp/bosai/himawari/data/satimg/targetTimes_jp.json', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
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