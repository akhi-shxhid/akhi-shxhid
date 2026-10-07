<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:3B5BFF&height=190&section=header&text=Shahid%20Afrid&fontSize=56&fontColor=ffffff&fontAlignY=40&desc=Software%20Developer%20%C2%B7%20Shopify%20%C2%B7%20AI%20Agents%20%C2%B7%20Node&descAlignY=62&descSize=17" width="100%" alt="Shahid Afrid" />

<p align="center">
  <a href="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&pause=1200&center=true&vCenter=true&width=620&lines=Software+Developer;Shopify+themes+%26+custom+apps;AI+agents+on+Claude+%26+MCP;Node+services+in+production">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&pause=1200&center=true&vCenter=true&width=620&color=3B5BFF&lines=Software+Developer;Shopify+themes+%26+custom+apps;AI+agents+on+Claude+%26+MCP;Node+services+in+production" alt="Software Developer — Shopify, AI agents, Node services" />
  </a>
</p>

<p align="center">
  <a href="https://shxhid.is-a.dev"><img src="https://img.shields.io/badge/Portfolio-shxhid.is--a.dev-3B5BFF?style=for-the-badge" alt="Portfolio" /></a>
  <a href="https://linkedin.com/in/shahidafrid-dev"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="mailto:shahidafrid97419@gmail.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

<p align="center">
  <a href="https://github.com/akhi-shxhid"><img src="https://img.shields.io/badge/Main-@akhi--shxhid-181717?style=flat-square&logo=github" alt="Main account" /></a>
  <a href="https://github.com/shxhid-dev"><img src="https://img.shields.io/badge/Work-@shxhid--dev-181717?style=flat-square&logo=github" alt="Work account" /></a>
  <img src="https://komarev.com/ghpvc/?username=akhi-shxhid&label=Profile+views&color=3B5BFF&style=flat-square" alt="Profile views" />
</p>

---

## About

Software developer in Bengaluru, building and running the systems an industrial automation distributor in Dubai operates on.

- Sole developer on a **200,000-product Shopify storefront** — 23 theme builds shipped to production, most recently a full ground-up redesign that is now the live theme
- Build **custom Shopify apps** in the Partner Dev Dashboard: app proxies, theme app extensions, Storefront and Admin APIs
- Built an **MCP-based AI shopping agent** on the Claude API that searches the full catalogue and completes checkout inside the chat — live since February 2026
- Write the **Node services** behind both, deployed on Railway
- I like the whole path: interface, API, deployment, and the debugging that only starts once something is live

