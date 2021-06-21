

function OrderedTimeline(props) {
  const { data } = props;
  // array data isinya ore yang diceklis di tab table

  return (
    <ul>
      {data.map((row) => (
        <li key={row.id}>{row.name}</li>
      ))}
    </ul>
  )
}

export default OrderedTimeline;