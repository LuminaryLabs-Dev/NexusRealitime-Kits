# NexusRealtime Kits

NexusRealtime Kits is the official first-party plugin catalog for NexusRealtime.

It is the promotion target for stable capabilities incubated in `NexusRealtime-ProtoKits`. Kits in this repo are intended to be installable one at a time, by domain bundle, by game stack, or through the full catalog.

> Note: this repository is currently named `NexusRealitime-Kits` on GitHub. The package identity and docs use `NexusRealtime-Kits` / `@luminarylabs/nexusrealtime-kits` as the intended public kit catalog name.

## Role

```txt
NexusRealtime
  runs kits and owns runtime contracts

NexusRealtime-Kits
  publishes official first-party kits and bundles

NexusRealtime-ProtoKits
  incubates future kits before promotion
```

This repo should not become a pile of demos. It should become a curated, domain-based kit catalog.

## Install Shapes

### One kit

```js
import { createNexusRealtimeKitInstaller } from "@luminarylabs/nexusrealtime-kits/installer";

const installer = createNexusRealtimeKitInstaller();
await installer.installKit(engine, "damage-health-kit");
```

### One domain

```js
import { createHazardCombatDomainKits } from "@luminarylabs/nexusrealtime-kits/domain-hazard-combat";

const engine = createRealtimeGame({
  kits: createHazardCombatDomainKits()
});
```

### Whole catalog

```js
import { createAllNexusRealtimeKits } from "@luminarylabs/nexusrealtime-kits/all";

const engine = createRealtimeGame({
  kits: createAllNexusRealtimeKits()
});
```

### CDN

```js
import { createNexusRealtimeKitInstaller } from "https://cdn.jsdelivr.net/gh/LuminaryLabs-Dev/NexusRealitime-Kits@main/installer/index.js";
```

## Current Status

This is the migration bootstrap. The catalog, domains, bundles, and installer are implemented first so stable ProtoKits have a landing zone.

Many catalog entries are currently `migration-placeholder` entries. A placeholder is intentionally installable as a metadata-only runtime kit so apps, agents, docs, and KitBuilder tooling can resolve the domain shape before each kit's full behavior is migrated from ProtoKits.

## Migration Rule

```txt
Experiment
→ ProtoKit
→ validated ProtoKit
→ official NexusRealtime Kit
→ NexusRealtime runtime primitive only if the runtime contract itself must change
```

Do not move unstable behavior here. Promote only when the kit is generic, deterministic, renderer-agnostic, documented, testable, and useful beyond one game.

## Repository Map

```txt
installer/       dynamic kit/domain/bundle installer
kit-catalog.json machine-readable catalog seed
domains/         domain bundle entrypoints
bundles/         full-catalog and game-stack bundles
kits/            official kit landing zones as migration proceeds
docs/            install, CDN, promotion, and migration guides
```

## Core Principle

```txt
One kit should be installable.
One domain should be installable.
The whole catalog should be installable.
Every install should be inspectable.
Every stable kit should be CDN-addressable.
```
