import {Link, Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <div>
        <Link to="/live">Live</Link>
      </div>

      <Routes>
        <Route path="/live" element={<Live />} />
      </Routes>
    </div>
  );
}

function Live() {
  // 👇️ redirect to external URL
  window.location.replace('https://showroom.one.blendvision.com?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6ImY0OTMxYzRlLWRmODUtNDEyOS05MmU1LWJmMTM0NDgzZGNlNCIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkUifQ.aGlNBG21G3_ootepMgSod81M8Z7ENMpmZRhmu6haqQWW6haEybHfoVjaGJxcJNGQ0sy_sgrvl8IcuG74newKp0W62Z8mnzcn1Mzxk1Lc2E_zsfhT8tgHUFMcQJ5jnsPQZTiuh3NIVdCcFK9wAGgWEJXXLk7g9GxjkTx1X41XqS5k9R9foOAp9vWP4-j3r3jJ0j02KgGm3zlHI4neqT8wRnAe6HKFv2XafjctPxb01GLfEO2HgVUqwW2aL6zOUCaW9Hd0TKuNKOQE4Y_Z8wjzIG0DqOf0BVcuv-hNczYmtf1N-aCzoY48x5jQVf22sGWqDFKjeOt5KLyuDPyOU-_VWg');

  return null;
}