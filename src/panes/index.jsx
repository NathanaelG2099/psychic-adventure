import TestComponent from './TestComponent'
import SplitPane from './SplitPane'
import Camera from './Camera'

const panes = {
  test: { title: 'Test', Component: TestComponent },
  camera: {title: 'Camera', Component: Camera },
  vSplit: { title: 'Split Vertically', Component: (props) => (<SplitPane {...props} direction='row' />) },
  hSplit: { title: 'Split Horizontally', Component: (props) => (<SplitPane {...props} />) }
}

export default panes
