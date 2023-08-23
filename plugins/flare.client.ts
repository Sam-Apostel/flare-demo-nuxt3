import { flare } from "@flareapp/flare-client";
import { flareVue } from "@flareapp/flare-vue";

export default defineNuxtPlugin(({ $config, vueApp}) => {
	flare.light($config.public.flareKey);
	flare.beforeSubmit = (report) => {
		return {
			...report,
			application_path: report.context.request?.url,
		};
	};
	vueApp.use(flareVue);
});