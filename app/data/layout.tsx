import './style/layout.scss';
import Nav from './components/nav';


const DataRoot = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="data-layout">
            <Nav />
            {children}
        </div>
    )
}

export default DataRoot;