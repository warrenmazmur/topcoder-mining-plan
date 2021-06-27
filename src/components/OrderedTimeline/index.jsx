

function OrderedTimeline(props) {
  const { data } = props;
  // array data isinya ore yang diceklis di tab table

  return (
    <ul>
      {data.map((row) => (
        <li key={row.id}>Name: {row.name}, Value: {row.value}, Time to Mine: {row.timeToMine}</li>
      ))}
    </ul>
  )
}

export default OrderedTimeline;