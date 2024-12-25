# GWjun-Dev

</br>

## 설치

```bash
pnpm install
```

</br>

## 실행

- **Development:**

  ```bash
  pnpm dev
  ```

- **Production Build:**

  ```bash
  pnpm build
  ```

- **Production Server:**

  ```bash
  pnpm start
  ```

</br>

## 구조

```
├── dist/                # Production build output
├── src/                 # React application source files
│   └── main.tsx         # Client-side entry point
└── server/              # Fastify server code
    ├── entry.tsx        # Server-side entry point for SSR render
    ├── main.ts          # Main server file
    └── util.ts          # Utility function file

```
