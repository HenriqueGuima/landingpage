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
              Uma nova cara... a qualidade de sempre!
            </h1>
            <div className="sticker" />
            <div className="container-fluid contact-width">
              <div className="row contactos ">
                <div className="d-flex justify-content-between">
                  <div class="col-md-12 hidden">
                    <div className="col-md-4 morada-esq">
                      <span style={{ fontSize: "2.5rem" }}>Armazém</span>{" "}
                      <div className="morada">
                        Rua da Agrela, nr 153
                        <div>4820-403 Fafe</div>
                      </div>
                    </div>
                    <div className="col-md-4 morada-dir">
                      <span style={{ fontSize: "2.5rem" }}>Fábrica</span>{" "}
                      <div className="morada">
                        Zona Industrial do Socorro, Lote nº 17
                        <div>4820-570 Quinchães</div>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 text-center show">
                    <div className="morada-esq">
                      <span style={{ fontSize: "2.5rem" }}>Armazém</span>{" "}
                      <div className="morada">
                        Rua da Agrela, nr 153
                        <div>4820-403 Fafe</div>
                      </div>
                    </div>
                    <div className="morada-dir">
                      <span style={{ fontSize: "2.5rem" }}>Fábrica</span>{" "}
                      <div className="morada">
                        Zona Industrial do Socorro, Lote nº 17
                        <div>4820-570 Quinchães</div>{" "}
                      </div>
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
