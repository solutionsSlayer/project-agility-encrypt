import logo from '../../assets/images/logo.png';
import './home.scss';
import * as CryptoJS from "crypto-js"
import {useState} from "react";

function Home() {
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const [text, setText] = useState("");


  let encrypt = () => {
    setResult(CryptoJS.AES.encrypt(text, key).toString());
  }

  let decrypt = () => {
    setResult(
        hex_to_ascii(
            CryptoJS.AES.decrypt(text, key).toString()
        )
    );
  }

  function hex_to_ascii(str1)
  {
    let hex = str1.toString();
    let str = '';
    for (let n = 0; n < hex.length; n += 2) {
        str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  }

  return (
    <section id="main" className="w-full">
      <div className="flex justify-center mt-16 mb-8 w-full">
        <img src={logo} alt="logo" className="w-64"/>
      </div>
      <div className="flex justify-center px-2">
          <div className="container">
              <div className="grid grid-cols-2 gap-8">
                  <div className="card p-8 flex flex-col items-center">
                      <h1 className="title">
                          Commencez à chiffrer
                      </h1>
                      <div className="md-input">
                          <input id="key" className={key?"active":""} type="text" defaultValue={key} onChange={(v) => setKey(v.currentTarget.value)}/>
                          <label htmlFor="key">Clé de chiffrement</label>
                      </div>
                      <div className="md-input mt-4">
                          <textarea id="text" className={text?"active":""} rows={20} value={text} onChange={(v) => {setText(v.currentTarget.value)}}/>
                          <label htmlFor="text">Texte à Chiffrer / Déchiffrer</label>
                      </div>
                      <div className="flex justify-center mt-7 w-full">
                          <button onClick={async () => setText( await navigator.clipboard.readText())} className="md-button w-1/2">Coller</button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 w-full mt-7">
                          <div>
                              <button onClick={encrypt} className="md-button w-full">Chiffrer</button>
                          </div>
                          <div>
                              <button onClick={decrypt} className="md-button w-full">Déchiffrer</button>
                          </div>
                      </div>
                  </div>
                  <div className="card p-8 flex flex-col items-center">
                      <h1 className="title">
                          Résultat
                      </h1>
                      <div className="md-input mt-4">
                          <textarea id="text" className={result?"active":""} rows={22} value={result} readOnly={true} />
                          <label htmlFor="text">Résultat</label>
                      </div>
                      <div className="flex justify-center mt-7 w-full">
                          <button onClick={() => navigator.clipboard.writeText(result)} className="md-button w-1/2">Copier</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Home;
