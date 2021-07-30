import './home.scss';
import * as CryptoJS from "crypto-js"
import {useState} from "react";
import {hexToString} from "../../utils/hexToString";
import utf8 from "utf8/utf8";
import Select from "../../components/select/select";
import Input from "../../components/input/input";

function Home({mainTheme = "logo"}) {
  document.body.classList.add(mainTheme);
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [algo, setAlgo] = useState("AES");
  const algorithms = [
      {value: "AES", label: "Advanced Encryption Standard"},
      {value: "DES", label: "Data Encryption Standard"},
      {value: "TripleDES", label: "Triple Data Encryption Standard"},
      {value: "Rabbit", label: "Rabbit"},
      {value: "RC4", label: "Rivest Cipher 4"},
      {value: "RC4Drop", label: "Rivest Cipher 4 Drop"},
  ]

  let encrypt = () => {
    setResult(CryptoJS[algo].encrypt(text, key).toString());
  }

  let decrypt = () => {
      let resultUtf8;
      try{
          resultUtf8 = utf8.decode(hexToString(CryptoJS[algo].decrypt(text, key).toString()));
      }catch(e){
          resultUtf8 = "une erreur s'est produite";
      }
    setResult(resultUtf8?resultUtf8:"une erreur s'est produite");
  }

  return (
    <section id="main" className="w-full">
      <div className="flex justify-center mt-16 mb-8 w-full">
        <img alt="logo" className="w-64 logo"/>
      </div>
      <div className="flex justify-center px-2">
          <div className="container">
              <div className="grid grid-cols-2 gap-8">
                  <div className="card p-8 flex flex-col items-center">
                      <h1>Commencez à chiffrer</h1>
                      <Input name={"key"} label={"Clé de chiffrement"} value={key} onChange={v => setKey(v)}/>
                      <Select name={"algo"} className={"mt-7"} label={"Algorithme"} options={algorithms} value={algo} onChange={v => setAlgo(v)} />
                      <Input name={"text"} type={"multiline"} className={"mt-7"} label={"Texte à Chiffrer / Déchiffrer"} lines={20} value={text} onChange={v => setText(v)}/>
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
                      <h1>Résultat</h1>
                      <Input name={"result"} type={"multiline"} error={result === "une erreur s'est produite"} label={"Texte à Chiffrer / Déchiffrer"} lines={26} value={result} readOnly={true}/>
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
