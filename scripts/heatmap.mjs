import fs from "node:fs";

const USER = process.env.GH_USER || "akhi-shxhid";
const YEAR = process.env.YEAR || "2025";
const TOKEN = process.env.GITHUB_TOKEN;

const query = `
query($u:String!,$from:DateTime!,$to:DateTime!){
  user(login:$u){
    contributionsCollection(from:$from,to:$to){
      contributionCalendar{
        totalContributions
        weeks{ contributionDays{ date contributionCount weekday } }
      }
    }
  }
}`;

const res = await fetch("https://api.github.com/graphql", {
  method: "POST",
  headers: { Authorization: `bearer ${TOKEN}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    query,
    variables: { u: USER, from: `${YEAR}-01-01T00:00:00Z`, to: `${YEAR}-12-31T23:59:59Z` },
  }),
});
const json = await res.json();
if (!json.data) throw new Error(JSON.stringify(json));

const cal = json.data.user.contributionsCollection.contributionCalendar;
const weeks = cal.weeks;
const max = Math.max(1, ...weeks.flatMap(w => w.contributionDays.map(d => d.contributionCount)));

const palette = ["#161b22", "#1a2a6c", "#2644b8", "#3B5BFF", "#9db0ff"];
const level = c => (c === 0 ? 0 : c <= max * 0.25 ? 1 : c <= max * 0.5 ? 2 : c <= max * 0.75 ? 3 : 4);

const CELL = 11, GAP = 3, PITCH = CELL + GAP, LEFT = 36, TOP = 56;
const W = LEFT + weeks.length * PITCH + 20;
const H = TOP + 7 * PITCH + 44;
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" font-family="-apple-system,Segoe UI,Helvetica,Arial,sans-serif">
<rect width="100%" height="100%" rx="10" fill="#0d1117"/>
<text x="${LEFT}" y="26" fill="#e6edf3" font-size="14" font-weight="600">@${USER} · ${YEAR}</text>
<text x="${W - 20}" y="26" fill="#3B5BFF" font-size="14" font-weight="600" text-anchor="end">${cal.totalContributions} contributions</text>`;

let lastMonth = -1;
weeks.forEach((w, i) => {
  const first = w.contributionDays[0];
  if (!first) return;
  const m = new Date(first.date).getUTCMonth();
  if (m !== lastMonth && new Date(first.date).getUTCFullYear() === Number(YEAR)) {
    out += `<text x="${LEFT + i * PITCH}" y="${TOP - 8}" fill="#8b949e" font-size="10">${months[m]}</text>`;
    lastMonth = m;
  }
  w.contributionDays.forEach(d => {
    const y = TOP + d.weekday * PITCH;
    out += `<rect x="${LEFT + i * PITCH}" y="${y}" width="${CELL}" height="${CELL}" rx="2" fill="${palette[level(d.contributionCount)]}"><title>${d.date}: ${d.contributionCount}</title></rect>`;
  });
});

[["Mon", 1], ["Wed", 3], ["Fri", 5]].forEach(([t, r]) => {
  out += `<text x="${LEFT - 8}" y="${TOP + r * PITCH + 9}" fill="#8b949e" font-size="10" text-anchor="end">${t}</text>`;
});

const lx = W - 20 - 5 * PITCH - 60;
out += `<text x="${lx}" y="${H - 14}" fill="#8b949e" font-size="10" text-anchor="end">Less</text>`;
palette.forEach((c, i) => {
  out += `<rect x="${lx + 6 + i * PITCH}" y="${H - 24}" width="${CELL}" height="${CELL}" rx="2" fill="${c}"/>`;
});
out += `<text x="${lx + 12 + 5 * PITCH}" y="${H - 14}" fill="#8b949e" font-size="10">More</text></svg>`;

fs.mkdirSync("assets", { recursive: true });
fs.writeFileSync(`assets/heatmap-${YEAR}.svg`, out);
console.log(`Wrote assets/heatmap-${YEAR}.svg (${cal.totalContributions} contributions)`);
