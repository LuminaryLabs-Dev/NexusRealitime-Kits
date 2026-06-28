import assert from "node:assert/strict";
import { createCompletionLedgerKit } from "./index.js";

const kit = createCompletionLedgerKit();
assert.equal(kit.id, "completion-ledger-kit");
assert.equal(kit.metadata.domain, "spatial");
console.log("completion-ledger-kit smoke ok");
