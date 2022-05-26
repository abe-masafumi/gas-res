export async function getServerSideProps(context) {
  console.log(context);
  /** GASのWEBアプリケーションURL */
const WEB_APP_URL ="https://script.googleusercontent.com/macros/echo?user_content_key=Bg7hyKFV69uksFmLzuDb1yUB8dXffbEpTMLt-2az8SE_NJhrIHMURQLL6nsnU9SvbgoJMbOXkUGq3gl_Ze6M-xAgcTH9oL_hm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHygPuFLngzF7q2ueWSz0xWqdqSpR82WqICKot89PA2d89Dwc6HU6qcFonY-Q_58fcRGeKnPk8bMqThbrF0vKhM1Gs9BPt8QXg&lib=MHiYzXSUXvtslAeKU6a5bYz4e5fkJzZ6i";

const response = await fetch(WEB_APP_URL);

// const data = await response.json();
const data = JSON.parse(JSON.stringify(response));
console.log(data);
return {
      props: {
        props: data,
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