**Portfolio with screenshots and written case studies → [shxhid.is-a.dev](https://shxhid.is-a.dev)**

> 🗂️ **Two accounts:** personal projects live on [**@akhi-shxhid**](https://github.com/akhi-shxhid), production work lives on [**@shxhid-dev**](https://github.com/shxhid-dev).

---

## Tech

**Shopify** — Liquid · Online Store 2.0 · theme architecture · custom apps · theme app extensions · app proxies · metafields · Storefront GraphQL API · Admin REST API

**Languages & Front end**<br/>
<img src="https://skillicons.dev/icons?i=js,ts,python,react,nextjs,tailwind,html,css" alt="Languages and front end" />

**Back end & Data**<br/>
<img src="https://skillicons.dev/icons?i=nodejs,express,fastapi,postgres,prisma,mongodb,supabase" alt="Back end and data" />

**AI** — Anthropic Claude API · Model Context Protocol (MCP) · agent architecture · tool design · prompt engineering · RAG

**Infrastructure**<br/>
<img src="https://skillicons.dev/icons?i=docker,git,github,linux,vercel,aws" alt="Infrastructure" /><br/>
Railway · CI/CD · PostHog

---

## In production

<table>
<tr>
<td width="50%" valign="top">

### [Creative Automation UAE](https://www.creativeautomation.ae)
`Shopify Liquid` `OS 2.0` `Metafields`

A 200,000-part industrial catalogue. Metafield-driven category hierarchy rendering 270+ collection pages, a three-level mega menu and auto-generated breadcrumbs with no per-collection hardcoding. Part-number-first search, filters, pre-order system, product and cart templates.

[Case study →](https://shxhid.is-a.dev/#/case/vision)

</td>
<td width="50%" valign="top">

### [Shopify AI Chat Agent](https://github.com/shxhid-dev/shxhid-chat-agent)
`Claude API` `MCP` `React Router` `Prisma` `Railway`

A Shopify Dev Dashboard app: theme app extension on the storefront, app proxy to a Dockerised backend, Shopify Storefront and Customer MCP servers over JSON-RPC, responses streamed as typed SSE events. Searches 200k products and checks out inside the conversation.

[Case study →](https://shxhid.is-a.dev/#/case/agent)

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [OTO Shipping Estimator](https://github.com/shxhid-dev/shxhid-shipping-proxy)
`Node.js` `Express` `Railway`

Express proxy quoting live carrier rates in the Shopify cart. One public endpoint; the refresh token never leaves the server. CORS allow-list, two tiers of rate limiting, short-TTL cache, bounded upstream retries, credential-free mock mode.

[Case study →](https://shxhid.is-a.dev/#/case/shipping)

</td>
<td width="50%" valign="top">

### [Brand distributor pages](https://www.creativeautomation.ae/pages/ifm-distributor)
`Liquid page templates`

Quote-first landing pages for IFM, Siemens and SMC, each with its own identity, all receiving the company's Google Ads traffic.

</td>
</tr>
</table>

---

## Personal projects

| Project | Stack | What it does |
|:--|:--|:--|
| **[Tutorly](https://gettutorly.vercel.app/)** | React · Python · LLM APIs · AWS S3 | AI study platform: note generation, flashcards, quizzes, math solving, a doubt-chain assistant and an audio-recap pipeline on S3 and AssemblyAI |
| **[Forms.io](https://formsio.vercel.app/)** | React · TypeScript · Supabase | Build, share and manage forms with live validation and response collection, in a brutalist interface |
| **[CloudHub](https://shahid-cloud-file-storage.vercel.app/)** | Node.js · Express · MongoDB · AWS S3 | Secure file storage with JWT authentication and encrypted uploads |

---

## Education & Certifications

**Bachelor of Computer Applications** — Nitte Meenakshi Institute of Technology, Bengaluru · 2022–2025

<img src="https://img.shields.io/badge/AWS-Certified%20Cloud%20Practitioner%20(May%202024)-FF9900?style=flat-square&logo=amazonaws&logoColor=white" alt="AWS Certified Cloud Practitioner" />
<img src="https://img.shields.io/badge/IBM-AI%20Fundamentals%20(Jan%202025)-052FAD?style=flat-square&logo=ibm&logoColor=white" alt="IBM AI Fundamentals" />

---

## Activity

### 🟩 Contribution heat map — both accounts

<p align="center"><b>Main · <a href="https://github.com/akhi-shxhid">@akhi-shxhid</a></b></p>
<p align="center">
  <img src="https://ghchart.rshah.org/3B5BFF/akhi-shxhid" width="95%" alt="Contribution heat map for akhi-shxhid" />
</p>

<p align="center"><b>Work · <a href="https://github.com/shxhid-dev">@shxhid-dev</a></b></p>
<p align="center">
  <img src="https://ghchart.rshah.org/00B894/shxhid-dev" width="95%" alt="Contribution heat map for shxhid-dev" />
</p>

### 📊 Activity graph

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=akhi-shxhid&bg_color=0d1117&color=3B5BFF&line=3B5BFF&point=ffffff&area=true&hide_border=true&title_color=3B5BFF" width="49%" alt="Activity graph for akhi-shxhid" />
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=shxhid-dev&bg_color=0d1117&color=00B894&line=00B894&point=ffffff&area=true&hide_border=true&title_color=00B894" width="49%" alt="Activity graph for shxhid-dev" />
</p>

### 📈 Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=akhi-shxhid&show_icons=true&hide_border=true&theme=github_dark&title_color=3B5BFF&icon_color=3B5BFF" height="160" alt="Stats for akhi-shxhid" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=akhi-shxhid&layout=compact&hide_border=true&theme=github_dark&title_color=3B5BFF" height="160" alt="Top languages for akhi-shxhid" />
</p>
<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=shxhid-dev&show_icons=true&hide_border=true&theme=github_dark&title_color=00B894&icon_color=00B894" height="160" alt="Stats for shxhid-dev" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=shxhid-dev&layout=compact&hide_border=true&theme=github_dark&title_color=00B894" height="160" alt="Top languages for shxhid-dev" />
</p>

---

<p align="center"><i>Built to run, not just to demo.</i></p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f2027,50:203a43,100:3B5BFF&height=90&section=footer" width="100%" alt="" />
