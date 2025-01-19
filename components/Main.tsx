export default function Main({ children }: { children: React.ReactNode }) {
    return (
        <div className="main">
            <div className="main__header">

            </div>
            <div className="main__body">
                {children}
            </div>
        </div>
    )
}
