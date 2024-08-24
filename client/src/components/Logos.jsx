import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

const Logos = () => {
  return (
    <div className="flex gap-4">
      {' '}
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
}

export default Logos
