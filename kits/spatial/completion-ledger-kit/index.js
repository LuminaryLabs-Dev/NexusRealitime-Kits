import { resolveKitManifest } from "../../../installer/kit-catalog.js";
import { createManifestRuntimeKit } from "../../../installer/kit-manifest-loader.js";

export const kitId = "completion-ledger-kit";
export const kitManifest = resolveKitManifest(kitId);

export function createCompletionLedgerKit(config = {}) {
  return createManifestRuntimeKit(kitManifest, config);
}

export default createCompletionLedgerKit;
