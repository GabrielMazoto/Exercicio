export function Exercicio1() {
  return (
    <div className="container">
      <div className="row justify-content-center d-flex mt-5">
        <div className="col-md-3">
          <button type="button" className="btn-exercicio btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Exercicio 1
          </button>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">
            Exercicio 2
          </button>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">
            Exercicio 3
          </button>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop4">
            Exercicio 4
          </button>
        </div>
    </div>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Exercicio 1</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Option 1
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Option 2
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                  <button className="btn btn-primary" data-bs-target="#staticBackdrop2" data-bs-toggle="modal" data-bs-dismiss="modal">Avançar</button>
                </div>
              </div>
            </div>
    </div>
    <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Exercicio 2</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                     Option 3
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                      Option 4
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                <button className="btn btn-primary" data-bs-target="#staticBackdrop" data-bs-toggle="modal" data-bs-dismiss="modal">Voltar</button>
                  <button className="btn btn-primary" data-bs-target="#staticBackdrop3" data-bs-toggle="modal" data-bs-dismiss="modal">Avançar</button>
                </div>
              </div>
            </div>
    </div>
    <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Exercicio 3</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Option 5
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                     Option 6
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                <button className="btn btn-primary" data-bs-target="#staticBackdrop2" data-bs-toggle="modal" data-bs-dismiss="modal">Voltar</button>
                  <button className="btn btn-primary" data-bs-target="#staticBackdrop4" data-bs-toggle="modal" data-bs-dismiss="modal">Avançar</button>
                </div>
              </div>
            </div>
    </div>
    <div className="modal fade" id="staticBackdrop4" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Exercicio 4</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Option 7
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                     Option 8
                    </label>
                  </div>
                </div>
                <div className="modal-footer">
                <button className="btn btn-primary" data-bs-target="#staticBackdrop3" data-bs-toggle="modal" data-bs-dismiss="modal">Voltar</button>
                  <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Avançar</button>
                </div>
              </div>
            </div>
    </div>
  </div>
  
    )
}