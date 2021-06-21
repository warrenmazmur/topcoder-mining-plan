import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const {children, value, index} = props

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box>{children}</Box>
      )}
    </div>
  )
}

export default TabPanel;