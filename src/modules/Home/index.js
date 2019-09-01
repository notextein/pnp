import React from 'react';
import './index.css';
import pru from 'pru';
import utils from 'utils';

import Dashboard from '../_Dashboard';

import { setUserName, setUserToken } from 'ducks/actions';
import globalState from 'ducks/store';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount = () => {
        console.log('Home page mounted');
        console.log(pru.getUserInfo());
    }

    componentWillUnmount = () => {
        console.log('Home page removed');
    }

    showConversation = e => {
        e.preventDefault();
        this.props.history.push('/conversation');
        utils.goToTop();
    }

    showCustomerList = e => {
        e.preventDefault();
        this.props.history.push('/customers');
        utils.goToTop();
    }

    showProduct = e => {
        e.preventDefault();
        alert('Not yet implemented.');
    }

    render() {
        let { history } = this.props;

        const token = {
            "tokens": {
                "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4di1aQno0bkpvdlRtbS1QU0VxOFRzaGFZNmxvWFZmTGFUc0l2VWxDazZ3In0.eyJqdGkiOiJlNDI1ODM3Yy0zMzE2LTQ5NTQtYjQ2MS1lZTFmZmQ2MWY5OGUiLCJleHAiOjE1NjcyMzYxNjcsIm5iZiI6MCwiaWF0IjoxNTY3MjMyNTY3LCJpc3MiOiJodHRwczovL2Vwb3Mtc3NvLXVhdC5pbnRyYW5ldC5hc2lhL2F1dGgvcmVhbG1zL0VQT1MtVUFUIiwiYXVkIjoiZXBvc3BoIiwic3ViIjoiMDJjOWM5NmUtMjQxNi00YTAxLTkzNjAtMjRiMmQ5NWUyY2MxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiZXBvc3BoIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiOGU4YTU3ODgtNjFiOS00MGJjLTgyOWEtOTI2Yjg3ZWVlY2EwIiwiYWNyIjoiMSIsImNsaWVudF9zZXNzaW9uIjoiYWE2NTgzZDgtNGUyZS00ODBiLTk4NjgtYmRhZDQ2OWE4NTEzIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHBzOi8vZXBvcy11YXQucHJ1bGlmZXVrLmNvbS5waCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50Iiwidmlldy1wcm9maWxlIl19fSwibmFtZSI6IjcwMDAxNjA1IDcwMDAxNjA1IDcwMDAxNjA1IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiNzAwMDE2MDUiLCJnaXZlbl9uYW1lIjoiNzAwMDE2MDUgNzAwMDE2MDUiLCJmYW1pbHlfbmFtZSI6IjcwMDAxNjA1In0.czpMOvI1PHs1vrBTXid02RHSWAS-3g3IA3MpykfMYA5KS2ZS_VMNv2FUmnB-Joj84tnZWi4lUTQeTsR-_qklGO2S3-1xJ9D6VrAsN4YT-BPd4pzuipDiMIDQ1iyMUdDniBglE-S105o_ynVLI8Dk1Gx8KwYkBZi53DMaLlaCl3yVJ-ETF4-YMv7J8ZUrLpkuR4ayDT9jnHjPTFU-0xGxVeJb9Vg7n0rzyK7VCKIubNeHdCzWCQk7_X-VEb81IZV9B9dorqZl2RlhPTREn4NLnmD8DgfPSyrHdbwECXhnadHTwMeooJArlSyDRg6gRqTm8Av6t8oxEYc0CxSUJoM9LQ",
                "expiresIn": 3600,
                "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ4di1aQno0bkpvdlRtbS1QU0VxOFRzaGFZNmxvWFZmTGFUc0l2VWxDazZ3In0.eyJqdGkiOiI1ZTA0OWI5MC05ZTdhLTQyYjEtYjk3ZS0yYTAyMDAxMjQwNDciLCJleHAiOjE1NjcyMzYxNjcsIm5iZiI6MCwiaWF0IjoxNTY3MjMyNTY3LCJpc3MiOiJodHRwczovL2Vwb3Mtc3NvLXVhdC5pbnRyYW5ldC5hc2lhL2F1dGgvcmVhbG1zL0VQT1MtVUFUIiwiYXVkIjoiZXBvc3BoIiwic3ViIjoiMDJjOWM5NmUtMjQxNi00YTAxLTkzNjAtMjRiMmQ5NWUyY2MxIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImVwb3NwaCIsImF1dGhfdGltZSI6MCwic2Vzc2lvbl9zdGF0ZSI6IjhlOGE1Nzg4LTYxYjktNDBiYy04MjlhLTkyNmI4N2VlZWNhMCIsImNsaWVudF9zZXNzaW9uIjoiYWE2NTgzZDgtNGUyZS00ODBiLTk4NjgtYmRhZDQ2OWE4NTEzIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX19.LhXiLP4-b39wWgOiFKQAkGflvbm6SDzzdpbY72d1HWgbfV1RRKHFdS9HuSBlSTZVt5Rl3YZI9IEHNXNHK-HM_Wu4vT-EgbAgs9-NbX2EdHUJ2B6YabFXgcrqRBrCegzBSj-AP9-a80yZBqZnh7KVQo5pAoeGrOGpdejG869s6Ky8Ugg2usfYhy9yIHOvS_dgVbrSH3gY-StDWTxV5KA0IfMf78K1T28wnz4PkXBWX3wjOSVK2Rf5lVLDdcCn5nROkteuHTAlfPSBSuXnP6vudwMdr4-wR2gIP_z-BnnxSOMFj-gD8LMQLgy2WBNqzmQMPd7ornM387qrcqixXFEptA",
                "refreshExpiresIn": 3600
            },
            "profile": {
                "code": "70001605",
                "name": "Jcxhfckwjckmy Yxjhnk",
                "email": "CD83796C9C40501698FA17446E1",
                "gender": "FEMALE",
                "level": "EXCLUSIVE",
                "persistency": 0,
                "dob": null,
                "branch": {
                    "code": "00032",
                    "name": "MAGNETITE BRANCH",
                    "area": "North Luzon"
                },
                "status": "ACTIVE",
                "avatarUri": "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
                "licences": [
                    {
                        "code": "ABC-123-459",
                        "type": "LIFE",
                        "issueDate": null,
                        "expiryDate": 1609372800000
                    },
                    {
                        "code": "ABC-123-459",
                        "type": "VUL",
                        "issueDate": null,
                        "expiryDate": 1609372800000
                    }
                ],
                "limits": [
                    {
                        "type": "VERY_HIGH",
                        "floor": 0,
                        "ceiling": 45,
                        "value": 12500000
                    },
                    {
                        "type": "VERY_HIGH",
                        "floor": 46,
                        "ceiling": 50,
                        "value": 7000000
                    },
                    {
                        "type": "VERY_HIGH",
                        "floor": 51,
                        "ceiling": 60,
                        "value": 3000000
                    },
                    {
                        "type": "VERY_HIGH",
                        "floor": 61,
                        "ceiling": 70,
                        "value": 1000000
                    },
                    {
                        "type": "VERY_HIGH",
                        "floor": 71,
                        "ceiling": 79,
                        "value": 0
                    }
                ],
                "claims": [
                    "ApplicationSender"
                ]
            }
        };

        console.log(globalState.getState());
        globalState.dispatch(setUserToken(token));
        globalState.dispatch(setUserName('donj'));

        return <Dashboard history={history} title="Home">
            <div className="home-content">
                <div className="box" onClick={this.showCustomerList}>
                    <h1>Customer Tracker</h1>
                    <div className="icon fa fa-address-card"></div>
                    <div className="bg-icon fa fa-address-card"></div>
                </div>
                <div className="box" onClick={this.showConversation}>
                    <h1>Start New Conversation</h1>
                    <div className="icon fa fa-copy"></div>
                    <div className="bg-icon fa fa-copy"></div>
                </div>
                <div className="box" onClick={this.showProduct}>
                    <h1>Product Catalog</h1>
                    <div className="icon fa fa-shield-alt"></div>
                    <div className="bg-icon fa fa-shield-alt"></div>
                </div>
            </div>
        </Dashboard>;
    }
}
