export async function getServerSideProps() {
  const WEB_APP_URL ="https://script.google.com/macros/s/AKfycbxuIL-slPOq3eF5LVQ8Ss0QJAZ33ccH8FZr1Z8a6EfIP5JiIs3deA-exPs7437g-j5b/exec";
  const response = await fetch(WEB_APP_URL);

  const data = JSON.parse(JSON.stringify(response));
  
  // const data = await response.json();
  console.log(data);
  return {
    props: {
      props: data,
    },
  }

}
const product = ({ props }) => {
  console.log(props);
  return (
    <div>
      test
    </div>
  );
}
export default product;