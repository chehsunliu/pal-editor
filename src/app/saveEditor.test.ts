import { readFileSync } from "fs";
import { load, Save } from "app/saveEditor";

test("GG", () => {
  const nodeBuffer = readFileSync(`${__dirname}/__tests__/2.RPG`);
  const save = load(nodeBuffer.buffer);

  const expected: Save = {
    gameProgress: {
      saveCount: 17,
      playerCount: 2,
      money: 496348,
    },
    players: {
      anu: {
        abilities: [353, 352, 329, 318, 394, 308, 299, 302, 305, 304],
        equipment: {
          bodyArmor: 209,
          boots: 0,
          charm: 251,
          cloak: 231,
          helm: 202,
          weapon: 192,
        },
        stat: {
          abilityPower: 220,
          attackDamage: 168,
          health: 480,
          level: 28,
          luck: 150,
          mana: 410,
          maxHealth: 480,
          maxMana: 410,
          movement: 160,
          resistance: 110,
        },
      },
      dummy: {
        abilities: [353, 329, 323, 374, 308, 298, 304],
        equipment: {
          bodyArmor: 215,
          boots: 244,
          charm: 253,
          cloak: 231,
          helm: 202,
          weapon: 193,
        },
        stat: {
          abilityPower: 562,
          attackDamage: 120,
          health: 3600,
          level: 40,
          luck: 40,
          mana: 720,
          maxHealth: 3600,
          maxMana: 720,
          movement: 110,
          resistance: 136,
        },
      },
      li: {
        abilities: [296, 298, 299, 310, 311, 345, 346, 348, 349, 363, 392],
        equipment: {
          bodyArmor: 214,
          boots: 240,
          charm: 248,
          cloak: 228,
          helm: 196,
          weapon: 172,
        },
        stat: {
          abilityPower: 253,
          attackDamage: 251,
          health: 810,
          level: 50,
          luck: 130,
          mana: 568,
          maxHealth: 811,
          maxMana: 625,
          movement: 148,
          resistance: 154,
        },
      },
      lin: {
        abilities: [298, 299, 337, 340, 341, 344, 394],
        equipment: {
          bodyArmor: 210,
          boots: 238,
          charm: 250,
          cloak: 228,
          helm: 199,
          weapon: 163,
        },
        stat: {
          abilityPower: 105,
          attackDamage: 120,
          health: 455,
          level: 21,
          luck: 64,
          mana: 268,
          maxHealth: 456,
          maxMana: 273,
          movement: 81,
          resistance: 83,
        },
      },
      queen: {
        abilities: [295, 304, 299, 315, 320, 325, 389, 336, 302, 308],
        equipment: {
          bodyArmor: 210,
          boots: 243,
          charm: 260,
          cloak: 234,
          helm: 202,
          weapon: 195,
        },
        stat: {
          abilityPower: 256,
          attackDamage: 168,
          health: 810,
          level: 48,
          luck: 60,
          mana: 790,
          maxHealth: 810,
          maxMana: 790,
          movement: 132,
          resistance: 136,
        },
      },
      zhao: {
        abilities: [
          297,
          300,
          301,
          303,
          306,
          307,
          309,
          312,
          313,
          314,
          316,
          317,
          318,
          319,
          321,
          322,
          323,
          327,
          328,
          330,
          332,
          333,
          334,
          335,
          351,
        ],
        equipment: {
          bodyArmor: 210,
          boots: 239,
          charm: 274,
          cloak: 228,
          helm: 199,
          weapon: 177,
        },
        stat: {
          abilityPower: 200,
          attackDamage: 159,
          health: 643,
          level: 35,
          luck: 78,
          mana: 532,
          maxHealth: 643,
          maxMana: 554,
          movement: 130,
          resistance: 106,
        },
      },
    },
    inventory: [
      { id: 236, count: 1, used: 0 },
      { id: 64, count: 2, used: 0 },
      { id: 99, count: 6, used: 0 },
      { id: 91, count: 1, used: 0 },
      { id: 95, count: 1, used: 0 },
      { id: 92, count: 8, used: 0 },
      { id: 76, count: 1, used: 0 },
      { id: 87, count: 4, used: 0 },
      { id: 84, count: 1, used: 0 },
      { id: 94, count: 1, used: 0 },
      { id: 79, count: 1, used: 0 },
      { id: 77, count: 1, used: 0 },
      { id: 127, count: 2, used: 0 },
      { id: 90, count: 1, used: 0 },
      { id: 105, count: 4, used: 0 },
      { id: 75, count: 1, used: 0 },
      { id: 93, count: 1, used: 0 },
      { id: 115, count: 8, used: 0 },
      { id: 131, count: 3, used: 0 },
      { id: 208, count: 1, used: 0 },
      { id: 166, count: 1, used: 0 },
      { id: 108, count: 1, used: 0 },
      { id: 67, count: 1, used: 0 },
      { id: 68, count: 1, used: 0 },
      { id: 69, count: 1, used: 0 },
      { id: 70, count: 1, used: 0 },
      { id: 71, count: 1, used: 0 },
      { id: 104, count: 2, used: 0 },
      { id: 106, count: 3, used: 0 },
      { id: 61, count: 3, used: 0 },
      { id: 179, count: 1, used: 0 },
      { id: 100, count: 1, used: 0 },
      { id: 101, count: 3, used: 0 },
      { id: 249, count: 1, used: 0 },
      { id: 235, count: 1, used: 0 },
      { id: 225, count: 1, used: 0 },
      { id: 238, count: 1, used: 0 },
      { id: 253, count: 3, used: 0 },
      { id: 167, count: 1, used: 0 },
      { id: 293, count: 1, used: 0 },
      { id: 173, count: 1, used: 0 },
      { id: 255, count: 2, used: 0 },
      { id: 197, count: 1, used: 0 },
      { id: 256, count: 1, used: 0 },
      { id: 239, count: 1, used: 0 },
      { id: 252, count: 1, used: 0 },
      { id: 284, count: 1, used: 0 },
      { id: 170, count: 1, used: 0 },
      { id: 168, count: 1, used: 0 },
      { id: 226, count: 1, used: 0 },
      { id: 209, count: 1, used: 0 },
      { id: 237, count: 1, used: 0 },
      { id: 211, count: 1, used: 0 },
      { id: 250, count: 0, used: 0 },
      { id: 282, count: 0, used: 0 },
    ],
  };

  expect(save).toEqual(expected);
});
