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
  window.location.replace('https://showroom.one.blendvision.com?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjJmZjZiNzA2LWY4MTItNGZiZi05ZmM0LTViNWMxYzlhZDRmMyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkUifQ.MWJc2am3zWUpFUxtzo5pNzXCnaBDOkQhBef1ku2TY_eZqBCMy6gYfhOy-Dn_GqG5kePVjXE0wVxXWyq4KnvnVUx9a4yi0qJlpi1VjEajlyaDVNtemQTPhMkQZG99yr9KlgmhXI9YCP03L1VHHPbwMWFWJgNtPK8NdlAMuwU01TXf887_-pdtYH_h8fgykM8EcfNWbLng8EdgVPaWkIk8r7lbYErSs59ZJf5-aTE3ImBx_uOV7bwM_eu3MX6E2-MEBCX_tt-cdc7wuat1HAeAhh3Jo30Dfxn4qEQPDV2XAveBiXXpKDNVkgMTzHQkSGFwrFWFa2EhcRJhykdw8ImI4w');

  return null;
}
