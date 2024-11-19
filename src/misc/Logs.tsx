import { Card, CardContent } from "@mui/material";
import { Title, CanAccess, AccessDenied } from "react-admin";

export const Logs = () => (
  <CanAccess resource="logs" action="read" accessDenied={<AccessDenied />}>
    <Card sx={{ mt: 3 }}>
      <Title title="Logs" />
      <CardContent>
        <pre>
          <code>
            {`2024-11-18 10:23:45,123 INFO 200 192.168.1.10 GET /index.html Mozilla/5.0 (Windows NT 10.0) 0.234ms
2024-11-18 10:23:46,567 WARN 404 192.168.1.12 GET /favicon.ico Mozilla/5.0 (Macintosh) 1.003ms
2024-11-18 10:23:47,032 ERROR 500 192.168.1.13 POST /api/login Mozilla/5.0 (iPhone) 3.546ms
2024-11-18 10:23:47,987 INFO 200 192.168.1.14 GET /about.html Mozilla/5.0 (Windows NT 11.0) 0.452ms
2024-11-18 10:23:48,210 DEBUG 304 192.168.1.15 GET /assets/style.css Mozilla/5.0 (Android) 0.789ms
2024-11-18 10:23:49,543 INFO 201 192.168.1.16 POST /api/register Mozilla/5.0 (Linux) 2.004ms
2024-11-18 10:23:50,102 INFO 204 192.168.1.17 PUT /api/user/42 Mozilla/5.0 (Windows NT 10.0) 1.523ms
2024-11-18 10:23:51,345 WARN 403 192.168.1.18 DELETE /api/resource/9 Mozilla/5.0 (Macintosh) 0.977ms
2024-11-18 10:23:52,689 INFO 200 192.168.1.19 GET /contact.html Mozilla/5.0 (iPad) 0.876ms
2024-11-18 10:23:53,455 INFO 302 192.168.1.20 GET /old-page Mozilla/5.0 (Windows NT 10.0) 0.652ms
2024-11-18 10:23:54,204 DEBUG 200 192.168.1.21 HEAD /api/health Mozilla/5.0 (Linux) 0.054ms
2024-11-18 10:23:54,987 INFO 200 192.168.1.22 GET /docs/index.html Mozilla/5.0 (Android) 0.578ms
2024-11-18 10:23:55,345 WARN 401 192.168.1.23 GET /admin Mozilla/5.0 (Windows NT 11.0) 1.230ms
2024-11-18 10:23:56,234 INFO 200 192.168.1.24 GET /blog/post/42 Mozilla/5.0 (Macintosh) 0.456ms
2024-11-18 10:23:57,113 INFO 204 192.168.1.25 DELETE /api/post/18 Mozilla/5.0 (iPhone) 1.789ms
2024-11-18 10:23:58,567 ERROR 502 192.168.1.26 GET /api/status Mozilla/5.0 (Windows NT 10.0) 3.945ms
2024-11-18 10:23:59,876 DEBUG 200 192.168.1.27 OPTIONS /api/login Mozilla/5.0 (Android) 0.234ms
2024-11-18 10:24:00,453 INFO 200 192.168.1.28 GET /home Mozilla/5.0 (Linux) 0.567ms
2024-11-18 10:24:01,278 INFO 201 192.168.1.29 POST /api/products Mozilla/5.0 (Macintosh) 2.998ms
2024-11-18 10:24:02,156 INFO 200 192.168.1.30 GET /api/products/23 Mozilla/5.0 (Windows NT 10.0)`}
          </code>
        </pre>
      </CardContent>
    </Card>
  </CanAccess>
);
