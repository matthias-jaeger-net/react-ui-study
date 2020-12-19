import * as React from "react";

export function IconMugSteam({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg className="icon icon-tabler icon-tabler-mugsteam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16,9h2a1.856,1.856,0,0,1,2,1.667v1.667A1.856,1.856,0,0,1,18,14H16" transform="translate(0 2)" fill="none" stroke-linecap="round" stroke-linejoin="round" /><path d="M406.859,48.07v3" transform="translate(-396.859 -45.07)" fill="none" stroke-linecap="round" /><path d="M406.859,48.07v2" transform="matrix(1, 0.017, -0.017, 1, -392.958, -51.163)" fill="none" stroke-linecap="round" /><path d="M406.859,48.07v2" transform="translate(-399.859 -44.07)" fill="none" stroke-linecap="round" /><path d="M5,6H15a.933.933,0,0,1,1,.846v6.769C16,15.485,14.209,17,12,17H8c-2.209,0-4-1.515-4-3.385V6.846A.933.933,0,0,1,5,6" transform="translate(0 3)" fill="none" stroke-linecap="round" stroke-linejoin="round" /></svg>;
}
