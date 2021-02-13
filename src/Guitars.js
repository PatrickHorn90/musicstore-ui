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
              price={2000}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-b90caf6fac872b85__hmac-5600b4cba0315323ec5ed60cab55d7f522e9bc89/images/guitars/TeleHHFMIBC/ICF20001957/ICF20001957-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071991"
              name="Ibanez Steve Vai Signature - Onyx Black"
              price={3499}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-953fba0f96f67f96__hmac-08e25d97e8bc350ff14967392d71307f676f8ee4/images/items/750/PIA3761XB-large.jpg.auto.webp"
            />
            <Guitar
              id="02071992"
              name="Gibson Les Paul Standard - Gold Top"
              price={2499}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-ea934ac5ae738f6a__hmac-ce702f8f8c4e36836fe705f819f1a5a048c3d196/images/items/750/LPS5PGTNH-large.jpg.auto.webp"
            />
            <Guitar
              id="02071993"
              name="PRS SE Custom 24 - Black Gold Sunburst"
              price={829}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-fdb262a4aa8d74aa__hmac-255110e32a918fd696757d2e6e86be31cd70fb68/images/guitars/SECU24BGSV/CTIC38879/CTIC38879-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Fender American Professional - Mystic Surf Green"
              price={1499}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-6bde3cb9e49834e3__hmac-5442fc3e2ae66504cd5a05f0663106604425e541/images/guitars/StratAP2MSG/US20084798/US20084798-body-large.jpg.auto.webp"
            />
          </div>
          <div className="guitars__row">
            <Guitar
              id="02071994"
              name="Kramer Snake Sabo Baretta Outfit - Green"
              price={2499}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-77021fe26df20621__hmac-0d8c074cd1dca15a00c0f5b837ff5c6ecb181f2f/images/items/750/KBVDSSNBF-large.jpg.auto.webp"
            />
            <Guitar
              id="02071995"
              name="Fender Player Strat - Buttercream"
              price={749}
              rating={3}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-35f02ee6c0e30264__hmac-0b3b8cbd385f3e8123f74b2e31e88608c75ed1f7/images/items/750/StratPMBCR-large.jpg.auto.webp"
            />
            <Guitar
              id="02071996"
              name="PRS SE Standard 24 - Translucent Blue"
              price={579}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-new__w-300__h-450__bg-ffffff__q-85__ha-9136940a0bb5e899__hmac-6cd7cc67981ad9655b9284d2003dc61c4ef99e16/images/items/750/SEStd24TBG-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Danelectro 59X12 12-String"
              price={569}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-99e18c26c978bb27__hmac-4d54e5e5bc51564c30d818419af025f21a40dd49/images/guitars/59X12VC/084096/084096-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Gibson Explorer - Antique Natural"
              price={1699}
              rating={4}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-45cc341d14def6f5__hmac-757f1458cc24743d39b81e0dfc0ddbcfc49630bf/images/items/750/DSXANCH1-large.jpg.auto.webp"
            />
          </div>
          <div className="guitars__row">
            <Guitar
              id="0207199"
              name="Ibanez Joe Satriani Signature"
              price={4999}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__q-85__ha-43eff102a6573bc0__hmac-b32572f57d7e808e96089080e2e9d63152c2f264/images/guitars/JS1CR/210001F2015136/210001F2015136-body-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Gibson Les Paul Standard Sunburst"
              price={2499}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-5088c4477a72b52d__hmac-0df20e47ab01b82ee00cc7b083ec3936f7d4eef1/images/items/750/LPS6UBNH-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Gibson SG Standard Vintage Cherry"
              price={1799}
              rating={5}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-340bda9f117d6b93__hmac-e15828aa6c1290c85fa01a695fadf29168fc95d3/images/items/750/SG61VENH-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Fender Player Telecaster"
              price={749}
              rating={3}
              img="https://media.sweetwater.com/api/i/f-webp__b-original__w-300__h-450__bg-ffffff__q-85__ha-5a38ed4be30d6e45__hmac-cd85c2ddf44a03e50cd3b0ab745d923370f78ab8/images/items/750/TelePMTP-large.jpg.auto.webp"
            />
            <Guitar
              id="02071997"
              name="Ibanez Prestige S6570SK - Sunset Burst"
              price={1999}
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
