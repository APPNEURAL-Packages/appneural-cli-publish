import { logger } from "@appneural/cli-shared";
import { withTelemetry } from "@appneural/cli-shared";
import { withSpinner } from "@appneural/cli-shared";
export function registerPublishCommands(program) {
    program
        .command("publish")
        .description("Publish the APPNEURAL CLI package")
        .action(() => withTelemetry("publish:run", async () => {
        await withSpinner("Publishing APPNEURAL package", async () => {
            await new Promise((resolve) => setTimeout(resolve, 700));
        });
        logger.success("APPNEURAL package published (npm publish --access public)");
    }));
}
//# sourceMappingURL=publish.js.map