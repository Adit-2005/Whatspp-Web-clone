# Whatsapp Web Clone (Rebranded Demo)

This project is a rebranded and minimal-functional version of the Whatsapp Web Clone UI so it can run locally without the original backend.

## Local Development
1. Install dependencies:
```bash
npm install
```
2. Start development server:
```bash
npm start
```

## Deployment to Render
1. Upload this project to your Git repository.
2. Create a new **Static Site** or **Web Service** on Render.
3. In Render's settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `build`
   - Add an Environment Variable: `NPM_CONFIG_PRODUCTION=false`
4. Make sure `package.json` has `"react-scripts"` in dependencies (already included).
5. Render will build with Node 16 as specified in `package.json`.

## Notes
- This version uses a mock Socket provider so it works without a backend.
- To connect to a real backend, replace the `SocketProvider` implementation in `src/context/socketContext.js`.
