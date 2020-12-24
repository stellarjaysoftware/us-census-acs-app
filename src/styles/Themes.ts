export class Theme {
  primary: string;
  secondary: string;
  accent: string;
  neutral: string;
  borders: string;
  constructor(primary:string, secondary:string, accent:string, neutral:string, borders:string) {
    this.primary = primary;
    this.secondary = secondary;
    this.accent = accent;
    this.neutral = neutral;
    this.borders = borders;
  }
}

export const Themes = {
  charger: new Theme(
    "#23120b",
    "#21209c",
    "#fdb827",
    "#ddd",
    "#999"
  ),
  aqua: new Theme(
    "#303841",
    "#00adb5",
    "#ff5722",
    "#eeeeee",
    "#999"
  ),
  burnt: new Theme(
    "#fc8621",
    "#c24914",
    "#682c0e",
    "#f9e0ae",
    "#682c0e"
  ),
  bam: new Theme(
    "#120078",
    "#9d0191",
    "#fd3a69",
    "#fecd1a",
    "#120078"
  )
}