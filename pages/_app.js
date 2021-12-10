import Layout from '../components/Navigation/Layout';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'




function MyApp({ Component, pageProps }) {
  return(
   
    

  
    //<Navigation>
    <Layout {...pageProps}>
      <Component {...pageProps} />

    </Layout >
    
   // </Navigation>
        
     
  );
}

export default MyApp
