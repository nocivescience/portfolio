export function FormData(props) {
  return (
    <>
      <div className="container">
        <div className='row'>
          <div className="col-md-4 offset-md-4">
            <form className="w-50">
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Nombre: {props.name}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Tu nombre es privado.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Apellido: {props.lastname}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Relevancia
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Envia: {props.name}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
