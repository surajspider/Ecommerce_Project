import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className='footer'>
                <div className='footerflex'>
                    <div className='foot-one foot'>
                        <h4 style={{ textDecoration: "underline" }}>Follow US</h4>
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPGcgaWQ9ImZhY2Vib29rIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTgiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OCIgZD0iTTI4LjM0NCwwSDEuNjU0QTEuNjU2LDEuNjU2LDAsMCwwLDAsMS42NTZWMjguMzQ1QTEuNjU2LDEuNjU2LDAsMCwwLDEuNjU2LDMwSDI4LjM0NEExLjY1NiwxLjY1NiwwLDAsMCwzMCwyOC4zNDVoMFYxLjY1NUExLjY1NiwxLjY1NiwwLDAsMCwyOC4zNDQsMFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBmaWxsPSIjNDI2N2IyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE0OTkiIGRhdGEtbmFtZT0iUGF0aCAyMTQ5OSIgZD0iTTIxNS40NTEsMTAyLjRWOTAuOTc2aDMuODVsLjU3Ny00LjQ3aC00LjQyN1Y4My42NTljMC0xLjI5MS4zNTgtMi4xNzEsMi4yMS0yLjE3MWgyLjM0N1Y3Ny41YTMxLjU0OCwzMS41NDgsMCwwLDAtMy40MzktLjE3NmMtMy40LDAtNS43MzIsMi4wNzctNS43MzIsNS44OTJ2My4yOUgyMDd2NC40N2gzLjgzNlYxMDIuNFptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk0LjcyMyAtNzIuMzk3KSIgZmlsbD0iI2ZmZiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="notfound" />
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9ImxpbmtlZElOIiBkPSJNMjMuNzUsMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwwLDAsNi4yNXYxNy41QTYuMjUxLDYuMjUxLDAsMCwwLDYuMjUsMzBoMTcuNUE2LjI1LDYuMjUsMCwwLDAsMzAsMjMuNzVWNi4yNUE2LjI1LDYuMjUsMCwwLDAsMjMuNzUsMFpNMTAsMjMuNzVINi4yNVYxMEgxMFpNOC4xMjUsOC40MTVBMi4yMDUsMi4yMDUsMCwxLDEsMTAuMzEzLDYuMjEsMi4yLDIuMiwwLDAsMSw4LjEyNSw4LjQxNVpNMjUsMjMuNzVIMjEuMjVWMTYuNzQ1YzAtNC4yMS01LTMuODkxLTUsMFYyMy43NUgxMi41VjEwaDMuNzV2Mi4yMDZDMTcuOTk1LDguOTc0LDI1LDguNzM1LDI1LDE1LjNaIiBmaWxsPSIjMDA3N2I3Ii8+DQo8L3N2Zz4NCg==" alt='notfound' />
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgdmlld0JveD0iMCAwIDMwIDMwIj4NCiAgPHBhdGggaWQ9InlvdXR1YmUiIGQ9Ik0xMi41LDExLjY2Nmw2LjY2NiwzLjMyN0wxMi41LDE4LjMzNFpNMzAsNi4yNXYxNy41QTYuMjUsNi4yNSwwLDAsMSwyMy43NSwzMEg2LjI1QTYuMjUxLDYuMjUxLDAsMCwxLDAsMjMuNzVWNi4yNUE2LjI1MSw2LjI1MSwwLDAsMSw2LjI1LDBoMTcuNUE2LjI1LDYuMjUsMCwwLDEsMzAsNi4yNVpNMjUsMTVjLS4wMjUtNS4xNTQtLjQtNy4xMjUtMy42NTQtNy4zNDYtMy0uMjA1LTkuNjkyLS4yLTEyLjY5MSwwQzUuNDA3LDcuODc1LDUuMDI1LDkuODM3LDUsMTVjLjAyNSw1LjE1NC40LDcuMTI1LDMuNjU0LDcuMzQ2LDMsLjIsOS42ODguMiwxMi42OTEsMEMyNC41OTIsMjIuMTI1LDI0Ljk3NSwyMC4xNjIsMjUsMTVaIiBmaWxsPSJyZWQiLz4NCjwvc3ZnPg0K" alt="notfound" />
                    </div>
                    <hr className='marginnonehr'></hr>
                    <div className='foot-one_sub'>
                        <h3 style={{ textDecoration: "underline" }} className='hoo'>Contact Us</h3>
                        <img className='iconfooter' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyNi45OTgiIHZpZXdCb3g9IjAgMCAyNyAyNi45OTgiPg0KICA8ZyBpZD0iY2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDMpIj4NCiAgICA8ZyBpZD0iXzAwMy0tLUNhbGwiIGRhdGEtbmFtZT0iMDAzLS0tQ2FsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMDAzKSI+DQogICAgICA8cGF0aCBpZD0iU2hhcGUiIGQ9Ik0xMi4xNzYsMTUuODQ5YTEwLjksMTAuOSwwLDAsMS0zLjI5LTYuMTg2LjkyNS45MjUsMCwwLDEsLjI2Ni0uNzc0TDExLjIzOCw2LjhhLjkzMS45MzEsMCwwLDAsLjEzMS0xLjE1Mkw4LjA0OS41QS45MzEuOTMxLDAsMCwwLDYuODQzLjE1OGwtNS4zMywyLjUxQS45MjYuOTI2LDAsMCwwLDEsMy41OTNjLjI3OSwyLjY1MywxLjQzNiw5LjE3NSw3Ljg0NSwxNS41ODRzMTIuOTMsNy41NjYsMTUuNTg0LDcuODQ1YS45MjYuOTI2LDAsMCwwLC45MjUtLjUxMmwyLjUxLTUuMzNhLjkzMS45MzEsMCwwLDAtLjMzNy0xLjJsLTUuMTU1LTMuMzE5YS45MzEuOTMxLDAsMCwwLTEuMTUyLjEzbC0yLjA4NCwyLjA4NWEuOTI1LjkyNSwwLDAsMS0uNzc0LjI2NiwxMC45LDEwLjksMCwwLDEtNi4xODYtMy4yOVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjk5NyAtMC4wMjkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMiIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTM3LjgyNywyMC44NjJhMS4wMzQsMS4wMzQsMCwwLDEtMS4wMzQtMS4wMzQsNy43NjcsNy43NjcsMCwwLDAtNy43NTgtNy43NTgsMS4wMzQsMS4wMzQsMCwwLDEsMC0yLjA2OSw5LjgzOCw5LjgzOCwwLDAsMSw5LjgyNyw5LjgyN0ExLjAzNCwxLjAzNCwwLDAsMSwzNy44MjcsMjAuODYyWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LjIyMyAtNS42MzkpIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgICA8cGF0aCBpZD0iU2hhcGUtMyIgZGF0YS1uYW1lPSJTaGFwZSIgZD0iTTQzLDE2LjAzNEExLjAzNCwxLjAzNCwwLDAsMSw0MS45NjUsMTVhMTIuOTQ1LDEyLjk0NSwwLDAsMC0xMi45My0xMi45MywxLjAzNCwxLjAzNCwwLDAsMSwwLTIuMDY5LDE1LjAxNiwxNS4wMTYsMCwwLDEsMTUsMTVBMS4wMzQsMS4wMzQsMCwwLDEsNDMsMTYuMDM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3LjAzNCkiIGZpbGw9IiM0MjQyNDIiLz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg0K" alt="notfound" />
                        <span>+91 - 9874561230</span><br /><br />
                        <img className='iconfooter footimage' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIyMy42NjUiIHZpZXdCb3g9IjAgMCAyNyAyMy42NjUiPg0KICA8ZyBpZD0ibWVzc2FnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzEuNjIyKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDMiIGRhdGEtbmFtZT0iUGF0aCAyMTUwMyIgZD0iTTE4LjY3LDMxLjYyMkgzLjA1M0EzLjA1NywzLjA1NywwLDAsMCwwLDM0LjY3NVY0OC4zNkEuNzkyLjc5MiwwLDAsMCwxLjI1LDQ5TDUuNiw0NS45YTIuMTI5LDIuMTI5LDAsMCwxLDEuMjQyLS40aDkuNTY1YTMuMDU3LDMuMDU3LDAsMCwwLDMuMDUzLTMuMDUzVjMyLjQxM0EuNzkxLjc5MSwwLDAsMCwxOC42NywzMS42MjJaTTE0LjgyNyw0MS4ySDUuNjg4YS43OTEuNzkxLDAsMSwxLDAtMS41ODJoOS4xMzlhLjc5MS43OTEsMCwxLDEsMCwxLjU4MlptMC0zLjY5MUg1LjY4OGEuNzkxLjc5MSwwLDEsMSwwLTEuNTgyaDkuMTM5YS43OTEuNzkxLDAsMSwxLDAsMS41ODJaIiBmaWxsPSIjNDI0MjQyIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjE1MDQiIGRhdGEtbmFtZT0iUGF0aCAyMTUwNCIgZD0iTTE2Mi40MzEsMTUxLjAxNlYxNjQuN2EuNzkyLjc5MiwwLDAsMS0xLjI1LjY0NGwtNC4zNDktMy4xYTIuMTI5LDIuMTI5LDAsMCwwLTEuMjQyLS40aC05LjU2NWEzLjA1NywzLjA1NywwLDAsMS0zLjA1My0zLjA1NHYtMS41aDguODY4YTQuNjQsNC42NCwwLDAsMCw0LjYzNS00LjYzNXYtNC42OTNoMi45QTMuMDU3LDMuMDU3LDAsMCwxLDE2Mi40MzEsMTUxLjAxNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzUuNDMxIC0xMTAuMjA1KSIgZmlsbD0iIzQyNDI0MiIvPg0KICA8L2c+DQo8L3N2Zz4NCg==" alt="notfound" />
                        <span><a href="mailto:someone@example.com">Send email</a></span>
                    </div>
                    <hr className='marginnonehr'></hr>
                    <div className='foot-two foot'>
                        <div className='quicktitle'>
                            <h3 style={{ textDecoration: "underline", margin: 0 }}>Quick Links</h3>
                        </div>
                        <div className='links_foot'>
                            <h5><Link to="/all" style={{ textDecoration: "none", color: "beige", margin: 0 }}>All</Link></h5>
                            <h5><Link to="/mobiles" style={{ textDecoration: "none", color: "beige", margin: 0 }}>Mobiles</Link></h5>
                            <h5><Link to="/electronics" style={{ textDecoration: "none", color: "beige", margin: 0 }}>Electronics</Link></h5>
                        </div>

                        <div className='links2_foot'>
                            <h5><Link to="/iphone" style={{ textDecoration: "none", color: "beige", margin: 0 }}>Iphone</Link></h5>
                            <h5><Link to="/watches" style={{ textDecoration: "none", color: "beige", margin: 0 }}>Watches</Link></h5>
                            <h5><Link to="/" style={{ textDecoration: "none", color: "beige", margin: 0 }}>Home</Link></h5>
                        </div>
                    </div>
                    <hr className='marginnonehr'></hr>
                    <div className='foot-three foot'>
                        <h4>Copyright©2023</h4>
                        <h4>About Us</h4>
                    </div>
                </div>
            </footer >
        </div>
    )
}

export default Footer