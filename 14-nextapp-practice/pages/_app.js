import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MeetupsApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MeetupsApp;
