import { createFileRoute } from "@tanstack/react-router";
import { api } from "~/convex/_generated/api";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: App,
  loader: async ({ context }) => {
    await Promise.all([
      context.queryClient.ensureQueryData(
        convexQuery(api.auth.getCurrentUser, {}),
      ),
      // Load multiple queries in parallel if needed
    ]);
  },
});
