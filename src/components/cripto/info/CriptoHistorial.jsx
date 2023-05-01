const CriptoHistorial = ({historial}) => {
  return (
    <div className='history'>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            historial.map(({ time, date, priceUsd }) => (
              <tr key={time}>
                <td className='label'>{new Date(date).toDateString()}</td>
                <td className='price'>{parseFloat(priceUsd).toFixed(3)}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default CriptoHistorial