import "./App.css";
import Messenger from "./Components/Messenger";
import { Box } from "@mui/system";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="909434742428-uomf7id8nth4angv6c21e62a6h8ppqtl.apps.googleusercontent.com">
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
