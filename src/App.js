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
  window.location.replace('https://showroom.one.blendvision.com?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6ImYxYTM4ZDQyLWJhOTYtNDFjMy05OWY5LTc5YWQxMmJlYmY1ZiIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX0xJVkUifQ.BDjC3ypi4r0hcmgVLwOFsfuCzbgtpqAaSjQ-RoKD8VZ1BFqlsRIRfvoJoJUxOiKNZXefv1I3dWc5hBMigavFdTkrhP3t5dqCy4hvbcY1tkbk94xPa_r_W5PWxLqLU2ZFXOTQijOM_FXpLSbPBAMg8WrvWhnIhO6_SSl-PAObvSSP1dXnFCWWmFSeKZ6UVggP9Kz8fXFEYE95099US5AVkNBwfrvs7nH6EiJTvGowFsHsEolLvydzXTKIB8bWBrA3HrvD2IWoQryOgqpqlmq4Q4ax2rr-0Fe7c8k14bpDKHlV4xcjyLj-7Nm2okgYahE1m8qalSWvYrTsiSrv_wSj2Q');

  return null;
}
