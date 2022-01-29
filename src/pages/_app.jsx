import '../assets/css/global.css'
import 'bootstrap/dist/css/bootstrap.css'
function myApp({Component, pageProps}) {
    return <Component {... pageProps} />
}
export default myApp