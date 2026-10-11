# SmartHomeX website security checklist

This file records recommended checks; it does not claim that a full secret scan or security audit has been run.

## Before publishing
- [ ] Run `npm install` after adding `react-router-dom`.
- [ ] Run `npm run build` and fix any build errors.
- [ ] Inspect the repository for exposed credentials before making it public.
- [ ] Rotate any API keys, passwords, MQTT credentials or tokens that were ever committed publicly.
- [ ] Never place Supabase service-role keys, MQTT passwords, private signing keys or `.env` values in frontend source.
- [ ] Review Supabase Row Level Security (RLS), authentication redirect URLs and database policies.
- [ ] Use least-privilege credentials and authenticated, TLS-protected broker connections.
- [ ] Confirm that the public APK is a signed release build and does not contain secrets.
- [ ] Replace legal policy placeholders with the actual data collection, third-party services, retention and contact details.
- [ ] Obtain legal review before treating the policy or terms as final.

## Current website changes
- Legal routes: `/privacy` and `/terms`.
- `.gitignore` excludes common local environment and signing-key files.
- No secret scan has been performed by generating these files. Review the repository and Git history separately.
