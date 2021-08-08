import React, { Component } from "react";
import "./Home.css";
import { createShortUrl, getAllUrl } from "../../config/helper";

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
        this.renderList() ;
      }
    
      handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
      }
    
      renderList() {
        
          getAllUrl()
            .then(json => {
              setTimeout(() => {
                this.setState({
                  urlListData: json.data.lists
                });
              }, 0);
            })
            .catch(error => {
              this.setState({
                showLoading: false,
                showApiError: true,
                apiError: "Server Error"
              });
            });
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
              setTimeout(() => {
                this.setState({
                  showLoading: false,
                  showShortenUrl: true,
                  shortenUrl: json.data.shortId
                });
              }, 0);
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
                  <span class="glyphicon glyphicon-link"></span>
                  <h1>URL Shortener</h1>
                  <h4>http://www.pauloluyege.com</h4>
    
                  <div className="row">
    
    
                    <div className="col-lg-12">
                      <div>
                        <h5> Original Url</h5>
                      </div>
                      <div>
                        Ex:{" "}
                        <a target="_blank" href={this.state.exUrl}>
                          {this.state.exUrl}
                        </a>
                      </div>
    
                      <input id="url-field" class="form-control"
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
    
                      <span class="input-group-btn">
                        {this.renderButton()}
                      </span>
    
                      {this.state.showApiError && (
                        <div className="shorten-error">{this.state.apiError}</div>
                      )}
                      {this.state.showShortenUrl && (
                        <div className="shorten-title">
                          Shortened Url is  {` `}
                          <a target="_blank" href={this.state.baseUrl +'/'+ this.state.shortenUrl}>
                          {this.state.exShortUrl +'/'+ this.state.shortenUrl}
                          </a>
                        </div>
                      )}
                      <div className="shorten-imp">
                        [* Here base url has the default value{" "}
                        <a target="_blank" href={this.state.exShortUrl}>
                          {this.state.exShortUrl}
                        </a>{" "}
              .This will change based on domain name]
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
