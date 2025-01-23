export default function Preloader() {
    return (
        <>

            <div id="preloader" className="preloader">
                <div className="animation-preloader">
                    <div className="spinner">
                    </div>
                    <div className="txt-loading">
                        <span data-text-preloader="I" className="letters-loading">
                            B
                        </span>
                        <span data-text-preloader="N" className="letters-loading">
                            M
                        </span>
                        <span data-text-preloader="F" className="letters-loading">
                            M
                        </span>
                        <span data-text-preloader="O" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="T" className="letters-loading">
                            T
                        </span>
                        <span data-text-preloader="E" className="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="K" className="letters-loading">
                            R
                        </span>
                        <span data-text-preloader="s" className="letters-loading">
                            S
                        </span>
                    </div>
                    <p className="text-center">Loading</p>
                </div>
                <div className="loader">
                    <div className="row">
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-left">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                        <div className="col-3 loader-section section-right">
                            <div className="bg" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
