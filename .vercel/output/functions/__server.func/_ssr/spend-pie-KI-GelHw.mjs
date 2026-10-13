import { y as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as Pie, r as Cell, t as PieChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/spend-pie-KI-GelHw.js
var import_jsx_runtime = require_jsx_runtime();
function SpendPie({ slices }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PieChart, {
		width: 160,
		height: 160,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
			data: slices,
			dataKey: "cents",
			nameKey: "label",
			cx: "50%",
			cy: "50%",
			innerRadius: 48,
			outerRadius: 74,
			paddingAngle: slices.length > 1 ? 2 : 0,
			stroke: "var(--color-card)",
			strokeWidth: 2,
			isAnimationActive: false,
			startAngle: 90,
			endAngle: -270,
			children: slices.map((slice) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, {
				fill: "var(--color-accent)",
				fillOpacity: slice.opacity
			}, slice.id))
		})
	});
}
//#endregion
export { SpendPie };
