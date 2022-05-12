import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 coluna">
            {" "}
            <h1 className="text-center frase">
              Uma nova cara, a qualidade de sempre!
            </h1>
            <div className="sticker " />
            <div className="container-fluid">
              <div className="row contactos">
                <div className="col-md-12 d-flex justify-content-between">
                  <div className="col-md-3">
                    <span>ARMAZÉM</span>{" "}
                    <div>
                      Rua da Agrela, Bouças
                      <div> Apartado 278, 4824-909 Fafe</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <span>FÁBRICA</span>{" "}
                    <div>
                      Rua da Agrela<div>Apartado 128, 4820-403 Fafe</div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
