# smoke-test-api

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/85F8zZ7ostSSLjq88Rwb8X/FyCpHdGwf4qwgyor3GpyEo/tree/prod.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/85F8zZ7ostSSLjq88Rwb8X/FyCpHdGwf4qwgyor3GpyEo/tree/prod)

### 23 march 2026

> initial project deployment to my azure vm dokploy.

you can check out the process of how i deployed my initial project to dokploy.

the endpoints is trivial by design, and each actively verifies a different layer of my deployment

## endpoints

| method | what it does |
| ------------- | ----------------------------------------------------------------------------- |
| `GET /ping` | app is running and reverse proxy is wired |
| `GET /env` | env vars loaded (return key names + `present/missing`, never values). obviously, i'm not going to share the value of my env. |
| `POST /echo` | returns whatever JSON body you send it, but its mostly to make sure request body parsing and validation working as intended |
| `GET /health` | uptime, timestamp, runtime info with `(Bun.version)` |

## find me

[portfolio](https://tgr-wjya.github.io) · [linkedin](https://linkedin.com/in/tegar-wijaya-kusuma-591a881b9) · [email](mailto:tgr.wjya.queue.top126@pm.me)

---

made with ◉‿◉
