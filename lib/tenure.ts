// Helpers for rendering role dates on the resume timeline.
//
// A date is either "YYYY-MM" (e.g. "2026-07") or "YYYY" for the older roles
// where only the year is known. An `end` of null/undefined means "Present".
//
// Durations are counted inclusively — Jun 2023 through Jul 2026 is 3 yrs 2 mos,
// not 3 yrs 1 mo — which is how LinkedIn reports tenure. Matching it keeps the
// site and the LinkedIn profile from disagreeing by a month.

export type RoleDate = string;

export type Role = {
  title: string;
  start: RoleDate;
  end?: RoleDate | null;
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function parse(date: RoleDate): { year: number; month: number | null } {
  const [year, month] = date.split("-");
  return { year: Number(year), month: month ? Number(month) : null };
}

export function formatDate(date?: RoleDate | null): string {
  if (!date) return "Present";
  const { year, month } = parse(date);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

export function formatPeriod(start: RoleDate, end?: RoleDate | null): string {
  return `${formatDate(start)} – ${formatDate(end)}`;
}

/** Inclusive duration, or null when either end is only accurate to the year. */
export function formatDuration(
  start: RoleDate,
  end?: RoleDate | null,
  now: Date = new Date()
): string | null {
  const from = parse(start);
  if (!from.month) return null;

  let to: { year: number; month: number | null };
  if (end) {
    to = parse(end);
    if (!to.month) return null;
  } else {
    to = { year: now.getFullYear(), month: now.getMonth() + 1 };
  }

  const months = (to.year - from.year) * 12 + (to.month! - from.month) + 1;
  if (months <= 0) return null;

  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (rest) parts.push(`${rest} mo${rest > 1 ? "s" : ""}`);
  return parts.join(" ");
}

/** Total time at a company, across every role held there. */
export function companyTenure(roles: Role[], now: Date = new Date()): string | null {
  if (roles.length === 0) return null;
  const start = [...roles].sort((a, b) => (a.start < b.start ? -1 : 1))[0].start;
  const current = roles.some((r) => !r.end);
  const end = current
    ? null
    : [...roles].sort((a, b) => (a.end! < b.end! ? -1 : 1))[roles.length - 1].end;
  return formatDuration(start, end, now);
}
