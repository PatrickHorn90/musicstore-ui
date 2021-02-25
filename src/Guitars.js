import React from "react";
import Guitar from "./Guitar";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./Guitars.css";

const Guitars = () => {
  return (
    <div className="guitars__page">
      <div className="guitars__header">
        <h1>Solidbody Guitars</h1>
        <h4>
          Read our <strong>Electric Guitars</strong> Buying Guide
        </h4>
      </div>
      <div className="guitars__body">
        <div className="filters__container">
          <h3>Refine Your Search</h3>
          <h2>Brand</h2>
          <div className="filters__body">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Danelectro"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Fender"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Gibson"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Ibanez"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="Kramer"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="PRS"
              />
            </FormGroup>
          </div>
          <h2>Price Range</h2>
          <div className="filters__body">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="$0 - $1000"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="$1000 - $2000"
              />
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="$2000 +"
              />
            </FormGroup>
          </div>
        </div>
        <div className="guitars__container">
          <div className="guitars__row">
            <Guitar
              id="02071990"
              name="Fender Special Edition Telecaster Black Cherry Burst"
              description="Solidbody Electric Guitar with Mahogany Body, Flame Maple Top, Mahogany Neck, Indian Laurel Fingerboard, and 2 Humbucking Pickups - Black Cherry Burst"
              price={2000.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-b90caf6fac872b85__hmac-5600b4cba0315323ec5ed60cab55d7f522e9bc89/images/guitars/TeleHHFMIBC/ICF20001957/ICF20001957-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071991"
              name="Ibanez Steve Vai Signature - Onyx Black"
              description="Solidbody Electric Guitar with Alder Body, Maple/Walnut Neck, Rosewood Fingerboard, 2 Humbucking Pickups, 1 Single-coil Pickup, and Edge Tremolo - Onyx Black"
              price={3499.99}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-953fba0f96f67f96__hmac-08e25d97e8bc350ff14967392d71307f676f8ee4/images/items/750/PIA3761XB-large.jpg.auto.webp"
            />
            <Guitar
              id="02071992"
              name="Gibson Les Paul Standard - Gold Top"
              description="Solidbody Electric Guitar with Mahogany Body, Maple Top, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Gold Top"
              price={2499.99}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-ea934ac5ae738f6a__hmac-ce702f8f8c4e36836fe705f819f1a5a048c3d196/images/items/750/LPS5PGTNH-large.jpg.auto.webp"
            />
            <Guitar
              id="02071993"
              name="PRS SE Custom 24 - Black Gold Sunburst"
              description="Solidbody Electric Guitar with Mahogany Body, Maple Top, Maple Neck, Rosewood Fretboard, 2 Humbucking Pickups, and Tremolo - Black Gold Sunburst"
              price={829.99}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-fdb262a4aa8d74aa__hmac-255110e32a918fd696757d2e6e86be31cd70fb68/images/guitars/SECU24BGSV/CTIC38879/CTIC38879-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071994"
              name="Fender American Professional - Mystic Surf Green"
              description="Solidbody Electric Guitar with Alder Body, Maple Neck and Fingerboard, and 3 Single-coil Pickups - Mystic Surf Green"
              price={1499.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-6bde3cb9e49834e3__hmac-5442fc3e2ae66504cd5a05f0663106604425e541/images/guitars/StratAP2MSG/US20084798/US20084798-body-large.jpg.auto.webp"
            />
          </div>
          <div className="guitars__row">
            <Guitar
              id="02071995"
              name="Kramer Snake Sabo Baretta Outfit - Green"
              description="Solidbody Electric Guitar with Alder Body, Maple Neck, Laurel Fingerboard, 1 Humbucking Pickup, and Floyd Rose Tremolo with D-Tuna - Green"
              price={2499.99}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-77021fe26df20621__hmac-0d8c074cd1dca15a00c0f5b837ff5c6ecb181f2f/images/items/750/KBVDSSNBF-large.jpg.auto.webp"
            />
            <Guitar
              id="02071996"
              name="Fender Player Strat - Buttercream"
              description="Solidbody Electric Guitar with Alder Body, Maple Neck, Maple Fingerboard, and 3 Single-coil Pickups - Buttercream"
              price={749.99}
              rating={3}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-35f02ee6c0e30264__hmac-0b3b8cbd385f3e8123f74b2e31e88608c75ed1f7/images/items/750/StratPMBCR-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="PRS SE Standard 24 - Translucent Blue"
              description="Solidbody Electric Guitar with Mahogany Body, Maple Neck, Rosewood Fingerboard, 2 Humbucking Pickups, and Vibrato Bridge - Translucent Blue"
              price={579.99}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-9136940a0bb5e899__hmac-6cd7cc67981ad9655b9284d2003dc61c4ef99e16/images/items/750/SEStd24TBG-large.jpg.auto.webp"
            />
            <Guitar
              id="02071998"
              name="Danelectro 59X12 12-String"
              description="12-string Semi-hollowbody Electric Guitar with Spruce Body, Hardboard Top and Back, Maple Neck, Pau Ferro Fingerboard, 1 Single-coil Pickup, 1 Humbucking Pickup - Vintage Cream"
              price={569.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-99e18c26c978bb27__hmac-4d54e5e5bc51564c30d818419af025f21a40dd49/images/guitars/59X12VC/084096/084096-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071999"
              name="Gibson Explorer - Antique Natural"
              description="Solidbody Electric Guitar with Mahogany Body and Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Antique Natural"
              price={1699.99}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-45cc341d14def6f5__hmac-757f1458cc24743d39b81e0dfc0ddbcfc49630bf/images/items/750/DSXANCH1-large.jpg.auto.webp"
            />
          </div>
          <div className="guitars__row">
            <Guitar
              id="02072000"
              name="Ibanez Joe Satriani Signature"
              description="Solidbody Electric Guitar with Alder Body, Maple/Bubinga Neck, Rosewood Fingerboard, 1 Humbucking Pickup, 1 Sustainiac Single-coil Pickup, and Edge Tremolo - Chrome Boy"
              price={4999.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-43eff102a6573bc0__hmac-b32572f57d7e808e96089080e2e9d63152c2f264/images/guitars/JS1CR/210001F2015136/210001F2015136-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02072001"
              name="Gibson Les Paul Standard Sunburst"
              description="Solidbody Electric Guitar with Mahogany Body, Maple Top, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry Sunburst"
              price={2499.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-5088c4477a72b52d__hmac-0df20e47ab01b82ee00cc7b083ec3936f7d4eef1/images/items/750/LPS6UBNH-large.jpg.auto.webp"
            />
            <Guitar
              id="02072002"
              name="Gibson SG Standard Vintage Cherry"
              description="Solidbody Electric Guitar with Mahogany Body and Neck, Plek'd Rosewood Fretboard, and 2 Humbucking Pickups - Vintage Cherry"
              price={1799.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-340bda9f117d6b93__hmac-e15828aa6c1290c85fa01a695fadf29168fc95d3/images/items/750/SG61VENH-large.jpg.auto.webp"
            />
            <Guitar
              id="02072003"
              name="Fender Player Telecaster - TidePool"
              description="Solidbody Electric Guitar with Alder Body, Maple Neck, Maple Fingerboard, and 2 Single-coil Pickups - Tidepool"
              price={749.99}
              rating={3}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-5a38ed4be30d6e45__hmac-cd85c2ddf44a03e50cd3b0ab745d923370f78ab8/images/items/750/TelePMTP-large.jpg.auto.webp"
            />
            <Guitar
              id="02072004"
              name="Ibanez Prestige S6570SK - Sunset Burst"
              description="6-string Solidbody Electric Guitar with Mahogany Body, Silky Oak Top, 5-pc Maple/Walnut Neck, Macassar Ebony Fretboard, 1 Single-coil Pickup, 2 Humbucking Pickups, and Tremolo - Sunset Burst"
              price={1999.99}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-3751d77c075083bf__hmac-893e63195e8dec744588918b6b56468cf19c9d3e/images/guitars/S6570SKSTB/210002F2030662/210002F2030662-body-large.jpg.auto.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guitars;
