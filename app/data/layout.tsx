import './style/layout.scss';

const DataRoot = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="data-layout">
            <p>This is the layout</p>
            {children}
        </div>
    )
}

export default DataRoot;