import React, { Component } from "react";
import "./Home.css";
import { createShortUrl, getAllUrl } from "../../config/helper";
import DataList from "./../DataList";
import constants from "../../config/constants";
class Home extends Component {
    constructor() {
        super();
        this.state = {
            showShortenUrl: false,
            shortenUrl: "",
            originalUrl: "",
            baseUrl: "",
            clickSubmit: true,
            showError: false,
            apiError: "",
            showApiError: false,
            showLoading: false,
            showListLoading: false,
            urlListData: [],
            exUrl:
                "https://www.linkedin.com/company/indicina-africa/?originalSubdomain=ng",
            exShortUrl: constants.baseUrl
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        getAllUrl().then((res) => {
            const list = res.data.urls.map((item, id) => ({ id, ...item }))
            this.setState({
                urlListData: list,
                showListLoading: true
            })
        })
    }
    componentDidUpdate(prevProps, nextProps) {
        if (prevProps !== this.props) {
            getAllUrl().then((res) => {
                const list = res.data.urls.map((item, id) => ({ id, ...item }))
                this.setState({
                    urlListData: nextProps.list,
                    showListLoading: true
                })
            })

        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit() {
        this.setState({ clickSubmit: true, showApiError: false });
        if (this.state.clickSubmit && this.state.originalUrl) {
            this.setState({ showLoading: true, showShortenUrl: false });
            let reqObj = {
                url: this.state.originalUrl
            };
            createShortUrl(reqObj)
                .then(json => {
                    this.setState({
                        showLoading: false,
                        showShortenUrl: true,
                        shortenUrl: json.data.shortId
                    });
                })
                .catch(error => {
                    this.setState({
                        showLoading: false,
                        showApiError: true,
                        apiError: "Server Error"
                    });
                });
        } else {
            this.setState({ showError: true });
        }
    }
    renderButton() {
        if (!this.state.showLoading) {
            return (
                <button className="btn btn-shorten" type="button" onClick={this.handleSubmit}>SHORTEN</button>
            );
        } else {
            return (
                <div className="loader">
                    <div className="preloader-wrapper small active">
                        <div className="spinner-layer spinner-green-only">
                            <div className="circle-clipper left">
                                <div className="circle" />
                            </div>
                            <div className="gap-patch">
                                <div className="circle" />
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    render() {
        return (

            <div className="landing">
                <div className="site-wrapper">
                    <div className="site-wrapper-inner">
                        <div className="main-container">
                            <div className="inner cover"></div>
                            <span className="glyphicon glyphicon-link"></span>
                            <h1>URL Shortener</h1>
                            <h4>http://www.pauloluyege.com</h4>

                            <div className="row">

                                <div className="col-lg-12">
                                    <div>
                                        <h5> Original Url</h5>
                                    </div>
                                    <div>
                                        Ex:{" "}
                                        <a target="_blank" rel="noreferrer" href={this.state.exUrl}>
                                            {this.state.exUrl}
                                        </a>
                                    </div>

                                    <input id="url-field" className="form-control"
                                        type="text"
                                        name="originalUrl"
                                        field="originalUrl"
                                        placeholder="Paste your link.."
                                        value={this.state.originalUrl}
                                        onChange={this.handleUserInput.bind(this)}
                                    />


                                    {this.state.showError && (
                                        <div className="formError">Original Url is required</div>
                                    )}

                                </div>

                                <div className="col-lg-12">

                                    <span className="input-group-btn">
                                        {this.renderButton()}
                                    </span>

                                    {this.state.showApiError && (
                                        <div className="shorten-error">{this.state.apiError}</div>
                                    )}
                                    {this.state.showShortenUrl && (
                                        <div className="shorten-title">
                                            Shortened Url is  {` `}
                                            <a target="_blank" rel="noreferrer" href={this.state.baseUrl + '/' + this.state.shortenUrl}>
                                                {this.state.exShortUrl + '/' + this.state.shortenUrl}
                                            </a>
                                        </div>
                                    )}
                                    <div className="shorten-imp">
                                        [* Here base url has the default value{" "}
                                        <a target="_blank" rel="noreferrer" href={this.state.exShortUrl}>
                                            {this.state.exShortUrl}
                                        </a>{" "}
                                              .This will change based on domain name]


                                                {this.state.showListLoading && (
                                            <DataList data={this.state.urlListData} />
                                        )}

                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
