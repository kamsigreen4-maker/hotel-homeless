This repository is a prototype static website for a family-friendly short-term hotel for people experiencing homelessness.

Goals:
- Provide dignified, family-centered temporary accommodation.
- Help families secure employment and transition to independent housing.
- Avoid institutional "care home" models — focus on privacy, stability, and resources.


Run locally:

You can use the provided helper script or run the full one-line command directly.

Using the helper script (recommended):

```bash
./start_server.sh
```

Or run the full command exactly as shown (this is the combined `nohup` + PID + status + log preview):


Then open http://localhost:8000/ in your browser. Stop the server with the helper or by killing the PID:

```bash
./stop_server.sh
# or
kill $(cat server.pid)
```

Next steps: improve application handling (server-side), add staff/admin workflow, and connect referrals and employment resources.
