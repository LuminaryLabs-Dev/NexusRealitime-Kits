import assert from "node:assert/strict";
import {
  createNexusRealtimeKitInstaller,
  createAllNexusRealtimeKits,
  listKitIds
} from "../../installer/index.js";

const engine = {
  kits: [],
  installKit(kit) {
    this.kits.push(kit);
    kit.initWorld?.({ engine: this, world: {}, kit, options: {} });
    return kit;
  }
};

const installer = createNexusRealtimeKitInstaller();
const one = await installer.installKit(engine, "completion-ledger-kit");
assert.equal(one.installed, true);
assert.equal(engine.kits[0].id, "completion-ledger-kit");

const domain = await installer.installDomain(engine, "input");
assert.equal(domain.domainId, "input");
assert.ok(domain.results.length >= 1);

const all = createAllNexusRealtimeKits();
assert.equal(all.length, listKitIds().length);

console.log("installer smoke ok", { kits: engine.kits.length, catalog: all.length });
