function DataTable({ columns, records, emptyMessage = 'No records to display.', rowKey = 'id', caption }) {
  if (records.length === 0) return <div className="table-empty card border-0" role="status">{emptyMessage}</div>

  return (
    <div className="table-scroll table-responsive">
      <table className="data-table table table-hover align-middle mb-0">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead><tr>{columns.map(({ key, header }) => <th scope="col" key={key}>{header}</th>)}</tr></thead>
        <tbody>
          {records.map((record) => (
            <tr key={record[rowKey]}>
              {columns.map(({ key, render }) => <td key={key}>{render ? render(record[key], record) : record[key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
