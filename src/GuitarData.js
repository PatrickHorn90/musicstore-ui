const guitarData = [
  {
    id: 1,
    brand: "fender",
    name: "Fender Special Edition Telecaster Black Cherry Burst",
    description:
      "Solidbody Electric Guitar with Mahogany Body, Flame Maple Top, Mahogany Neck, Indian Laurel Fingerboard, and 2 Humbucking Pickups - Black Cherry Burst",
    price: 2000.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__q-85__ha-dd9bf8e177478cd0__hmac-a820ad02f260f5a657a375a150d504d7e1d0098d/images/guitars/TeleHHFMIBC/ICF21000254/ICF21000254-body-large.jpg.auto.webp",
  },
  {
    id: 2,
    brand: "ibanez",
    name: "Ibanez Steve Vai Signature - Onyx Black",
    description:
      "Solidbody Electric Guitar with Alder Body, Maple/Walnut Neck, Rosewood Fingerboard, 2 Humbucking Pickups, 1 Single-coil Pickup, and Edge Tremolo - Onyx Black",
    price: 3499.99,
    rating: 4,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-953fba0f96f67f96__hmac-08e25d97e8bc350ff14967392d71307f676f8ee4/images/items/750/PIA3761XB-large.jpg.auto.webp",
  },
  {
    id: 3,
    brand: "gibson",
    name: "Gibson Les Paul Standard - Gold Top",
    description:
      "Solidbody Electric Guitar with Mahogany Body, Maple Top, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Gold Top",
    price: 2499.99,
    rating: 4,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-ea934ac5ae738f6a__hmac-ce702f8f8c4e36836fe705f819f1a5a048c3d196/images/items/750/LPS5PGTNH-large.jpg.auto.webp",
  },
  {
    id: 4,
    brand: "prs",
    name: "PRS SE Custom 24 - Black Gold Sunburst",
    description:
      "Solidbody Electric Guitar with Mahogany Body, Maple Top, Maple Neck, Rosewood Fretboard, 2 Humbucking Pickups, and Tremolo - Black Gold Sunburst",
    price: 829.99,
    rating: 4,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-300__bg-ffffff__q-85__ha-daf1a2d9fbeade04__hmac-23755de304e700d8d3c79aa18e6471d043017491/images/items/350/SECU24QBGS.jpg.auto.webp",
  },
  {
    id: 5,
    brand: "fender",
    name: "Fender American Professional - Mystic Surf Green",
    description:
      "Solidbody Electric Guitar with Alder Body, Maple Neck and Fingerboard, and 3 Single-coil Pickups - Mystic Surf Green",
    price: 1499.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-300__bg-ffffff__q-85__ha-356f14bf702729a2__hmac-eefc72b2348e54c28e9fdabdbf6fc794f9b8e9a8/images/items/350/StratAP2MSG.jpg.auto.webp",
  },
  {
    id: 6,
    brand: "kramer",
    name: "Kramer Snake Sabo Baretta Outfit - Green",
    description:
      "Solidbody Electric Guitar with Alder Body, Maple Neck, Laurel Fingerboard, 1 Humbucking Pickup, and Floyd Rose Tremolo with D-Tuna - Green",
    price: 2499.99,
    rating: 4,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-77021fe26df20621__hmac-0d8c074cd1dca15a00c0f5b837ff5c6ecb181f2f/images/items/750/KBVDSSNBF-large.jpg.auto.webp",
  },
  {
    id: 7,
    brand: "fender",
    name: "Fender Player Strat - Buttercream",
    description:
      "Solidbody Electric Guitar with Alder Body, Maple Neck, Maple Fingerboard, and 3 Single-coil Pickups - Buttercream",
    price: 749.99,
    rating: 3,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-35f02ee6c0e30264__hmac-0b3b8cbd385f3e8123f74b2e31e88608c75ed1f7/images/items/750/StratPMBCR-large.jpg.auto.webp",
  },
  {
    id: 8,
    brand: "prs",
    name: "PRS SE Standard 24 - Translucent Blue",
    description:
      "Solidbody Electric Guitar with Mahogany Body, Maple Neck, Rosewood Fingerboard, 2 Humbucking Pickups, and Vibrato Bridge - Translucent Blue",
    price: 579.99,
    rating: 4,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-9136940a0bb5e899__hmac-6cd7cc67981ad9655b9284d2003dc61c4ef99e16/images/items/750/SEStd24TBG-large.jpg.auto.webp",
  },
  {
    id: 9,
    brand: "danelectro",
    name: "Danelectro 59X12 12-String",
    description:
      "12-string Semi-hollowbody Electric Guitar with Spruce Body, Hardboard Top and Back, Maple Neck, Pau Ferro Fingerboard, 1 Single-coil Pickup, 1 Humbucking Pickup - Vintage Cream",
    price: 569.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__q-85__ha-99e18c26c978bb27__hmac-4d54e5e5bc51564c30d818419af025f21a40dd49/images/guitars/59X12VC/084096/084096-body-large.jpg.auto.webp",
  },
  {
    id: 10,
    brand: "gibson",
    name: "Gibson Explorer - Antique Natural",
    description:
      "Solidbody Electric Guitar with Mahogany Body and Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Antique Natural",
    price: 1699.99,
    rating: 4,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-45cc341d14def6f5__hmac-757f1458cc24743d39b81e0dfc0ddbcfc49630bf/images/items/750/DSXANCH1-large.jpg.auto.webp",
  },
  {
    id: 11,
    brand: "ibanez",
    name: "Ibanez Joe Satriani Signature",
    description:
      "Solidbody Electric Guitar with Alder Body, Maple/Bubinga Neck, Rosewood Fingerboard, 1 Humbucking Pickup, 1 Sustainiac Single-coil Pickup, and Edge Tremolo - Chrome Boy",
    price: 4999.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__q-85__ha-43eff102a6573bc0__hmac-b32572f57d7e808e96089080e2e9d63152c2f264/images/guitars/JS1CR/210001F2015136/210001F2015136-body-large.jpg.auto.webp",
  },
  {
    id: 12,
    brand: "gibson",
    name: "Gibson Les Paul Standard Sunburst",
    description:
      "Solidbody Electric Guitar with Mahogany Body, Maple Top, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry Sunburst",
    price: 2499.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-5088c4477a72b52d__hmac-0df20e47ab01b82ee00cc7b083ec3936f7d4eef1/images/items/750/LPS6UBNH-large.jpg.auto.webp",
  },
  {
    id: 13,
    brand: "gibson",
    name: "Gibson SG Standard Vintage Cherry",
    description:
      "Solidbody Electric Guitar with Mahogany Body and Neck, Plek'd Rosewood Fretboard, and 2 Humbucking Pickups - Vintage Cherry",
    price: 1799.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-340bda9f117d6b93__hmac-e15828aa6c1290c85fa01a695fadf29168fc95d3/images/items/750/SG61VENH-large.jpg.auto.webp",
  },
  {
    id: 14,
    brand: "fender",
    name: "Fender Player Telecaster - TidePool",
    description:
      "Solidbody Electric Guitar with Alder Body, Maple Neck, Maple Fingerboard, and 2 Single-coil Pickups - Tidepool",
    price: 749.99,
    rating: 3,
    img:
      "https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-5a38ed4be30d6e45__hmac-cd85c2ddf44a03e50cd3b0ab745d923370f78ab8/images/items/750/TelePMTP-large.jpg.auto.webp",
  },
  {
    id: 15,
    brand: "ibanez",
    name: "Ibanez Prestige S6570SK - Sunset Burst",
    description:
      "6-string Solidbody Electric Guitar with Mahogany Body, Silky Oak Top, 5-pc Maple/Walnut Neck, Macassar Ebony Fretboard, 1 Single-coil Pickup, 2 Humbucking Pickups, and Tremolo - Sunset Burst",
    price: 1999.99,
    rating: 5,
    img:
      "https://media.sweetwater.com/api/i/f-webp__q-85__ha-3751d77c075083bf__hmac-893e63195e8dec744588918b6b56468cf19c9d3e/images/guitars/S6570SKSTB/210002F2030662/210002F2030662-body-large.jpg.auto.webp",
  },
];

export default guitarData;
