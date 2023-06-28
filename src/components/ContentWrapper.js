import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import AppRoutes from './Routes';

function ContentWrapper() {
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <div className="container-fluid">
                        <AppRoutes /></div>
                    <Footer />
                </div>
            </div>
        </React.Fragment>
    )
}
export default ContentWrapper;