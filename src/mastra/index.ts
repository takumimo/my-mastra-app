import { Mastra } from "@mastra/core/mastra";
import { createLogger } from "@mastra/core/logger";

import { weatherAgent, productComparisonAgent } from "./agents";

export const mastra = new Mastra({
  agents: {
    weatherAgent,
    productComparisonAgent,
  },
  logger: createLogger({
    name: "Mastra",
    level: "info",
  }),
});
